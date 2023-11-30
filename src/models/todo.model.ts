export class Todo {
    id: number;
    name: string;
    status: number;

    constructor({id, name, status}) {
        this.id = id
        this.name = name
        this.status = status
    }
}