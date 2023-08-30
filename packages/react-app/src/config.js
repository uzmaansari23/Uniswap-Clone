import { Sepolia } from "@usedapp/core";


export const ROUTER_ADDRESS = "0x34F20e598D300114CD09AFcB747268729A6194Bb"; 
export const DAPP_CONFIG = {
  readOnlyChainId: Sepolia.chainId,
  readOnlyUrls: {
    [Sepolia.chainId]: "https://eth-sepolia.g.alchemy.com/v2/6fQ-02n7qGW7eSVdltGsz7snCYURwtRY",
  },
};