import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoCopy } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { PiCaretLeftBold } from "react-icons/pi";
import { RxCheck } from "react-icons/rx";
import { TbHelp } from "react-icons/tb";
import {
  networks,
  wallets,
  network1,
  network2,
  network3,
  network4,
  network5,
  network6,
  network7,
  network8,
  network9,
  network10,
  network11,
  network12,
  network13,
} from "../../assets";

interface ConnectModalProps {
  setIsOpen: (isOpen: boolean) => void;
  setSelectedNetwork: (chainId: number) => void;
  selectedNetwork: number | null;
  modalStep: string;
  darkMode: boolean;
  themeColor: {
    main: string;
    dark: string;
    highlight: string;
    light: string;
  };
}

const ConnectModal = ({
  setIsOpen,
  setSelectedNetwork,
  selectedNetwork,
  modalStep = "select",
  darkMode,
  themeColor,
}: ConnectModalProps) => {
  const [step, setStep] = useState(modalStep);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const [wallet, setWallet] = useState<{
    name: string;
    icon?: string;
    qrCode: string;
  }>({
    name: "WalletConnect",
    qrCode: "",
  });

  useEffect(() => {
    // Add the 'overflow-hidden' class to the body when the modal is open
    document.body.classList.add("overflow-hidden");

    // Remove the 'overflow-hidden' class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const getTitle = () => {
    if (step === "select") {
      return "Choose Network";
    } else if (step === "connect") {
      return "Connect Wallet";
    } else if (step === "infoWallet") {
      return "What is a wallet?";
    } else if (step === "infoNetwork") {
      return "What is a network?";
    } else if (step === "qrcode") {
      return wallet.name;
    }
  };

  const goBack = () => {
    if (step === "connect") {
      setStep("select");
    } else if (step === "infoWallet" || step === "qrcode") {
      setStep("connect");
    } else if (step === "infoNetwork") {
      setStep("select");
    }
  };

  const copyToClipboard = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setShowCopyTooltip(true);
        setTimeout(() => {
          setShowCopyTooltip(false);
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed to copy message body:", error);
      });
  };

  const copyMsg = () => {
    return (
      <button
        className={`flex items-center gap-2 h-8 px-2 py-4 border ${
          darkMode
            ? `bg-${themeColor.dark} border-w3m-grey-24`
            : `bg-${themeColor.light} border-w3m-grey-80 text-w3m-grey-8`
        } rounded-[20px] whitespace-nowrap transition-all duration-300 shadow-lg`}
      >
        <RxCheck
          size="20"
          className={`text-green-500 ${
            darkMode ? "bg-green-900" : "bg-green-300"
          } bg-opacity-50 rounded-full p-[1px]`}
        />
        <div className="">Link copied</div>
      </button>
    );
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div
        className="flex h-full w-full justify-center items-center text-w3m-grey-95"
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`w-[358px] h-auto py-5 ${
            darkMode
              ? `bg-${themeColor.dark} border-w3m-grey-24`
              : `bg-${themeColor.light} border-w3m-grey-80`
          } rounded-[44px] border-[0.2px]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between mb-4 mx-5 items-center">
            <PiCaretLeftBold
              className={`${
                step === "select" && "invisible"
              } cursor-pointer p-1.5 rounded-xl ${
                darkMode
                  ? "text-w3m-grey-90 hover:bg-w3m-highlight"
                  : "text-black hover:bg-w3m-grey-70/20"
              }`}
              size="30"
              onClick={goBack}
            />

            {showCopyTooltip ? (
              copyMsg()
            ) : (
              <div
                className={`font-semibold ${
                  darkMode ? "text-w3m-grey-90" : "text-black"
                }`}
              >
                {getTitle()}
              </div>
            )}

            <IoClose
              className={`cursor-pointer p-1.5 rounded-xl ${
                darkMode
                  ? "text-w3m-grey-90 hover:bg-w3m-highlight"
                  : "text-black hover:bg-w3m-grey-70/20"
              }`}
              size="32"
              onClick={() => setIsOpen(false)}
            />
          </div>

          {step === "select" && (
            <>
              <div
                className={`p-3 border-y-[0.1px] ${
                  darkMode ? "border-w3m-grey-24" : "border-w3m-grey-80"
                }`}
              >
                <div className="flex flex-wrap gap-y-3 justify-around">
                  {networks.map((network) => (
                    <button
                      key={network.chainId}
                      className={`relative p-2 rounded-xl overflow-hidden ${
                        selectedNetwork === network.chainId
                          ? `${
                              darkMode
                                ? `bg-${themeColor.light}`
                                : `bg-${themeColor.dark}/90`
                            } hover:bg-opacity-80`
                          : darkMode
                          ? "bg-w3m-highlight/5 hover:bg-w3m-highlight/10"
                          : "bg-w3m-highlight/90 hover:bg-w3m-grey-80/50"
                      }`}
                      onClick={() => {
                        setSelectedNetwork(network.chainId);
                        setStep("connect");
                      }}
                    >
                      <img
                        alt={network.name + " logo"}
                        loading="lazy"
                        className={`w-14 h-14 mx-auto`}
                        src={network.icon}
                      />
                      <div
                        className={`w-14 text-xs mt-1.5 text-center truncate ${
                          selectedNetwork === network.chainId
                            ? `text-${themeColor.main}`
                            : darkMode
                            ? "text-w3m-grey-80"
                            : `text-w3m-grey-24`
                        }`}
                      >
                        {network.name}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-sm text-center flex flex-col items-center mt-3.5">
                <p
                  className={`${
                    darkMode ? "text-w3m-grey-70" : "text-w3m-grey-70"
                  }`}
                >
                  Your connected wallet may not support some of the networks
                  available for this dApp
                </p>
                <div
                  onClick={() => setStep("infoNetwork")}
                  className={`flex items-center gap-1 mt-2 px-2 py-0.5 text-${
                    themeColor.main
                  } bg-w3m-grey-24 bg-opacity-0 ${
                    darkMode ? "hover:bg-opacity-40" : "hover:bg-opacity-10"
                  } rounded-lg cursor-pointer`}
                >
                  <TbHelp />
                  What is a network
                </div>
              </div>
            </>
          )}

          {step === "connect" && (
            <>
              <div
                className={`p-3 border-y-[0.1px] ${
                  darkMode ? "border-w3m-grey-24" : "border-w3m-grey-80"
                }`}
              >
                <div className="flex flex-col gap-y-2">
                  {wallets.map((wallet) => (
                    <div
                      key={wallet.name}
                      className={`flex gap-4 items-center relative p-2 rounded-2xl overflow-hidden ${
                        darkMode
                          ? "bg-w3m-highlight/[0.02] hover:bg-w3m-highlight/5"
                          : "bg-w3m-grey-50/[0.1] hover:bg-w3m-grey-50/25 text-w3m-grey-8"
                      } cursor-pointer`}
                      onClick={() => {
                        setStep("qrcode");
                        setWallet(wallet);
                      }}
                    >
                      <img
                        alt={wallet.name + " logo"}
                        loading="lazy"
                        className="w-10 h-10 rounded-xl border-[0.5px] border-w3m-grey-24"
                        src={wallet.icon}
                      />
                      <div>{wallet.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm text-center flex flex-col items-center mt-3.5">
                <div
                  onClick={() => setStep("infoWallet")}
                  className={`flex items-center gap-1 px-2 py-0.5 text-${
                    themeColor.main
                  } bg-w3m-grey-24 bg-opacity-0 ${
                    darkMode ? "hover:bg-opacity-40" : "hover:bg-opacity-10"
                  } rounded-lg cursor-pointer`}
                >
                  <TbHelp />
                  What is a wallet
                </div>
              </div>
            </>
          )}

          {step === "infoWallet" && (
            <div className="px-3 border-t-[0.1px] border-w3m-grey-24">
              <div className="mt-3">
                <div className="flex justify-center gap-3 py-2">
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network7}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network8}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network9}
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`${
                      darkMode
                        ? "text-w3m-grey-90"
                        : "text-w3m-grey-gradient-end"
                    } py-1`}
                  >
                    One login for all of web3
                  </p>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-w3m-grey-60" : "text-w3m-grey-50"
                    } leading-4`}
                  >
                    Log in to any app by connecting your wallet. Say goodbye to
                    countless passwords!
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex justify-center gap-3 py-2">
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network10}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network11}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network12}
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`${
                      darkMode
                        ? "text-w3m-grey-90"
                        : "text-w3m-grey-gradient-end"
                    } py-1`}
                  >
                    A home for your digital assets
                  </p>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-w3m-grey-60" : "text-w3m-grey-50"
                    } leading-4`}
                  >
                    A wallet lets you store, send and receive digital assets
                    like cryptocurrencies and NFTs.
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex justify-center gap-3 py-2">
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network4}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network13}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network6}
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`${
                      darkMode
                        ? "text-w3m-grey-90"
                        : "text-w3m-grey-gradient-end"
                    } py-1`}
                  >
                    Your gateway to a new web
                  </p>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-w3m-grey-60" : "text-w3m-grey-50"
                    } leading-4`}
                  >
                    With your wallet, you can explore and interact with DeFi,
                    NFTs, DAOs, and much more.
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  to="https://walletconnect.com/explorer?type=wallet"
                  target="_blank"
                >
                  <button
                    className={`flex items-center gap-1 h-8 px-3 mt-6 font-medium bg-${themeColor.main} hover:opacity-90 rounded-[20px] whitespace-nowrap`}
                  >
                    <MdOutlineAccountBalanceWallet size="18" />
                    <div className="text-sm">Get a Wallet</div>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {step === "infoNetwork" && (
            <div className="px-3 border-t-[0.1px] border-w3m-grey-24">
              <div className="mt-3">
                <div className="flex justify-center gap-3 py-2">
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network1}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network2}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network3}
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`${
                      darkMode
                        ? "text-w3m-grey-90"
                        : "text-w3m-grey-gradient-end"
                    } py-1`}
                  >
                    The system’s nuts and bolts
                  </p>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-w3m-grey-60" : "text-w3m-grey-50"
                    } leading-4`}
                  >
                    A network is what brings the blockchain to life, as this
                    technical infrastructure allows apps to access the ledger
                    and smart contract services.
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <div className="flex justify-center gap-3 py-2">
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network4}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network5}
                  />
                  <img
                    alt="Network icon"
                    loading="lazy"
                    className="styles_image__wEhq8 styles_loaded__uNyZp w-14 h-14"
                    src={network6}
                  />
                </div>
                <div className="text-center">
                  <p
                    className={`${
                      darkMode
                        ? "text-w3m-grey-90"
                        : "text-w3m-grey-gradient-end"
                    } py-1`}
                  >
                    Designed for different uses
                  </p>
                  <div
                    className={`text-sm ${
                      darkMode ? "text-w3m-grey-60" : "text-w3m-grey-50"
                    } leading-4`}
                  >
                    Each network is designed differently, and may therefore suit
                    certain apps and experiences.
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  to="https://ethereum.org/en/developers/docs/networks/"
                  target="_blank"
                >
                  <button
                    className={`flex items-center gap-1 h-8 px-3 mt-6 font-medium bg-${themeColor.main} hover:opacity-90 rounded-[20px] whitespace-nowrap`}
                  >
                    <div className="text-sm">Learn more</div>
                    <HiOutlineExternalLink size="18" className="-mt-0.5" />
                  </button>
                </Link>
              </div>
            </div>
          )}

          {step === "qrcode" && (
            <div
              className={`px-3 border-t-[0.1px] ${
                darkMode ? "border-w3m-grey-24" : "border-w3m-grey-80"
              }`}
            >
              <div className="flex flex-col gap-y-2">
                <div className="flex justify-center mt-2">
                  <div className="w-full p-2">
                    <img
                      alt="QR Code"
                      loading="lazy"
                      className={`styles_image__wEhq8 styles_loaded__uNyZp rounded-[30px] border border-${
                        themeColor.main
                      } border-opacity-60 ${darkMode && "bg-w3m-grey-100"}`}
                      src={wallet.qrCode}
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-center ${
                    !darkMode && "text-w3m-grey-8"
                  }`}
                >
                  Scan this QR Code with your phone
                </div>
                <div className="text-sm text-center flex flex-col items-center mt-2">
                  <div
                    onClick={() => copyToClipboard("joshuaonyeuche.com")}
                    className={`flex items-center gap-1 px-2 py-0.5 text-${
                      themeColor.main
                    } bg-w3m-grey-24 bg-opacity-0 ${
                      darkMode ? "hover:bg-opacity-40" : "hover:bg-opacity-10"
                    } rounded-lg cursor-pointer`}
                  >
                    <GoCopy />
                    Copy Link
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;
