import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/post.entity';
import { FeedPost } from './models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}

  create(feedPost: FeedPost) {
    return this.feedPostRepository.save(feedPost);
  }
}
