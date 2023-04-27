import { BigNumberish } from "ethers";

/* export interface BadgeInterface {
    text: string;
    filled?: boolean;
}

export interface ButtonInterface {
    text: string;
    type: string;
    href: string;
    filled?: boolean;
    icon?: JSX.Element;
}

export interface CardInterface {
    indicator?: string,
    badge?: BadgeInterface,
    image?: string,
    title: string,
    subtitle?: string,
    body: string,
    btn: ButtonInterface
} */

export interface NftCardInterface {
    NftTokenID: number,
   // price: BigNumberish,
   price: number,
    seller: string,
    imageUri: string,
    name: string,
    desc:string,
    cardType:string,
//    onClickFunc: (e: React.MouseEvent<HTMLElement>, tokenID: number, price: number) => void;
}

export interface NftTypeInterface {
 nftType:string
}

export interface ButttonInterface {
    
    tokenId: number,
    tokenPrice: number,
    inputPrice: number,
    cardType: string
 }