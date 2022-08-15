import { PublicKey, clusterApiUrl } from "@solana/web3.js";
// import idl from "../idl/mint_nft.json";

const MINT_NFT_ADDRESS = 'BUMk7KQFhFmdK1AYhpxtMzJ8ySdQbf2NYUoR7144UJ31';

export const preflightCommitment = "processed";
export const programID = new PublicKey(MINT_NFT_ADDRESS);

// const localnet = "http://127.0.0.1:8899";
const devnet = clusterApiUrl("devnet");
// const mainnet = clusterApiUrl("mainnet-beta");
export const network = devnet;