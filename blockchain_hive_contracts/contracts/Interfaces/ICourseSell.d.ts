// ICourseSell.d.ts

interface Course {
    id: number;
    holder: string;
    price: number;
    duration: number;
    startTime: number;
    nftId: number;
    isListed: boolean;
    reSell: boolean;
}

interface ICourseSell {
    sellCourse(_cId: number, _price: number): Promise<boolean>;
    buyCourse(_cId: number): Promise<number>;
    addCourse(_price: number, _duration: number): Promise<boolean>;
}

export { Course, ICourseSell };
