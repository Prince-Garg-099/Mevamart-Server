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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const create_order_dto_1 = require("../dtos/create-order-dto");
const order_service_1 = require("../services/order.service");
let OrderController = class OrderController {
    constructor(orderservice) {
        this.orderservice = orderservice;
    }
    createorder(data) {
        return this.orderservice.createorder(data);
    }
    getallordersbyId(data) {
        return this.orderservice.getallordersbyID(data.userId);
    }
    getallorders() {
        return this.orderservice.getallorders();
    }
    getuserdata(orderid) {
        console.log(orderid);
        return this.orderservice.getsingleorder(orderid);
    }
    setorderstatus(order_id) {
        console.log(order_id);
        return this.orderservice.setorderstatus(order_id);
    }
    cancelorder(data) {
        console.log(data);
        return this.orderservice.cancelorder(data);
    }
};
__decorate([
    (0, common_1.Post)('myorder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_dto_1.CreateOrderDto]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "createorder", null);
__decorate([
    (0, common_1.Post)('myorders'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getallordersbyId", null);
__decorate([
    (0, common_1.Get)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getallorders", null);
__decorate([
    (0, common_1.Get)('orderid/:orderid'),
    __param(0, (0, common_1.Param)('orderid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "getuserdata", null);
__decorate([
    (0, common_1.Put)('set_status'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "setorderstatus", null);
__decorate([
    (0, common_1.Put)('cancelorder'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancelorder", null);
OrderController = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map