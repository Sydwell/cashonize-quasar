import { defineStore } from "pinia"
import { ref } from 'vue'

const defaultExplorerMainnet = "https://blockchair.com/bitcoin-cash/transaction";
const defaultExplorerChipnet = "https://chipnet.chaingraph.cash/tx";
const defaultElectrumMainnet = "electrum.imaginary.cash"
const defaultChaingraph = "https://gql.chaingraph.pat.mn/v1/graphql";
const dafaultIpfsGateway = "https://w3s.link/ipfs/";

export const useSettingsStore = defineStore('settingsStore', () => {
  // Global settings
  const bchUnit = ref("bch" as ("bch" | "sat"));
  const explorerMainnet = ref(defaultExplorerMainnet);
  const explorerChipnet = ref(defaultExplorerChipnet);
  const electrumServerMainnet = ref(defaultElectrumMainnet);
  const chaingraph = ref(defaultChaingraph);
  const ipfsGateway = ref(dafaultIpfsGateway);
  const darkMode  = ref(false);
  const tokenBurn = ref(false);
  const cashAccountLookup = ref(false);

  // read local storage for stored settings
  const readUnit = localStorage.getItem("unit");
  if(readUnit && (readUnit=="bch" || readUnit=="sat")) bchUnit.value = readUnit;

  const readDarkMode = localStorage.getItem("darkMode");
  if(readDarkMode == "true"){
    document.body.classList.add("dark");
    darkMode.value = true;
  }
  const readElectrumMainnet = localStorage.getItem("electrum-mainnet") ?? "";
  if(readElectrumMainnet) electrumServerMainnet.value = readElectrumMainnet

  const readChaingraph = localStorage.getItem("chaingraph") ?? "";
  if(readChaingraph) chaingraph.value = readChaingraph

  const readIpfsGateway = localStorage.getItem("ipfsGateway") ?? "";
  if(readIpfsGateway) ipfsGateway.value = readIpfsGateway

  const readExplorerMainnet = localStorage.getItem("explorerMainnet") ?? "";
  const readExplorerChipnet = localStorage.getItem("explorerChipnet") ?? "";
  if(readExplorerMainnet) explorerMainnet.value = readExplorerMainnet
  if(readExplorerChipnet) explorerChipnet.value = readExplorerChipnet

  const readCashAccountLookup = localStorage.getItem("cashAccountLookup");
  if(readCashAccountLookup === "true") cashAccountLookup.value = true;

  return { bchUnit, explorerMainnet, explorerChipnet, electrumServerMainnet, chaingraph, ipfsGateway, darkMode, tokenBurn, cashAccountLookup }
})
