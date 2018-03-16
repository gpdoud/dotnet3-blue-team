# dotnet3-blue-team
.NET Bootcamp 3 - Blue Team

## Team project to create list of orders and customers in Typescript using node. The list of orders should include:

    - Order Id
    - Order Description
    - Order Total
    - Customer Name

The team project is to create a list of orders showing the associated customers.

### Orders

Orders represent sales to customers. Every order must have a customer associated with it.

Sample report:

```
Orders
 Id Description                    Total    Customer
=== ============================== ======== ====================
000 Order 000                      1234.56  Customer-0000
```

Order data includes:

    - Id (int) Primary key
    - Description (string) required
    - Total (currency) required
    - CustomerId (int) FK Customer
    - Customer (Customer) Customer instance

### Customers

Customers are the buyers of our project. They are used in orders to identify who bought our project and who should be billed for it.

Customer data includes:

    - Id (int) Primary Key
    - Name (string) required
    - CreditLimit (currency) required

## Sample Data

```
let customerData: Any[] = [
  { id: 10, name: "MAX Technical Training", creditLimit: 10000 },
  { id: 20, name: "Kroger", creditLimit: 100000 },
  { id: 30, name: "Great American Insurance", creditLimit: 200000 },
  { id: 40, name: "Western and Southern", creditLimit: 300000 },
  { id: 50, name: "LCS", creditLimit: 50000 }
];
let orderData: Any[] = [
  { id: 100, description: "Order 100", total: 1543.67, customerId: 30 },
  { id: 200, description: "Order 200", total: 7364.33, customerId: 20 },
  { id: 300, description: "Order 300", total: 4524.25, customerId: 40 },
  { id: 400, description: "Order 400", total: 4843.03, customerId: 10 },
  { id: 500, description: "Order 500", total: 6483.47, customerId: 10 },
  { id: 600, description: "Order 600", total: 8374.15, customerId: 40 },
  { id: 700, description: "Order 700", total: 4927.66, customerId: 50 },
  { id: 800, description: "Order 800", total: 6362.32, customerId: 30 },
  { id: 900, description: "Order 900", total: 4722.55, customerId: 40 }
];
```