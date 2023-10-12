import firstProductImg from '../components/Main/subcomponents/Content/assets/first-product-img.svg'
import secondProductImg from '../components/Main/subcomponents/Content/assets/second-product-img.svg'
import thirdProductImg from '../components/Main/subcomponents/Content/assets/third-product-img.svg'
import fourthProductImg from '../components/Main/subcomponents/Content/assets/fourth-product-img.svg'
import fifthProductImg from '../components/Main/subcomponents/Content/assets/fifth-product-img.svg'
import sixthProductImg from '../components/Main/subcomponents/Content/assets/sixth-product-img.svg'
import { ProductsContextTypes } from '../types/ProductsContextTypes'
import { v4 as uuid } from 'uuid';
// import { PopularProduct } from './ProductsDefault'


export const products = [
    {
        id: uuid(),
        imageSrc: firstProductImg,
        setImageSrc: () => {},
        productTitle: "Book Dairy",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 0.99,
        setAmountNew: () => {},
        amountOld: 1.99,
        setAmountOld: () => {},
        amountDiff: 1,
        setAmountDiff: () => {},
    },
    {
        id: uuid(),
        imageSrc: secondProductImg,
        setImageSrc: () => {},
        productTitle: "Simple Headphone",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 1.80,
        setAmountNew: () => {},
        amountOld: 2.00,
        setAmountOld: () => {},
        amountDiff: 0.20,
        setAmountDiff: () => {},
    },
    {
        id: uuid(),
        imageSrc: thirdProductImg,
        setImageSrc: () => {},
        productTitle: "Company Watch",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 3.99,
        setAmountNew: () => {},
        amountOld: 5.99,
        setAmountOld: () => {},
        amountDiff: 2,
        setAmountDiff: () => {},
    },
    {
        id: uuid(),
        imageSrc: fourthProductImg,
        setImageSrc: () => {},
        productTitle: "Coffee Cup",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 0.70,
        setAmountNew: () => {},
        amountOld: 1.00,
        setAmountOld: () => {},
        amountDiff: 0.30,
        setAmountDiff: () => {},
    }
]

export const recommendedProducts = [
    {
        imageSrc: fifthProductImg,
        setImageSrc: () => {},
        productTitle: "App NetComputer",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 399.99,
        setAmountNew: () => {},
        amountOld: 499.99,
        setAmountOld: () => {},
        amountDiff: 100,
        setAmountDiff: () => {},
    },
    {
        imageSrc: sixthProductImg,
        setImageSrc: () => {},
        productTitle: "T-Shirt Black",
        setProductTitle: () => {},
        productDesc: "Lorem ipsum dolor sit amet",
        setProductDesc: () => {},
        amountNew: 3.99,
        setAmountNew: () => {},
        amountOld: 4.99,
        setAmountOld: () => {},
        amountDiff: 1.00,
        setAmountDiff: () => {},
    }
]