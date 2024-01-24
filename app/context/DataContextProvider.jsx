"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useAccount, useNetwork, useWalletClient } from "wagmi";
import { useEthersSigner } from "../utils/signer.ts";
import { ethers, BigNumber } from "ethers";
import {
  course_address,
  course_abi,
  usdc_address,
  usdc_abi,
} from "../constants";
const DataContext = createContext();
const DataContextProvider = ({ children }) => {
  const { address } = useAccount();
  const { chains, chain } = useNetwork();
  const [activeChain, setActiveChainId] = useState(chain?.id);
  const signer = useEthersSigner(activeChain);

  useEffect(() => {
    setActiveChainId(chain?.id);
  }, [chain?.id]);

  useEffect(() => {
    if (!signer) return;
  }, [signer, address]);

  const getContractInstance = async (contractAddress, contractAbi) => {
    try {
      let contractInstance = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );

      return contractInstance;
    } catch (error) {
      console.log("Error in deploying contract", error);
    }
  };

  const payFees = async (_fee) => {
    try {
      if (!_fee) {
        alert("Please enter fees");
        return;
      }
      console.log("Course Fee!", _fee);
      let contractInstance = await getContractInstance(
        course_address,
        course_abi,
        signer
      );
      let usdcContractInstance = await getContractInstance(
        usdc_address,
        usdc_abi,
        signer
      );

      let amountPaid = BigNumber.from(_fee).mul(
        BigNumber.from(10).pow(await usdcContractInstance.decimals())
      );

      await usdcContractInstance.allowance(address, course_address);
      let tx = await usdcContractInstance.approve(course_address, amountPaid, {
        from: address,
      });
      await tx.wait();

      let depositTx = await contractInstance.depositCourseFee(amountPaid,{from:address});
      await depositTx.wait();
      alert("Fees paid successfully");
    } catch (error) {
      console.log("Error in paying fees", error);
    }
  };

  return (
    <DataContext.Provider value={{ address, chain, payFees }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export default DataContextProvider;
