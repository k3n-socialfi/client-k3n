import { PublicKey } from "@solana/web3.js";

export type TService = {
  seed?: number,
  id?:string,
  kol?: any,
  serviceName: string,
  platform: string,
  serviceFee: number,
  currency: string,
  paymentMethod: string ,
  description: string,
}