export const ContractAddress: any = {
  default: {
    course:
      process.env.NEXT_PUBLIC_ENV === "production"
        ? process.env.NEXT_PUBLIC_COURSE_POLYGON_ADDRESS
        : process.env.NEXT_PUBLIC_ENV === "test"
        ? process.env.NEXT_PUBLIC_COURSE_POLYGON_AMOY_ADDRESS
        : process.env.NEXT_PUBLIC_COURSE_LOCAL_ADDRESS,
    market:
      process.env.NEXT_PUBLIC_ENV === "production"
        ? process.env.NEXT_PUBLIC_MARKET_POLYGON_ADDRESS
        : process.env.NEXT_PUBLIC_ENV === "test"
        ? process.env.NEXT_PUBLIC_MARKET_POLYGON_AMOY_ADDRESS
        : process.env.NEXT_PUBLIC_MARKET_LOCAL_ADDRESS,
  },
  31337: {
    course: process.env.NEXT_PUBLIC_COURSE_LOCAL_ADDRESS,
    market: process.env.NEXT_PUBLIC_MARKET_LOCAL_ADDRESS,
  },
  137: {
    course: process.env.NEXT_PUBLIC_COURSE_POLYGON_ADDRESS,
    market: process.env.NEXT_PUBLIC_MARKET_POLYGON_ADDRESS,
  },
  42161: {
    course: process.env.NEXT_PUBLIC_COURSE_ARBITRUM_ADDRESS,
    market: process.env.NEXT_PUBLIC_MARKET_ARBITRUM_ADDRESS,
  },
  80002: {
    course: process.env.NEXT_PUBLIC_COURSE_POLYGON_AMOY_ADDRESS,
    market: process.env.NEXT_PUBLIC_MARKET_POLYGON_AMOY_ADDRESS,
  },
  656476: {
    course: process.env.NEXT_PUBLIC_COURSE_OPEN_CAMPUS_ADDRESS,
    market: process.env.NEXT_PUBLIC_MARKET_OPEN_CAMPUS_ADDRESS,
  }
};
