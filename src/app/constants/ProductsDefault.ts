import { Dispatch, SetStateAction } from "react";
import PopularProducts from "../components/Main/subcomponents/Content/subcomponents/PopularProducts";
import { ProductsContextTypes } from "../types/ProductsContextTypes";
import { products } from "./Products";



export const ProductsDefault: ProductsContextTypes = {
    id: '',
    popularProducts: products,
    setPopularProducts: () => {},
    imageSrc: '',
    setImageSrc: () => {},
    productTitle: '',
    setProductTitle: () => {},
    productDesc: '',
    setProductDesc: () => {},
    amountNew: 0,
    setAmountNew: () => {},
    amountOld: 0,
    setAmountOld: () => {},
    amountDiff: 0,
    setAmountDiff: () => {}
}