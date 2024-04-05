import { getMessageSolana } from "@/services";
import { SolanaSignInInput } from "@solana/wallet-standard-features";

export const createSignInData = async (address: any): Promise<SolanaSignInInput> => {
  // Convert the Date object to a string
  const messageSolana = await getMessageSolana(address);
  const dataSignIn = JSON.parse(messageSolana.data.data);
  // const currentUrl = new URL(dataSignIn.domain);
  // const domain = currentUrl.host;
  const signInData: SolanaSignInInput = {
    statement: dataSignIn.statement,
    version: dataSignIn.version,
    chainId: dataSignIn.chainId,
    nonce: dataSignIn.nonce,
    issuedAt: dataSignIn.issuedAt,
    expirationTime: dataSignIn.expirationTime,
    resources: [dataSignIn.domain],
  };

  return signInData;
};
