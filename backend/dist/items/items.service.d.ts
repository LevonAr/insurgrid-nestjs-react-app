import { Item } from './schemas/item.schema';
import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';
export declare class ItemsService {
    private readonly itemModel;
    constructor(itemModel: Model<Item>);
    findAll(): Promise<Item[]>;
    findById(id: string): Promise<Item>;
    create(item: ItemDTO): Promise<Item>;
}
