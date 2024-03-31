import { getMessageSolana } from "@/services";
import { SolanaSignInInput } from "@solana/wallet-standard-features";

export const createSignInData = async (address: any): Promise<SolanaSignInInput> => {
    // Convert the Date object to a string
    const messageSolana = await getMessageSolana(address);
    const dataSignIn = JSON.parse(messageSolana.data.data)
    const currentUrl = new URL(dataSignIn.uri);
    const domain = currentUrl.host;
    const signInData: SolanaSignInInput = {
        domain,
        statement: dataSignIn.statement,
        version: dataSignIn.version,
        nonce: dataSignIn.nonce,
        chainId: dataSignIn.chainId,
        issuedAt: dataSignIn.issuedAt,
    };

    return signInData;
};
