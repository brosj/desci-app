import { useState } from "react";
import { Link } from "react-router-dom";
import { PiCaretRightBold } from "react-icons/pi";
import { IoMdGitNetwork } from "react-icons/io";
import {
  networks,
  chainAtom as Cosmos,
  chainAvalanche as Avalanche,
  chainDot as Polkadot,
  chainEth as Ethereum,
  chainMatic as Polygon,
  chainNear as Near,
  chainOp as Optimism,
  chainSol as Solana,
  heroBanner,
  iconMoon,
  iconSun,
  whatIsWallet,
  walletConnectCloud,
  walletSpot,
  walletRainbow,
  walletTrust,
  walletZerion,
  walletKeyring,
  walletMetamask,
  walletCoinbase,
  walletArgent,
  walletImtoken,
  walletSafe,
  walletBitski,
  walletLedger,
  walletOmni,
  walletAlpha,
  walletPocket,
  builtinIllustration,
  legalIllustration,
  react,
  js,
  vue,
  angular,
  rpcIllustration,
  signSdk,
  authSdk,
  pushSdk,
  reactNative,
  swift,
  kotlin,
  flutter,
  mobileUx,
  github,
  discord,
  twitter,
  community,
  zombie,
  walletConnectLogo,
} from "../../assets";
import useMousePosition from "../../components/useMousePosition";
import ConnectModal from "./ConnectModal";
import Spinner from "./Spinner";
import "./index.css";

const colors = {
  default: {
    main: "w3m-blue",
    dark: "w3m-blue-dark",
    highlight: "w3m-blue-highlight",
    light: "w3m-blue-light",
  },
  magenta: {
    main: "w3m-magenta",
    dark: "w3m-magenta-dark",
    highlight: "w3m-magenta-highlight",
    light: "w3m-magenta-light",
  },
  blue: {
    main: "w3m-dark-blue",
    dark: "w3m-dark-blue-dark",
    highlight: "w3m-dark-blue-highlight",
    light: "w3m-dark-blue-light",
  },
  orange: {
    main: "w3m-orange",
    dark: "w3m-orange-dark",
    highlight: "w3m-orange-highlight",
    light: "w3m-orange-light",
  },
  green: {
    main: "w3m-green",
    dark: "w3m-green-dark",
    highlight: "w3m-green-highlight",
    light: "w3m-green-light",
  },
  purple: {
    main: "w3m-purple",
    dark: "w3m-purple-dark",
    highlight: "w3m-purple-highlight",
    light: "w3m-purple-light",
  },
  teal: {
    main: "w3m-teal",
    dark: "w3m-teal-dark",
    highlight: "w3m-teal-highlight",
    light: "w3m-teal-light",
  },
};

