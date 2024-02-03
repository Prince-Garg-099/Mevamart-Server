"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const orders_schema_1 = require("../schemas/orders.schema");
let OrderService = class OrderService {
    constructor(orderModel) {
        this.orderModel = orderModel;
    }
    async createorder(newuser) {
        const order = await new this.orderModel(newuser);
        return order.save();
    }
    async getallorders() {
        console.log("getallorders");
        const allproducts = await this.orderModel.find();
        return allproducts;
    }
    async getallordersbyID(userId) {
        const allorders = await this.orderModel.find({ userid: userId });
        console.log(allorders);
        return allorders;
    }
    async getsingleorder(orderid) {
        const order = await this.orderModel.find({ _id: orderid });
        console.log(order);
        return order;
    }
    async setorderstatus(data) {
        const status = await this.orderModel.updateOne({ _id: data.order_id }, {
            $set: {
                order_status: data.statusValue
            }
        });
    }
    async cancelorder(data) {
        const status = await this.orderModel.updateOne({ _id: data.order_id }, {
            $set: {
                order_status: "Cancelled"
            }
        });
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(orders_schema_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map