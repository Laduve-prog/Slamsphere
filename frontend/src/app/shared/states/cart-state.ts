import { State , Action , StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ProductWrapper } from '../models/product-wrapper';
import { AddProduct , RemoveProduct , ClearCart } from '../actions/cart-action';

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
        return state.products.reduce((total, productWrapper) => {
            return total + (productWrapper.product.price * productWrapper.quantity);
          }, 0);
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
    remove(ctx: StateContext<CartStateModel>,action: RemoveProduct){
        const state = ctx.getState();
        const productToRemove = state.products.find(product => product.product.id === action.id)?.product;
        ctx.patchState({
            products: state.products.filter(product => product.product.id !== action.id)
        })
    }

    @Action(ClearCart)
    clearBasket(ctx: StateContext<CartStateModel>){
        ctx.setState({ products: []});
    }
}