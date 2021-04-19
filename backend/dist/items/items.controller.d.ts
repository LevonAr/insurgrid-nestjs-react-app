import { ItemDTO } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    findById(param: any): Promise<Item>;
    create(itemDTO: ItemDTO): Promise<Item>;
}
