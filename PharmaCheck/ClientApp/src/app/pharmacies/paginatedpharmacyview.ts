import { Pharmacy } from "./pharmacy.model";

export interface PaginatedPharmacyView {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    items: Pharmacy[];
}
