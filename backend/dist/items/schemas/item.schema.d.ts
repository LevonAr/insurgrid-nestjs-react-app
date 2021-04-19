import { Document } from 'mongoose';
export declare class Item extends Document {
    name: string;
    quantity: number;
    description: string;
}
export declare const ItemSchema: import("mongoose").Schema<Item, import("mongoose").Model<any, any>, undefined>;
