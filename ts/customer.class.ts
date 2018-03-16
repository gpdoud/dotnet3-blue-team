class Customer {
	id: number;
	name: string;
	creditLimit: number;

	constructor(id: number, name: string, creditLimit: number) {
		this.id = id;
		this.name = name;
		this.creditLimit = creditLimit;
	}

	printOut(): void {
		console.log(`Id=${this.id}, Name=${this.name}, CreditLimit=${this.creditLimit}`);
	}
}
let custs: Customer[] = [
	new Customer(10, "MAX Technical Training", 10000),  
	new Customer(20, "Kroger", 100000),
	new Customer(30, "Great American Insurance", 200000),
	new Customer(40, "Western and Southern", 300000),
	new Customer(50, "LCS", 50000),
]
for (let customer of custs)  /*foreach loop, but in JS, you can't use foreach, so it is a for loop*/ {
	customer.printOut();
}