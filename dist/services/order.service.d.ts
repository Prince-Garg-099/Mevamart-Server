/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/dtos/create-order-dto';
import { Order } from 'src/schemas/orders.schema';
export declare class OrderService {
    private orderModel;
    constructor(orderModel: Model<Order>);
    createorder(newuser: CreateOrderDto): Promise<import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: string;
    }>, never>>;
    getallorders(): Promise<(import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: string;
    }>, never>)[]>;
    getallordersbyID(userId: any): Promise<(import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: string;
    }>, never>)[]>;
    getsingleorder(orderid: any): Promise<(import("mongoose").Document<unknown, {}, Order> & Omit<Order & Required<{
        _id: string;
    }>, never>)[]>;
    setorderstatus(data: any): Promise<void>;
    cancelorder(data: any): Promise<void>;
}
