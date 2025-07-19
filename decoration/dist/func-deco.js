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
function LogMethod(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`메서드 ${propertyKey} 호출됨. 인자:`, args);
        return original.apply(this, args);
    };
}
class MyService {
    greet(name) {
        return `Hello, ${name}`;
    }
}
__decorate([
    LogMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MyService.prototype, "greet", null);
let ms = new MyService();
ms.greet("World");
