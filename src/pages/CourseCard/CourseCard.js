import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const {id,name,description,img,lessons} = course;
  console.log(course);
  return (
    <div>
      <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link>
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </Link>
        <div className="p-5">
          <Link>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Link className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-500 rounded-lg">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
