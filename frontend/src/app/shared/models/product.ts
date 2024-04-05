export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    stock: number;
    featured: boolean;
    active: boolean;
    rating: number;
    size: string[];
}