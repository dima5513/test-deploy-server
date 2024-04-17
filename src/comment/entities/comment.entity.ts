import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Comment')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'text' })
  text: string;

  @Column({ name: 'date' })
  date: string;
}
