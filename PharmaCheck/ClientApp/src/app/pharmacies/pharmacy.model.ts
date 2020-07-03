import { Supply } from "../supplies/supply.model";
import { Address } from "../addresses/address.model";

export interface Pharmacy {
    id: number;
    name: string;
    addresses: Address[];
    supplies: Supply[];
}
