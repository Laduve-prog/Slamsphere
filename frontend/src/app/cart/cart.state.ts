import { State , Action , StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ProductWrapper } from '../models/product-wrapper';
import { AddProduct , RemoveProduct , ClearCart } from './cart-action';

export interface CartStateModel{
    products: ProductWrapper[];
}

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        products:[]
    }
})

@Injectable()
export class CartState{

    constructor(){}

    @Selector()
    static getCartProducts(state: CartStateModel){
        return state.products;
    }

    @Selector()
    static totalBasketPrice(state: CartStateModel){
        //TODO
    }

    @Selector()
    static numberOfProductsInCart(state: CartStateModel){
        return state.products.length;
    }

    @Action(AddProduct)
    add(ctx: StateContext<CartStateModel>, action: AddProduct){
        const state = ctx.getState();
        const newProduct : ProductWrapper = { product: action.product , quantity:1};
        ctx.patchState({
            products: [...state.products, newProduct]
        })
    }

    @Action(RemoveProduct)
    remove(ctx: StateContext<CartStateModel>,action: AddProduct){
       
    }

    @Action(ClearCart)
    clearBasket(ctx: StateContext<CartStateModel>){
        ctx.setState({ products: []});
    }
}