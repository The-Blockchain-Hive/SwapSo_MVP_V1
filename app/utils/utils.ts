import { utils } from "ethers";
import { fetchLmsUrl } from "./firebase";

export const getSecondsOfDays = (day: number) => day * 24 * 60 * 60;
export const getSecondsOfHours = (hour: number) => hour * 60 * 60;
export const convertSecondsToHours = (seconds: number) =>
  (seconds / (60 * 60)).toFixed(2);

export const convertWeiToEth = (wei: any) => utils.formatEther(wei);

export const getLmsUrl = async (
  walletAddress: string,
  courseDbId: string,
  lmsUrl: string
) => {
  if (lmsUrl) {
    return lmsUrl.replace("wallet-ID", walletAddress);
  } else {
    const url = await fetchLmsUrl(courseDbId);
    return url.replace("wallet-ID", walletAddress);
  }
};
