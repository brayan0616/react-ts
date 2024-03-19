
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";


export interface Product {
    id: string;
    img?: string
    title: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value:number) => void;
    
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps) : JSX.Element,
    Buttons: ({className}:ProductButtonsProps) => JSX.Element
    Image: ({ img }: ProductImageProps) => JSX.Element,
    Title: ({ title }: ProductTitleProps) => JSX.Element,
}