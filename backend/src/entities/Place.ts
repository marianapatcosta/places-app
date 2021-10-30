import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity('places')
class Place {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  imageUrl: string;

  @Column()
  creatorId: string;

  @JoinColumn({ name: ' creator_id' })
  @ManyToOne(() => User)
  creator: User;

  @CreateDateColumn()
  created_at: Date;
}

export { Place };
