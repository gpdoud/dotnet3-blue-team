import {Order} from "./order.class";
import {Customer} from "./customer.class";

class SampleData{

    printHeader(): void{
      console.log("Order Description         Total          Customer Id")
      console.log("===== =================== ============== ============")
  }

    printOut(order: Order): void{
      console.log(order.id + "   " + order.description + "           " + order.total + "       " order.CustomerId)    
  } 
  
  
 
}
 
let customerData: Customer[] = [
    new Customer(10, "MAX Technical Training", 10000 ),
    new Customer(20, "Kroger", 100000),
    new Customer(30, "Great American Insurance", 200000 ),
    new Customer(40, "Western and Southern", 300000 ),
    new Customer(50, "LCS", 50000 )
  ];

let orderData: Order[] = [
    new Order(100, "Order 100", 1543.67, 30),
    new Order(200, "Order 200", 7364.33, 20),
    new Order(300, "Order 300", 4524.25, 40),
    new Order(400, "Order 400", 4843.03, 10),
    new Order(500, "Order 500", 6483.47, 10),
    new Order(600, "Order 600", 8374.15, 40),
    new Order(700, "Order 700", 4927.66, 50),
    new Order(800, "Order 800", 6362.32, 30),
    new Order(900, "Order 900", 4722.55, 40)
  ];


let sampleData = new SampleData();

sampleData.printHeader();

for(let order of orderData){
	  sampleData.printOut(order);
}