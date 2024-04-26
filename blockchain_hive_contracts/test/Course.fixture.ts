import { getSecondsOfDays } from "./utils";

export const Course1 = {
  courseId: "0x01",
  id: 1,
  price: 50,
  recommendedDuration: getSecondsOfDays(40),
};

export const Course2 = {
  courseId: "0x02",
  id: 2,
  price: 25,
  recommendedDuration: getSecondsOfDays(20),
};

export const Course3 = {
  courseId: "0x03",
  id: 3,
  price: 30,
  recommendedDuration: getSecondsOfDays(25),
};
