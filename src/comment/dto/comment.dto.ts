import { IsString } from 'class-validator';

export class CommentDto {
  @IsString()
  name: string;
  @IsString()
  text: string;
  @IsString()
  date: string;
}
