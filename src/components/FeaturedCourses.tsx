"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  console.log(featuredCourses);

  return (
    <div className="py-12 bg-gray-900 ">
      <div className="text-center">
        <h1 className="text-base text-teal-500 font-semibold tracking-wide uppercase">
          Featured Courses
        </h1>
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </h1>
      </div>
      <div className="mt-10 mx-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center items-center ">
              <BackgroundGradient
                className="flex flex-col rounded-2xl bg-white dark:bg-zinc-900
           overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 h-56  sm:p-6 flex flex-col justify-between items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  <Link  href={`/corses/${course.id}`} >
                 
                   <button className="bg-gray-600 px-5 py-2 rounded-2xl">
                     Learn More
                   </button>
                  
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-20">
        <Link href={"/courses"}>
          <Button className="bg-gray-700 text-white">View All Courses</Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
