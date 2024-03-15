// "use client";
// import React from "react";
// import {
//     useAccount,
//     useContractRead,
//     useContractWrite,
//     usePrepareContractWrite,
//     useWaitForTransaction,
// } from "wagmi";
// import ABI from "../../../../contract/abi/devcon.json";

// const contractConfig = {
//     address: "0x4BaDd6b763D23258Fd89d57C44D10f86dAc63E45",
//     abi: ABI,
// } as const;

// export function CheckIn() {
//     const [mounted, setMounted] = React.useState(false);
//     React.useEffect(() => setMounted(true), []);

//     const [totalMinted, setTotalMinted] = React.useState(0);
//     const { isConnected } = useAccount();

//     const { config: contractWriteConfig } = usePrepareContractWrite({
//         ...contractConfig,
//         functionName: "checkin",
//     });

//     const {
//         data: mintData,
//         write: mint,
//         isLoading: isMintLoading,
//         isSuccess: isMintStarted,
//         error: mintError,
//     } = useContractWrite(contractWriteConfig);

//     const { data: totalSupplyData } = useContractRead({
//         ...contractConfig,
//         functionName: "totalSupply",
//         watch: true,
//     });

//     const {
//         data: txData,
//         isSuccess: txSuccess,
//         error: txError,
//     } = useWaitForTransaction({
//         hash: mintData?.hash,
//     });

//     React.useEffect(() => {
//         if (totalSupplyData) {
//             setTotalMinted(Number(totalSupplyData));
//         }
//     }, [totalSupplyData]);

//     const isMinted = txSuccess;

//     return (
//         // <div className="flex justify-center">
//         //     <div className="w-full">
//         //         <div
//         //             style={{ flex: "1 1 auto" }}
//         //             className="w-full flex flex-col items-center text-center"
//         //         >
//         //             <div className="w-1/6">
//         //                 <h1>Road To DevCon</h1>
//         //                 <p style={{ margin: "12px 0 24px" }}>
//         //                     {Number(totalMinted)} participants!
//         //                 </p>

//         //                 {mintError && (
//         //                     <p style={{ marginTop: 24, color: "#FF6257" }}>
//         //                         Error: {mintError.message}
//         //                     </p>
//         //                 )}
//         //                 {txError && (
//         //                     <p style={{ marginTop: 24, color: "#FF6257" }}>
//         //                         Error: {txError.message}
//         //                     </p>
//         //                 )}

//         //                 {mounted && isConnected && !isMinted && (
//         //                     <button
//         //                         disabled={!mint || isMintLoading || isMintStarted}
//         //                         className="my-8 w-full h-10 inline-flex justify-center items-center  transition-all  rounded px-4 py-1.5 md:py-2 text-base font-semibold leading-7 text-zinc-800   bg-indigo-400 ring-1  duration-150  hover:text-black hover:drop-shadow-cta   hover:bg-green-300"
//         //                         data-mint-loading={isMintLoading}
//         //                         data-mint-started={isMintStarted}
//         //                         onClick={() => mint?.()}
//         //                     >
//         //                         {isMintLoading && "Waiting for approval"}
//         //                         {isMintStarted && "Loading..."}
//         //                         {!isMintLoading && !isMintStarted && "Check in"}
//         //                     </button>
//         //                 )}
//         //             </div>
//         //         </div>
//         //     </div>
//         // </div>
//         <div>aaaa</div>
//     );
// }