const Web3Modal = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState({
    main: "w3m-blue-100",
    dark: "w3m-grey-gradient-end",
    highlight: "w3m-blue-highlight",
    light: "w3m-blue-light",
  });
  const [selectedNetwork, setSelectedNetwork] = useState<number | null>(null);
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [step, setStep] = useState("select");

  const mouseX = useMousePosition().x;
  const mouseY = useMousePosition().y;

  const cols = document.getElementsByClassName("card");
  for (let i = 0; i < cols.length; i++) {
    const elemRect = cols[i].getBoundingClientRect();
    (cols[i] as HTMLElement).style.setProperty(
      "--mouse-x",
      (mouseX || 0) - elemRect.left + "px"
    );
    (cols[i] as HTMLElement).style.setProperty(
      "--mouse-y",
      (mouseY || 0) - elemRect.top + "px"
    );
  }

  // const [ethAmount, setEthAmount] = useState(1.155);
  const [ethAmount] = useState(1.155);

  const getSelectedNetwork = (chainId: number) => {
    return networks.find((network) => network.chainId === chainId);
  };

  /*
  const updateValues = async (targetEth: number, pauseDuration: number) => {
    const steps = 20; // Number of steps for smooth animation
    const ethStep = (targetEth - ethAmount) / steps;

    for (let i = 0; i < steps; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000 / steps));
      setEthAmount((prevEth) => parseFloat((prevEth + ethStep).toFixed(3)));
    }

    await new Promise((resolve) => setTimeout(resolve, pauseDuration * 1000));
  };

  useEffect(() => {
    const updateLoop = async () => {
      while (true) {
        await updateValues(2.195, 2);
        await updateValues(4.348, 3);
        await updateValues(2.195, 2);
        await updateValues(1.155, 3);
      }
    };

    // updateLoop();
  }, []);
  */

  return (
    <div className="bg-w3m-grey-gradient-end text-w3m-grey-100 transition-all">
      <header className="flex items-center justify-between md:justify-around py-4 px-6 md:px-32 lg:px-56">
        <div className="flex">
          <h1 className="text-xl font-medium">Web3Modal</h1>
          <div className="text-sm ml-2 px-2 py-1 bg-gradient-to-r from-w3m-grey-gradient-start to-w3m-grey-gradient-end border border-w3m-grey-24 rounded-2xl opacity-60 scale-90">
            3.1.0
          </div>
        </div>
        <button
          onClick={() => {
            setStep("connect");
            setShowConnectModal(true);
          }}
          className={`h-10 px-5 opacity-100 hover:opacity-90 transition-opacity rounded-[20px] whitespace-nowrap bg-${
            themeColor.main
          } ${showConnectModal && "bg-w3m-grey-24"}`}
        >
          {showConnectModal ? (
            <div className="flex items-center">
              <Spinner />
              <div>Connecting...</div>
            </div>
          ) : (
            "Connect Wallet"
          )}
        </button>
      </header>

      <main className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <img src={heroBanner} alt="Web3Modal preview" loading="lazy" />

        <section className="md:mx-[88px] mb-[60px] px-6 md:px-10 py-[60px]">
          <h4 className="text-2xl md:text-[32px] md:leading-none font-medium">
            Web3Modal: Simple, intuitive wallet login.{" "}
            <span className="text-w3m-grey-70">
              With this drop-in UI SDK, enable any wallet's users to seamlessly
              log in to your app and enjoy a smooth, unified experience.
            </span>
          </h4>
          <div className="w-fit">
            <Link
              to="https://docs.walletconnect.com/web3modal/about"
              target="_blank"
            >
              <button className="flex items-center gap-2 h-10 px-5 mt-10 font-light bg-w3m-blue-100 hover:bg-w3m-blue-125 rounded-[20px] whitespace-nowrap uppercase">
                <div>View the docs</div>
                <PiCaretRightBold />
              </button>
            </Link>
          </div>
        </section>

        <section className="mx-2 md:mx-[88px] mb-5 border border-w3m-grey-24 rounded-[44px]">
          <div className="py-[30px] px-10">
            <h5 className="text-xl leading-6 font-medium">
              Streamlined wallet selection interface.{" "}
              <span className="text-w3m-grey-70">
                Automatic detection of mobile, extension, desktop, and web app
                wallets, with all available options presented together for
                better usability.
              </span>
            </h5>
          </div>

          <div
            className={`relative h-[450px] border border-w3m-grey-24 rounded-[44px] -mx-[1px] -mb-[1px] bg-gradient-to-r ${
              darkMode
                ? "from-w3m-grey-gradient-start to-transparent"
                : "from-w3m-light-gradient-start to-transparent"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-5 -mt-20 md:mt-0 justify-center items-center h-full">
              <button
                onClick={() => {
                  setStep("select");
                  setShowConnectModal(true);
                }}
                className={`flex items-center gap-2 h-10 pl-2 pr-3 rounded-[20px] whitespace-nowrap border border-w3m-grey-24 bg-gradient-to-br hover:bg-w3m-grey-24 ${
                  darkMode
                    ? "from-w3m-grey-gradient-start to-transparent"
                    : "from-w3m-light-gradient-start to-transparent text-black"
                }`}
              >
                <div
                  className={`${
                    !selectedNetwork && "rotate-180 p-1.5"
                  } rounded-full ${
                    darkMode ? "bg-w3m-grey-24" : "bg-w3m-grey-70"
                  }`}
                >
                  {selectedNetwork ? (
                    <img
                      alt={getSelectedNetwork(selectedNetwork)?.name + " logo"}
                      loading="lazy"
                      className="w-6 h-6 mx-auto z-10"
                      src={getSelectedNetwork(selectedNetwork)?.icon}
                    />
                  ) : (
                    <IoMdGitNetwork />
                  )}
                </div>
                <div>
                  {selectedNetwork
                    ? getSelectedNetwork(selectedNetwork)?.name
                    : "Select Network"}
                </div>
              </button>
              <button
                onClick={() => {
                  setStep("connect");
                  setShowConnectModal(true);
                }}
                className={`h-10 px-5 opacity-100 hover:opacity-90 transition-opacity rounded-[20px] whitespace-nowrap bg-${
                  themeColor.main
                } ${showConnectModal && "bg-w3m-grey-24"}`}
              >
                {showConnectModal ? (
                  <div className="flex items-center">
                    <Spinner />
                    <div>Connecting...</div>
                  </div>
                ) : (
                  "Connect Wallet"
                )}
              </button>
            </div>

            <div className="flex justify-center absolute bottom-0 left-0 right-0 pt-10 px-2 pb-5">
              <div className="flex flex-col sm:flex-row items-center mx-auto w-fit py-2 pl-3  bg-w3m-grey-8 rounded-3xl border border-w3m-highlight shadow-lg">
                <button className="mb-4 sm:mb-0 relative w-[82px] h-[42px] flex justify-between p-[3px] bg-transparent border-2 border-w3m-grey-100 rounded-[36px] ease-in-out hover:bg-w3m-grey-100 hover:bg-opacity-10 transition-all">
                  <div
                    className={`absolute left-[3px] top-[3px] w-8 h-8 bg-w3m-blue-100 rounded-full pointer-events-none z-0 ${
                      darkMode && "translate-x-10"
                    } transition-all`}
                  ></div>
                  <img
                    alt="Sun icon"
                    loading="lazy"
                    className="z-10"
                    src={iconSun}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                  <img
                    alt="Moon icon"
                    loading="lazy"
                    className="z-10"
                    src={iconMoon}
                    onClick={() => setDarkMode(!darkMode)}
                  />
                </button>

                <div className="relative flex flex-wrap gap-3 px-3 ml-3 before:absolute md:before:w-[1px] before:h-6 before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-w3m-grey-24">
                  {Object.keys(colors).map((color) => (
                    <button
                      key={color}
                      className={`relative group bg-transparent rounded-[36px] ${
                        colors[color as keyof typeof colors].main ===
                          themeColor.main && "border-2"
                      } border-w3m-grey-100`}
                      onClick={() =>
                        setThemeColor(colors[color as keyof typeof colors])
                      }
                    >
                      <div className="border-4 border-transparent hover:border-w3m-grey-24 rounded-full transition-all">
                        <div
                          className={`w-7 h-7 rounded-full transition-all bg-${
                            colors[color as keyof typeof colors].main
                          }`}
                        ></div>
                        <span className="hidden group-hover:block absolute -top-[44px] left-[50%] py-[6px] px-3 text-sm capitalize bg-w3m-grey-gradient-start rounded-[36px] border border-w3m-highlight -translate-x-[50%] translate-y-[3px] transition-all">
                          {color}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featureSection"
          className="mx-2 md:mx-[88px] mb-[120px] flex flex-wrap gap-y-5 justify-between w-[95%] sm:w-[90%] md:w-[82.5%]"
        >
          <div className="card styles_card styles_card_1 w-full md:w-[49%] lg:w-[59%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  User onboarding interface.{" "}
                  <span className="text-w3m-grey-70">
                    Step-by-step guidance that helps users get started with a
                    wallet.
                  </span>
                </h5>
              </div>
              <div className="relative aspect-video bg-w3m-purple rounded-[44px]">
                <img
                  src={whatIsWallet}
                  alt="Illustration explaining concepts of crypto wallets"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp absolute w-[76%] h-auto h-min-[10px] bottom-0 left-[12%] text-transparent translate-y-[2px]"
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_2 w-full md:w-[49%] lg:w-[39%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  Multi-chain ready.{" "}
                  <span className="text-w3m-grey-70">
                    Designed to work with EVM and non-EVM chains.
                  </span>
                </h5>
              </div>

              <div className="flex flex-wrap pb-[25px]">
                <div className="flex justify-center w-full card2">
                  <img
                    alt="Polkadot logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Polkadot}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Ethereum logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Ethereum}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Polygon logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Polygon}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>

                <div className="flex justify-center w-full card2">
                  <img
                    alt="Optimism logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Optimism}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Avalanche logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Avalanche}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>

                <div className="flex justify-center w-full card2">
                  <img
                    alt="Near logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Near}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Solana logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Solana}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Cosmos logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={Cosmos}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_3 w-full md:w-[49%] lg:w-[39%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h3 className="text-[30px] leading-[100%] font-medium">
                  Industry-leading wallet support.
                </h3>
              </div>
              <div>
                <div className="styles_walletRow animate-infinite-scroll">
                  <img
                    alt="Spot logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletSpot}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Rainbow logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletRainbow}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Trust logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletTrust}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Zerion logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletZerion}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Keyring logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletKeyring}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Spot logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletSpot}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Rainbow logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletRainbow}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Trust logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletTrust}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Zerion logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletZerion}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Keyring logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletKeyring}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>
                <div className="styles_walletRow animate-infinite-scroll-reverse">
                  <img
                    alt="Metamask logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletMetamask}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Coinbase logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletCoinbase}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Argent logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletArgent}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Imtoken logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletImtoken}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Safe logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletSafe}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Metamask logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletMetamask}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Coinbase logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletCoinbase}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Argent logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletArgent}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Imtoken logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletImtoken}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Safe logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletSafe}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>
                <div className="styles_walletRow animate-infinite-scroll">
                  <img
                    alt="Bitski logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletBitski}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Ledger logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletLedger}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Omni logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletOmni}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Alpha logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletAlpha}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Pocket logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletPocket}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Bitski logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletBitski}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Ledger logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletLedger}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Omni logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletOmni}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Alpha logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletAlpha}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                  <img
                    alt="Pocket logo"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp"
                    src={walletPocket}
                    style={{
                      color: "transparent",
                      opacity: 1,
                      transform: "none",
                    }}
                  />
                </div>
              </div>
              <div className="py-[30px] px-10">
                <h6 className="leading-[140%] font-medium text-w3m-grey-70">
                  Connect with MetaMask, Coinbase, and many more.
                </h6>
                <img
                  alt="WalletConnect Cloud badge"
                  loading="lazy"
                  className="mt-2.5 styles_image__wEhq8 styles_loaded__uNyZp"
                  src={walletConnectCloud}
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_4 w-full md:w-[49%] lg:w-[59%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-lg leading-6 font-medium">
                  Feature-rich account view.{" "}
                  <span className="text-w3m-grey-70">
                    All the information your users want and need, including ENS
                    domain resolution, token balance view, links to Etherscan,
                    and transaction history and filtering.
                  </span>
                </h5>
              </div>

              <div className="relative aspect-[16/10] bg-w3m-pink rounded-[44px] shadow-w3m-highlight pt-2">
                <img
                  src={builtinIllustration}
                  alt="Builtins illustration"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp absolute w-[76%] h-auto -top-[15%] left-[50%] text-transparent -translate-x-[50%]"
                />
                <div className="absolute top-[64%] left-[27%] text-xs md:text-sm text-[#e4e7e7]">
                  {`${ethAmount.toFixed(3)} ETH`}{" "}
                  <span className="ml-3 text-[#949e9e]">{`${(
                    ethAmount * 2081.88
                  ).toFixed(2)} USD`}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_5 w-full md:w-[49%] lg:w-[59%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  Customizable Terms of Service and Privacy Policy.{" "}
                  <span className="text-w3m-grey-70">
                    Your terms, tailored for your users.
                  </span>
                </h5>
              </div>
              <div className="relative aspect-[2/1] bg-w3m-green rounded-[44px]">
                <img
                  src={legalIllustration}
                  alt="WalletConnect legal modal"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp absolute w-[76%] h-auto -top-[10%] left-[50%] text-transparent -translate-x-[50%]"
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_2 w-full md:w-[49%] lg:w-[39%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  Broad framework support.{" "}
                  <span className="text-w3m-grey-70">
                    Build with React, Vue and HTML.
                  </span>
                </h5>
              </div>

              <div className="flex flex-wrap gap-[15px] justify-center items-center pb-[25px]">
                <img
                  alt="React logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[104px]"
                  src={react}
                />
                <img
                  alt="JS logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[104px]"
                  src={js}
                />
                <img
                  alt="Vue logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[104px]"
                  src={vue}
                />
                <img
                  alt="Angular logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[104px]"
                  src={angular}
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_7 w-full md:w-[49%] lg:w-[39%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  The WalletConnect Blockchain API.{" "}
                  <span className="text-w3m-grey-70">
                    Instant read-write access to 25+ networks with zero
                    configuration thanks to our built-in RPC.
                  </span>
                </h5>
              </div>

              <div className="styles_illustration__czpS_">
                <img
                  alt="Blockchain illustration"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp"
                  src={rpcIllustration}
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_8 w-full md:w-[49%] lg:w-[59%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  CDN support.{" "}
                  <span className="text-w3m-grey-70">
                    More choices for package hosting to improve developer
                    workflows.
                  </span>
                </h5>
              </div>
              <div className="flex justify-center items-center bg-[url('/src/assets/w3m/wc-v2-illustration-bg.jpg')] bg-cover bg-[50%] shadow-w3m-highlight aspect-[16/10] rounded-[44px]">
                <img
                  alt="Sign sdk logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[30%] bounce-up-down"
                  src={signSdk}
                />
                <img
                  alt="Auth sdk logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[30%] bounce-down-up"
                  src={authSdk}
                />
                <img
                  alt="Push sdk logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-[30%] bounce-up-down"
                  src={pushSdk}
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_9 w-full md:w-[49%] lg:w-[59%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  Made for mobile.{" "}
                  <span className="text-w3m-grey-70">
                    Build in React Native, Swift, Kotlin, and Flutter to bring
                    alive your natively mobile experience on Android or iOS.
                  </span>
                </h5>
              </div>

              <div className="styles_illustration__wehxA">
                <img
                  alt="React Native logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-full h-auto"
                  src={reactNative}
                />
                <img
                  alt="Swift logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-full h-auto"
                  src={swift}
                />
                <img
                  alt="Kotlin logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-full h-auto"
                  src={kotlin}
                />
                <img
                  alt="Flutter logo"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp w-full h-auto"
                  src={flutter}
                />
              </div>
            </div>
          </div>

          <div className="card styles_card styles_card_2 w-full md:w-[49%] lg:w-[39%]">
            <div className="styles_cardContent__JcxB1 flex flex-col justify-between">
              <div className="py-[30px] px-10">
                <h5 className="text-xl leading-6 font-medium">
                  A unified experience.{" "}
                  <span className="text-w3m-grey-70">
                    The same frictionless UX across iOS, Android, and desktop.
                  </span>
                </h5>
              </div>
              <div className="relative aspect-[1] bg-w3m-orange rounded-[44px] overflow-hidden">
                <img
                  src={mobileUx}
                  alt="Mobile view"
                  loading="lazy"
                  className="styles_image__wEhq8 styles_loaded__uNyZp absolute w-[80%] h-auto left-[50%] text-transparent -translate-x-[50%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-2 md:mx-[88px] mb-[200px]">
          <div className="bg-gradient-to-br from-[#272a2a] to-[#141414] border border-w3m-grey-24 rounded-[44px] overflow-hidden">
            <div className="py-[30px] px-10">
              <h4 className="text-[32px] leading-none font-medium -tracking-[0.02em]">
                Community
              </h4>
              <p className="mt-5 text-lg text-w3m-grey-70 leading-[130%] -tracking-[0.01em]">
                Our community means everything to us. Whether you have a feature
                to suggest, a bug to report, or just want to share your version
                of Web3Modal, we want to hear from you!
              </p>
              <div className="flex flex-col md:flex-row gap-2.5 mt-10 -mb-5">
                <a
                  href="https://github.com/WalletConnect/web3modal"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="flex bg-w3m-grey-95 opacity-100 hover:opacity-90 transition-opacity justify-center items-center uppercase h-10 rounded-[20px] pt-[2px] px-5 cursor-pointer overflow-hidden">
                    <img
                      alt="Github icon"
                      loading="lazy"
                      className="styles_image__wEhq8 styles_loaded__uNyZp w-6 h-6 -ml-2 mr-2"
                      src={github}
                    />
                    <span className="text-sm text-w3m-grey-8 tracking-[0.04em]">
                      Raise An Issue
                    </span>
                  </button>
                </a>

                <a
                  href="https://discord.com/invite/kdTQHQ6AFQ"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="flex bg-w3m-purple opacity-90 hover:opacity-100 transition-opacity justify-center items-center uppercase h-10 rounded-[20px] pt-[2px] px-5 cursor-pointer overflow-hidden">
                    <img
                      alt="Discord icon"
                      loading="lazy"
                      className="styles_image__wEhq8 styles_loaded__uNyZp w-6 h-6 -ml-1 mr-2"
                      src={discord}
                    />
                    <span className="text-sm tracking-[0.04em]">
                      Join Our Discord
                    </span>
                  </button>
                </a>

                <a
                  href="https://twitter.com/WalletConnect"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="flex bg-w3m-cyan opacity-90 hover:opacity-100 transition-opacity justify-center items-center uppercase h-10 rounded-[20px] pt-[2px] px-5 cursor-pointer overflow-hidden">
                    <img
                      alt="Twitter icon"
                      loading="lazy"
                      className="styles_image__wEhq8 styles_loaded__uNyZp w-6 h-6 -ml-1 mr-2"
                      src={twitter}
                    />
                    <span className="text-sm tracking-[0.04em]">Follow Us</span>
                  </button>
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={community}
                alt="3d hands"
                loading="lazy"
                className="styles_image__wEhq8 styles_loaded__uNyZp w-full h-auto object-cover"
              />
              <img
                src={zombie}
                alt="3d zombie hands"
                loading="lazy"
                className="styles_image__wEhq8 styles_loaded__uNyZp absolute w-[30%] h-auto -bottom-1/4 left-[16%] origin-bottom zombie-rotate"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 pb-16">
        <img
          src={walletConnectLogo}
          alt="WalletConnect logo"
          loading="lazy"
          className="styles_image__wEhq8 styles_loaded__uNyZp w-[93px] h-[57px] mx-auto mt-16 object-contain"
        />
      </footer>

      {showConnectModal && (
        <ConnectModal
          setIsOpen={setShowConnectModal}
          themeColor={themeColor}
          darkMode={darkMode}
          selectedNetwork={selectedNetwork}
          setSelectedNetwork={setSelectedNetwork}
          modalStep={step}
        />
      )}
    </div>
  );
};

export default Web3Modal;
