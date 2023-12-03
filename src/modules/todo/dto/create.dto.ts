import { isNotEmpty } from "class-validator";

export class CreateTodoDto  {
    @isNotEmpty()
    name: string;
}