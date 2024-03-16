import { FormEvent } from 'react';
import { type BaseError, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseAbi } from 'viem'
import useNetworkData from '@/contract/hooks/useNetworkData';
import TokenContract from '../../contract/abis/token.json';

export function ConnectButton() {
    const { data: hash, error, isPending, writeContract } = useWriteContract()
    const { contract } = useNetworkData();

    async function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const tokenId = formData.get('tokenId') as string
        writeContract({
            address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
            abi: parseAbi(['function mint(uint256 tokenId)']),
            functionName: 'mint',
            args: [BigInt(tokenId)],
        })
        // writeContract({
        //     address: contract,
        //     abi: TokenContract,
        //     functionName: "approve",
        //     args: [BigInt(tokenId), BigInt(20000)] as any,
        // });
    }

    const { isLoading: isConfirming, isSuccess: isConfirmed } =
        useWaitForTransactionReceipt({
            hash,
        })
    return (
        <div>
            <form className="set" onSubmit={submit}>
                <input name="tokenId" placeholder="Token ID" required />
                <button disabled={isPending} type="submit">
                    {isPending ? 'Confirming...' : 'Mint'}
                </button>
            </form>
            {hash && <div>Transaction Hash: {hash}</div>}
            {isConfirming && <div>Waiting for confirmation...</div>}
            {isConfirmed && <div>Transaction confirmed.</div>}
            {error && (
                <div>Error: {(error as BaseError).shortMessage || error.message}</div>
            )}
        </div>
    )
}
