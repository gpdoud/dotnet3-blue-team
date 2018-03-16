"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var order_class_1 = require("./order.class");
var customer_class_1 = require("./customer.class");
var SampleData = /** @class */ (function () {
    function SampleData() {
    }
    SampleData.prototype.printHeader = function () {
        console.log("Order Description         Total          Customer Id");
        console.log("===== =================== ============== ============");
    };
    SampleData.prototype.printOut = function (order) {
        console.log(order.id + "   " + order.description + "           " + order.total + "       ", order.CustomerId);
    };
    return SampleData;
}());
var customerData = [
    new customer_class_1.Customer(10, "MAX Technical Training", 10000),
    new customer_class_1.Customer(20, "Kroger", 100000),
    new customer_class_1.Customer(30, "Great American Insurance", 200000),
    new customer_class_1.Customer(40, "Western and Southern", 300000),
    new customer_class_1.Customer(50, "LCS", 50000)
];
var orderData = [
    new order_class_1.Order(100, "Order 100", 1543.67, 30),
    new order_class_1.Order(200, "Order 200", 7364.33, 20),
    new order_class_1.Order(300, "Order 300", 4524.25, 40),
    new order_class_1.Order(400, "Order 400", 4843.03, 10),
    new order_class_1.Order(500, "Order 500", 6483.47, 10),
    new order_class_1.Order(600, "Order 600", 8374.15, 40),
    new order_class_1.Order(700, "Order 700", 4927.66, 50),
    new order_class_1.Order(800, "Order 800", 6362.32, 30),
    new order_class_1.Order(900, "Order 900", 4722.55, 40)
];
var sampleData = new SampleData();
sampleData.printHeader();
for (var _i = 0, orderData_1 = orderData; _i < orderData_1.length; _i++) {
    var order = orderData_1[_i];
    sampleData.printOut(order);
}
