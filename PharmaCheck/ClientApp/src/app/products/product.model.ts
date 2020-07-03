import { Supply } from "../supplies/supply.model";

export interface Product {
    id: number;
    name: string;
    activeSubstance: string;
    dosage: number;
    formulation: Formulation;
    onPrescription: boolean;
    rcp: string;
    supplies: Supply[];
}

export enum Formulation {
    tablet = 0,
    capsule = 1,
    suppository = 2,
    suspension = 3,
    solution = 4,
    injectable = 5,
    perfuzable = 6,
    IUD = 7
}
