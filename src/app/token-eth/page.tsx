'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { useContractRead, useContractWrite } from '@/contract/hooks/useContract';
import ConnectButton from '@/components/ConnectButton /index';

export default function Home() {
  const { address } = useAccount();
  const [recipient, setRecipient] = useState('');
  const tokenName = useContractRead<string>('name');
  const tokenBalance = useContractRead<bigint>('balanceOf', [address]);
  const tokenDecimals = useContractRead<bigint>('decimals');
  const tokenSymbol = useContractRead<string>('symbol');

  const tokenTransfer = useContractWrite('transfer', {
    onSuccess(data) {
      console.log('data: transfer write ', data);
    },
  });

  const tokenNameData = tokenName.data;
  const tokenDecimalsData = Number(tokenDecimals.data);
  const tokenBalanceData = formatUnits(tokenBalance.data || BigInt(0), tokenDecimalsData);
  const tokenSymbolData = tokenSymbol.data as string;

  const handleTransfer = async () => {
    const amount = parseUnits('10', tokenDecimalsData);
    await tokenTransfer.write([recipient, amount]);
  };

  return (
    <main className="h-screen w-full flex justify-center items-center bg-black text-white">
      <div className="flex flex-col gap-5 items-center">
        <ConnectButton />

        {address ? (
          <div className="">
            <p>
              Token Balance: <span className="text-green-500 font-bold">{tokenBalanceData}</span>
            </p>
            <p>
              Token Name: <span className="text-green-500 font-bold">{tokenNameData}</span>
            </p>
            <p>
              Token Decimals: <span className="text-green-500 font-bold">{tokenDecimalsData} </span>
            </p>
            <p>
              Token Symbol: <span className="text-green-500 font-bold">{tokenSymbolData}</span>
            </p>
          </div>
        ) : (
          <p className="text-red-500">Connect Your Wallet</p>
        )}

        <div className="flex gap-5">
          <input
            type="text"
            placeholder="Enter recipient address"
            className="p-2 border-none rounded-md focus:outline-cyan-300 text-black"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <button className="border-cyan-700 border-2 rounded-md px-3 py-1" onClick={handleTransfer}>
            Transfer
          </button>
        </div>
      </div>
    </main>
  );
}
