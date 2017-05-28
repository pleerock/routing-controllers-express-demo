import {Category} from "./Category";

export class Post {

    constructor(
        public id: number,
        public title: string,
        public text: string,
        public categories: Category[]
    ) { }

}