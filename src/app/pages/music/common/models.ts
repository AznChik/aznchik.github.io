export interface Cart {
    items: Item[];
    total: number;
}

export interface Item {
    cost: number;
    count: number;
    currency: string;
    id: string;
    image: string;
    name: string;
}

//////////////////////////////

export interface Stock {
    instruments: Product[];
    vinyls: Product[];
}

export interface Product {
    added: boolean;
    cost: number;
    currency: string;
    id: string;
    image: string;
    name: string;
    stock: number;
    subInfo: string;
    year: number;
}
