import { Supply } from "./supply.model";

export interface PaginatedSupplyView {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    items: Supply[];
}
