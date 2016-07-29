import {Category} from "./Category";

export class Post {

    id: number;
    title: string;
    text: string;
    createDate: Date = new Date();
    categories: Category[];

    constructor(id: number,
                title: string,
                text: string,
                categories: Category[]) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.categories = categories;
    }

}