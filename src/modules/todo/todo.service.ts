import { Injectable } from "@nestjs/common";
import { Todo } from "src/models/todo.model";

@Injectable()
export class TodoService {

    private todo: Todo[] = [
        { 'id': 1, name: 'task 1', status: 1 },
        { 'id': 2, name: 'task 2', status: 1 }
    ]

    getTodo(): Todo[] {
        return this.todo;
    }

    detail(id: number): Todo {
        return this.todo.find(item => id = item.id)
    }

    createTodo(): string {
        return "This is method create Todo";
    }

    updateTodo(): string {
        return "This is method update Todo"
    }

    deleteTodo(): string {
        return "This is method delete Todo"
    }
};