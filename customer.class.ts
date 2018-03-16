export class Customer {
	id: number;
	name: string;
	creditLimit: number;

	constructor(id: number, name: string, creditLimit: number) {
		this.id = id;
		this.name = name;
		this.creditLimit = creditLimit;
	}
}