import { utils } from "ethers";

export const getSecondsOfDays = (day: number) => day * 24 * 60 * 60;
export const getSecondsOfHours = (hour: number) => hour * 60 * 60;
export const convertSecondsToHours = (seconds: number) =>
  (seconds / (60 * 60)).toFixed(2);

export const convertWeiToEth = (wei: any) => utils.formatEther(wei);
