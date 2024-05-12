export const ContractAddress: any = {
  default: {
    course:
      process.env.ENV === "production"
        ? process.env.COURSE_POLYGON_ADDRESS
        : process.env.COURSE_LOCAL_ADDRESS,
    market:
      process.env.ENV === "production"
        ? process.env.MARKET_POLYGON_ADDRESS
        : process.env.MARKET_LOCAL_ADDRESS,
  },
  31337: {
    course: process.env.COURSE_LOCAL_ADDRESS,
    market: process.env.MARKET_LOCAL_ADDRESS,
  },
  137: {
    course: process.env.COURSE_POLYGON_ADDRESS,
    market: process.env.MARKET_POLYGON_ADDRESS,
  },
  42161: {
    course: process.env.COURSE_ARBITRUM_ADDRESS,
    market: process.env.MARKET_ARBITRUM_ADDRESS,
  },
  80002: {
    course: process.env.COURSE_POLYGON_AMOY_ADDRESS,
    market: process.env.MARKET_POLYGON_AMOY_ADDRESS,
  },
};
