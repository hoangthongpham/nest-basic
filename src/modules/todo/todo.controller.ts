import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Todo } from 'src/models/todo.model';
import { TodoDto } from 'src/dto/todo.dto';


@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodo(): ResponseData<Todo> {
        try {
            return new ResponseData(this.todoService.getTodo(), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
        } catch (error) {
            return new ResponseData(this.todoService.getTodo(), HttpStatus.ERROR, HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detail(@Param('id') id:number): ResponseData<Todo> {
        return new ResponseData(this.todoService.detail(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }

    @Post()
    createTodo(@Body() todo: TodoDto): string {
        return new ResponseData(todo, HttpStatus.SUCCESS, HttpMessage.SUCCESS)
    }
    @Put('/:id')
    updateTodo(): string {
        return this.todoService.updateTodo()
    }

    @Delete('/:id')
    deleteTodo(): string {
        return this.todoService.deleteTodo()
    }
}