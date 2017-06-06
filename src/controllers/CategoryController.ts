import {JsonController, Get, Post, Param, Delete, Body} from "routing-controllers";
import {Service} from "typedi";
import {CategoryRepository} from "../repository/CategoryRepository";
import {Category} from "../model/Category";

@Service()
@JsonController('/categories')
export class CategoryController {

    constructor(
        private categoryRepository: CategoryRepository
    ) { }

    @Get("/")
    all(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }

    @Get("/:id")
    one(@Param("id") id: number): Category {
        return this.categoryRepository.findOne(id);
    }

    @Post("")
    category(@Body() category: Category): Category {
        return this.categoryRepository.save(category);
    }

    @Delete("/:id")
    delete(@Param("id") id: number): Category {
        return this.categoryRepository.remove(id);
    }

}