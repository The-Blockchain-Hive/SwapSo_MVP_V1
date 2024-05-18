import { getDocs, collection, doc, setDoc, getDoc } from "firebase/firestore";
import { CourseType } from "../constants/Types.ts";

import { db } from "../firebase";

const setCourseObject = (data: any): CourseType => {
  const course: CourseType = {
    CourseDbId: data.dbId,
    CourseId: data.CourseId,
    AboutCourse: data.AboutCourse,
    CourseName: data.CourseName,
    short_desc: data.short_desc,
    CourseDuration: data.CourseDuration,
    CourseEducator: data.CourseEducator,
    CourseImgUrl: data.CourseImgUrl,
    EducatorImgUrl: data.EducatorImgUrl,
    EducatorSocials: data.EducatorSocials,
    Educator_desc: data.Educator_desc,
    PricePerDay: data.PricePerDay,
    WhatLearn: data.WhatLearn,
    isListed: data.isListed,
    listingPrice: data.listingPrice,
    listingComment: data.listingComment,
  };

  if (data.lmsUrl) course.lmsUrl = data.lmsUrl;
  if (data.isListed) course.isListed = data.isListed;
  if (data.listingPrice) course.listingPrice = data.listingPrice;
  if (data.listingComment) course.listingComment = data.listingComment;

  return course;
};

export const getCourses = async (): Promise<CourseType[]> => {
  const coursesSnapshot = await getDocs(collection(db, "Courses"));

  const courses = coursesSnapshot.docs.map((doc) => {
    const courseData = doc.data();

    return setCourseObject({ dbId: doc.id, ...courseData });
  });

  return courses;
};

export const getCourseWithId = async (docId: string): Promise<CourseType> => {
  const ref = doc(db, `Courses`, docId);
  const coursesSnapshot = await getDoc(ref);

  const course = coursesSnapshot.data() as CourseType;

  return setCourseObject({ dbId: docId, ...course });
};

export const fetchLmsUrl = async (docId: string): Promise<any> => {
  const ref = doc(db, `Courses`, docId);
  const coursesSnapshot = await getDoc(ref);

  const course = coursesSnapshot.data() as CourseType;

  return course.lmsUrl;
};
