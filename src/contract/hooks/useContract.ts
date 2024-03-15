'use client';

import type { Abi } from 'viem';
import useNetworkData from './useNetworkData';
import { useReadContract, useWriteContract } from 'wagmi';
import type { Config, UseReadContractParameters, UseWriteContractParameters } from 'wagmi';
import { wagmiConfig } from '@/configs/wallet.config';
import { contractABI } from '../abis/contact';

type UseContractReadParameters = Omit<UseReadContractParameters, 'abi' | 'address' | 'functionName' | 'args'>;

export function useContractRead<T = unknown>(
  functionName: string,
  args: Array<any> = [],
  options?: UseContractReadParameters,
) {
  const { contract } = useNetworkData();
  return useReadContract<Abi, string, Array<any>, Config, T>({
    abi: contractABI as Abi,
    address: contract,
    functionName: functionName,
    args,
    query: {} as any,
    ...options,
  });
}

type useContractWriteParameters = Pick<UseWriteContractParameters, 'mutation'>['mutation'];

export function useContractWrite(functionName: string, options?: useContractWriteParameters) {
  const { contract } = useNetworkData();
  const { writeContractAsync, writeContract, ...rest } = useWriteContract({
    config: wagmiConfig,
    mutation: {
      // onError: (error) => {
      //   handleError(error);
      // },
      onSettled: (data) => {
        console.log(data);
      },
      ...options,
    },
  });

  const write = async (args: Array<any> = []) => {
    await writeContractAsync({
      abi: contractABI as Abi,
      address: contract,
      args,
      functionName,
    });
  };
  return { write, ...rest };
}