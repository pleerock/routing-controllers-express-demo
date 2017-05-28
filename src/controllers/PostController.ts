import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {PostRepository} from "../repository/PostRepository";
import {Post as PostModel} from "../model/Post";

@Service()
@JsonController('/posts')
export class PostController {

    constructor(
        private postRepository: PostRepository
    ) { }

    @Get("/")
    all(): Promise<PostModel[]> {
        return this.postRepository.findAll();
    }

    @Get("/:id")
    one(@Param("id") id: number): PostModel {
        return this.postRepository.findOne(id);
    }

    @Post("")
    post(@Body() post: Post): PostModel {
        return this.postRepository.save(post);
    }

    @Delete("/:id")
    delete(@Param("id") id: number): PostModel {
        return this.postRepository.remove(id);
    }

}