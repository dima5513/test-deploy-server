import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Get()
  getAllComments(@Query() query: { limit: string; offset: string }) {
    return this.commentService.getAllComments(query);
  }

  @Post()
  createComment(@Body() commentDto: CommentDto) {
    return this.commentService.createComment(commentDto);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentService.deleteComment(id);
  }
}
