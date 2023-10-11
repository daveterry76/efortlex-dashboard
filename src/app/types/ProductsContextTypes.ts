import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Dispatch, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, SetStateAction } from "react";

export interface ProductsContextTypes {
    popularProducts: [{id: string, imageSrc: any, productTitle: string, productDesc: string, amountNew: number, amountOld: number }],
    setPopularProducts: Dispatch<SetStateAction<[{ imageSrc: any, productTitle: string, productDesc: string, amountNew: number, amountOld: number }]>>
    id: string
    imageSrc: any
    setImageSrc: Dispatch<SetStateAction<any>>
    productTitle: string
    setProductTitle: Dispatch<SetStateAction<string>>
    productDesc: string
    setProductDesc: Dispatch<SetStateAction<string>>
    amountNew: number
    setAmountNew: Dispatch<SetStateAction<number>>
    amountOld: number
    setAmountOld: Dispatch<SetStateAction<number>>
    amountDiff: number
    setAmountDiff: Dispatch<SetStateAction<number>>
}
