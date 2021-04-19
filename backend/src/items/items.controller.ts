import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param() param): Promise<Item> {
    return this.itemsService.findById(param.id);
  }

  @Post()
  async create(@Body() itemDTO: ItemDTO): Promise<Item> {
    return this.itemsService.create(itemDTO);
  }
}