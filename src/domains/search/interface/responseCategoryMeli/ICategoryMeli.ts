export interface ICategoryMeli {
    id: string;
    name: string;
    picture: string;
    total_items_in_this_category: number;
    path_from_root: {
        id: string;
        name: string;
    }
}
