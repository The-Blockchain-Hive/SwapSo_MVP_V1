/* /AboutCourse/* */

export type CourseType = {
  CourseDbId: string;
  CourseId: string;
  AboutCourse: string;
  CourseName: string;
  short_desc: string;
  CourseDuration: number;
  CourseEducator: string;
  CourseImgUrl: string;
  EducatorImgUrl: string;
  EducatorSocials: string;
  Educator_desc: string;
  PricePerDay: number;
  WhatLearn: string[];
  isListed?: boolean;
  listingPrice?: any;
  listingComment?: any;
  startTime?: number;
  pausedTime?: number;
  holder?: string;
  secondHolder?: string;
};

export type WhatWillYouLearnSectionType = {
  coursesData: CourseType[];
};

export type AboutSectionType = {
  coursesData: CourseType[];
};

export type CourseCurriculumType = {
  coursesData: CourseType[];
};

export type HeroSectionType = {
  coursesData: CourseType[];
};

export type MentorSectionType = {
  coursesData: CourseType[];
};

/* /components/* */
export type SectionDividerType = {
  label: string;
};

export type CardType = {
  course: CourseType;
};

export type NewCardType = {
  course: CourseType;
  selectedTimeFrame: string;
};

export type NewSellerCardType = {
  course: CourseType;
  selectedTimeFrame: string;
};

export type CountDownType = {
  startTime: number;
  duration: number;
  showTime: boolean;
};

export type SellCardType = {
  course: CourseType;
};

export type PopupType = {
  currentCourse: CourseType;
  courseName: string;
  handleClose: () => any;
};

export type SellPopupType = {
  currentCourse: CourseType;
  handleClose: () => any;
};

/* /LearnCourse/* */

export type SidebarItemType = {
  active: boolean;
  value: number;
  title: string;
  onClick: (e: any) => any;
};
