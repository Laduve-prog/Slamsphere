import { Product } from "../models/product";

export class AddProduct {
    static readonly type ='[Cart] Add';
    constructor(public product: Product){}
}

export class RemoveProduct{
    static readonly type ='[Cart] Remove';
    constructor(public id : number){}
}

export class ClearCart{
    static readonly type ='[Cart] Clear';
}