import { Pharmacy } from "../pharmacies/pharmacy.model";

export interface Address {
    id: number;
    description: string;
    latitude: number;
    longitude: number;
    pharmacy: Pharmacy;
    pharmacyid: number;
}
