import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";

import {ReactElement, createContext, CSSProperties} from "react";
import { Product, ProductContextProps, onChangeArgs } from "../interfaces";


export const ProductContext = createContext({}as ProductContextProps );
const { Provider } =ProductContext;


export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?:string;
    style?:CSSProperties;
    onChange?: (args:onChangeArgs) => void;
    value?:number;
}


export const ProductCard = ({ product, children, className, style, onChange, value }:Props) => {

    const {counter,increaseBy} = useProduct({ onChange,product,value  });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className} `} style={style}>
                {
                    children
                }
            </div>
        </Provider>
    )
}
