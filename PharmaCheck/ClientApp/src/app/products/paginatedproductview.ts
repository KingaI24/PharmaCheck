import { Product } from "./product.model";

export interface PaginatedProductView {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;
    totalPages: number;
    items: Product[];
}
