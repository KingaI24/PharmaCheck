import { Product } from "../products/product.model";
import { Pharmacy } from "../pharmacies/pharmacy.model";

export interface Supply {
    id: number;
    prodid: number;
    pharmid: number;
    product: Product;
    pharmacy: Pharmacy;
    price: number;
    discount: number;
    stock: number;
}
