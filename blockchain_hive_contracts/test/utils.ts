export const convertToEth = (number: number) => number * 10 ** 18;

export const getSecondsOfDays = (day: number) => day * 24 * 60 * 60;

export const courseDetailsObject = (
  courseId: string,
  id: number,
  dbId: string,
  courseNumber: number,
  price: number,
  duration: number,
  recommendedDuration: number,
  startTime: number,
  pausedTime: number,
  isListed: boolean,
  holder: string,
  secondHolder: string
) => ({
  courseId,
  id,
  dbId,
  courseNumber,
  price,
  duration,
  recommendedDuration,
  startTime,
  pausedTime,
  isListed,
  holder,
  secondHolder,
});
