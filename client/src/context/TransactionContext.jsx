import React, { useEffect, useState } from "react";

import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({ provider, signer, TransactionContract });
};

export const TransactionProvider = ({ children }) => {
  // create a usestate field
  const [currentAccount, setCurrentAccount] = useState("");

  // function for checking if the wallet is connected;
  const checkIfWalletIsConnected = async () => {
    try {
      // check if metamask has been installed;
      if (!ethereum) return alert("Please intall metamask");

      // if metamask has been intalled request for the account;
      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);

        //getAllTransactions();
      } else {
        console.log("No account found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  // connect wallet section
  const connectWallet = async () => {
    try {
      //check if metamask is intalled
      if (!ethereum) return alert("Please intall metamask");

      //if metamask install request for the account
      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
