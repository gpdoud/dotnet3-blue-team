export class Order{
    id: number;
    description: string; 
    total: number;
    CustomerId: number;

    constructor(id: number, description: string, total: number, CustomerId: number){
        this.id = id,
        this.description = description,
        this.total = total, 
        this.CustomerId = CustomerId;
    }
}