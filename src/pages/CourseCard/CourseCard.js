import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const {id,name,description,img,lessons,difficulty} = course;
//   console.log(course);
  return (
    <div>
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700">
        <Link>
          <img
            className="rounded-t-lg w-full h-[200px] p-2"
            src={img}
            alt="course img"
          />
        </Link>
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {name}
            </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 min-h-[80px]">
            {description.length > 100 ? description.slice(0,100) + '...' : description }
          </p>
          <Link 
          to={`/courses/${id}`}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-500 rounded-lg">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
