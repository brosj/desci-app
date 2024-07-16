import {
  ethereum,
  arbitrum,
  polygon,
  avalanche,
  bnb,
  op,
  gnosis,
  zksync,
  zora,
  base,
  celo,
  aurora,
  walletConnect,
  metamask,
  trustWallet,
  coinbase,
  qrCoinbase,
  qrMetaMask,
  qrTrustWallet,
  qrWalletConnect,
} from "./index";

export { default as chainAtom } from "./w3m/chain-atom.png";
export { default as chainAvalanche } from "./w3m/chain-avax.png";
export { default as chainDot } from "./w3m/chain-dot.png";
export { default as chainEth } from "./w3m/chain-eth.png";
export { default as chainMatic } from "./w3m/chain-matic.png";
export { default as chainNear } from "./w3m/chain-near.png";
export { default as chainOp } from "./w3m/chain-op.png";
export { default as chainSol } from "./w3m/chain-sol.png";
export { default as heroBanner } from "./w3m/hero-banner.png";
export { default as iconMoon } from "./w3m/icon_moon.svg";
export { default as iconSun } from "./w3m/icon_sun.svg";
export { default as whatIsWallet } from "./w3m/what-is-a-wallet.png";
export { default as walletConnectCloud } from "./w3m/walletconnect-cloud-badge.png";
export { default as walletSpot } from "./w3m/wallet-spotwallet.png";
export { default as walletRainbow } from "./w3m/wallet-rainbow.png";
export { default as walletTrust } from "./w3m/wallet-trust.png";
export { default as walletZerion } from "./w3m/wallet-zerion.png";
export { default as walletKeyring } from "./w3m/wallet-keyring.png";
export { default as walletMetamask } from "./w3m/wallet-metamask.png";
export { default as walletCoinbase } from "./w3m/wallet-coinbase.png";
export { default as walletArgent } from "./w3m/wallet-argent.png";
export { default as walletImtoken } from "./w3m/wallet-imtoken.png";
export { default as walletSafe } from "./w3m/wallet-safe.png";
export { default as walletBitski } from "./w3m/wallet-bitski.png";
export { default as walletLedger } from "./w3m/wallet-ledger.png";
export { default as walletOmni } from "./w3m/wallet-omni.png";
export { default as walletAlpha } from "./w3m/wallet-alpha.png";
export { default as walletPocket } from "./w3m/wallet-tokenpocket.png";
export { default as builtinIllustration } from "./w3m/built-ins-illustration.png";
export { default as legalIllustration } from "./w3m/legal-illustration.png";
export { default as react } from "./w3m/react.png";
export { default as js } from "./w3m/js.png";
export { default as vue } from "./w3m/vue.png";
export { default as angular } from "./w3m/angular.png";
export { default as rpcIllustration } from "./w3m/rpc-illustration.png";
export { default as signSdk } from "./w3m/sign-sdk.png";
export { default as authSdk } from "./w3m/auth-sdk.png";
export { default as pushSdk } from "./w3m/push-sdk.png";
export { default as reactNative } from "./w3m/react-native-sdk.png";
export { default as swift } from "./w3m/swift-sdk.png";
export { default as kotlin } from "./w3m/kotlin-sdk.png";
export { default as flutter } from "./w3m/flutter-sdk.png";
export { default as mobileUx } from "./w3m/mobile-ux.png";
export { default as github } from "./w3m/icon-github.svg";
export { default as discord } from "./w3m/icon-discord.svg";
export { default as twitter } from "./w3m/icon-twitter.svg";
export { default as community } from "./w3m/community-bg.png";
export { default as zombie } from "./w3m/community-zombie-hand.png";
export { default as walletConnectLogo } from "./w3m/walletconnect-logo.svg";
export { default as ethereum } from "./w3m/Ethereum.png";
export { default as arbitrum } from "./w3m/Arbitrum One.png";
export { default as polygon } from "./w3m/Polygon.png";
export { default as avalanche } from "./w3m/Avalanche.png";
export { default as bnb } from "./w3m/BNB Smart Chain.png";
export { default as op } from "./w3m/OP Mainnet.png";
export { default as gnosis } from "./w3m/Gnosis.png";
export { default as zksync } from "./w3m/zkSync Era.png";
export { default as zora } from "./w3m/Zora.png";
export { default as base } from "./w3m/Base.png";
export { default as celo } from "./w3m/Celo.png";
export { default as aurora } from "./w3m/Aurora.png";
export { default as walletConnect } from "./w3m/WalletConnect.png";
export { default as metamask } from "./w3m/MetaMask.svg";
export { default as trustWallet } from "./w3m/TrustWallet.png";
export { default as coinbase } from "./w3m/Coinbase.png";
export { default as network1 } from "./w3m/network1.svg";
export { default as network2 } from "./w3m/network2.svg";
export { default as network3 } from "./w3m/network3.svg";
export { default as network4 } from "./w3m/network4.svg";
export { default as network5 } from "./w3m/network5.svg";
export { default as network6 } from "./w3m/network6.svg";
export { default as network7 } from "./w3m/network7.svg";
export { default as network8 } from "./w3m/network8.svg";
export { default as network9 } from "./w3m/network9.svg";
export { default as network10 } from "./w3m/network10.svg";
export { default as network11 } from "./w3m/network11.svg";
export { default as network12 } from "./w3m/network12.svg";
export { default as network13 } from "./w3m/network13.svg";
export { default as qrCoinbase } from "./w3m/qr-Coinbase.png";
export { default as qrMetaMask } from "./w3m/qr-MetaMask.png";
export { default as qrTrustWallet } from "./w3m/qr-TrustWallet.png";
export { default as qrWalletConnect } from "./w3m/qr-WalletConnect.png";
export { default as w3m1 } from "./w3m/w3m1.jpg";
export { default as w3m2 } from "./w3m/w3m2.jpg";
export { default as w3m3 } from "./w3m/w3m3.jpg";
export { default as w3m4 } from "./w3m/w3m4.jpg";

export const networks = [
  {
    name: "Ethereum",
    icon: ethereum,
    chainId: 1,
  },
  {
    name: "Arbitrum One",
    icon: arbitrum,
    chainId: 42161,
  },
  {
    name: "Polygon",
    icon: polygon,
    chainId: 137,
  },
  {
    name: "Avalanche",
    icon: avalanche,
    chainId: 43114,
  },
  {
    name: "Binance Smart Chain",
    icon: bnb,
    chainId: 56,
  },
  {
    name: "OP Mainnet",
    icon: op,
    chainId: 10,
  },
  {
    name: "Gnosis",
    icon: gnosis,
    chainId: 100,
  },
  {
    name: "zkSync",
    icon: zksync,
    chainId: 324,
  },
  {
    name: "Zora",
    icon: zora,
    chainId: 7777777,
  },
  {
    name: "Base",
    icon: base,
    chainId: 8453,
  },
  {
    name: "Celo",
    icon: celo,
    chainId: 42220,
  },
  {
    name: "Aurora",
    icon: aurora,
    chainId: 1313161554,
  },
];

export const wallets = [
  {
    name: "WalletConnect",
    icon: walletConnect,
    qrCode: qrWalletConnect,
  },
  {
    name: "MetaMask",
    icon: metamask,
    qrCode: qrMetaMask,
  },
  {
    name: "Trust Wallet",
    icon: trustWallet,
    qrCode: qrTrustWallet,
  },
  {
    name: "Coinbase",
    icon: coinbase,
    qrCode: qrCoinbase,
  },
];
