import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import PatchPostDto from './dtos/patchPost.dto';
import CreatePostDto from './dtos/createPost.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getOwnPosts(@Req() req) {
    return this.postService.getOwnPosts(req.user.id);
  }

  @Post()
  createPost(@Req() req, @Body() body: CreatePostDto) {
    return this.postService.createPost(req.user.id, body);
  }

  @Patch(':postId')
  patchPost(@Req() req, @Param() params, @Body() body: PatchPostDto) {
    return this.postService.patchPost(req.user.id, params.postId, body);
  }
}