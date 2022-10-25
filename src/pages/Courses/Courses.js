import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="relative">
      <div className="flex px-2 lg:px-10 gap-16 mt-16">
        <div className="sticky top-0">
          <h2 className="text-2xl text-center font-bold font-serif text-gray-800 mb-2">
            Our Courses
          </h2>
          <div className="flex flex-col">
            {courses.map((course) => (
              <Link
                className="text-xl font-mono bg-purple-600 mb-4 text-white px-4 py-2 rounded-lg"
                to={`/courses/${course.id}`}
                key={course.id}
              >
                {course.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
