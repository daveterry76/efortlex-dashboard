import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Dispatch, JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, SetStateAction } from "react";

export interface PopularProduct {
    id?: string | undefined
    imageSrc: any
    setImageSrc: Dispatch<SetStateAction<any>>
    productTitle: string
    setProductTitle: Dispatch<SetStateAction<string>>
    productDesc: string
    setProductDesc: Dispatch<SetStateAction<string>>
    amountNew: string | number
    setAmountNew: Dispatch<SetStateAction<string | number>>
    amountOld: string | number
    setAmountOld: Dispatch<SetStateAction<string | number>>
    amountDiff: number | string
    setAmountDiff: Dispatch<SetStateAction<number>>
  }

export interface ProductsContextTypes {
    popularProducts: PopularProduct[],
    setPopularProducts: Dispatch<SetStateAction<PopularProduct[]>>
    id?: string | undefined
    imageSrc: any
    setImageSrc: Dispatch<SetStateAction<any>>
    productTitle: string
    setProductTitle: Dispatch<SetStateAction<string>>
    productDesc: string
    setProductDesc: Dispatch<SetStateAction<string>>
    amountNew: string | number
    setAmountNew: Dispatch<SetStateAction<string | number>>
    amountOld: string | number
    setAmountOld: Dispatch<SetStateAction<string | number>>
    amountDiff: number
    setAmountDiff: Dispatch<SetStateAction<number>>
}



// [{ id: string, imageSrc: any, setImageSrc: Dispatch<SetStateAction<any>>, productTitle: string, setProductTitle: Dispatch<SetStateAction<string>>, productDesc: string, setProductDesc: Dispatch<SetStateAction<string>>, amountNew: number, setAmountNew: Dispatch<SetStateAction<number>>, amountOld: number, setAmountOld: Dispatch<SetStateAction<number>>, amountDiff: number, setAmountDiff: Dispatch<SetStateAction<number>> }]