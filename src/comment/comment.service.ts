import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async getAllComments(query: { limit: string; offset: string }) {
    const limit = Number(query.limit);
    const offset = Number(query.offset);

    if (isNaN(limit))
      return new BadRequestException('Значение limit должно быть числом');
    if (isNaN(offset))
      return new BadRequestException('Значение offset должно быть числом');

    const count = await this.commentRepository.count();

    const comments = await this.commentRepository.find({
      take: limit >= count ? count : limit,
      skip: offset,
    });

    return {
      comments,
      count,
    };
  }
  async createComment(body) {
    const createdComment: Comment = await this.commentRepository.save(body);

    return {
      status: 'success',
      id: createdComment.id,
    };
  }

  async deleteComment(id: string) {
    const deletedComment = await this.commentRepository.delete(id);
    if (deletedComment.affected) {
      return {
        status: 'success',
      };
    }
  }
}
