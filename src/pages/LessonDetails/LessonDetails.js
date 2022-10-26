import React from 'react';

const LessonDetails = ({lesson}) => {
    const {lesson_name, lesson_summary} = lesson;
    return (
        <div>
            <div className="mx-auto my-2 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            {lesson_name}
          </h1>
        </div>
        <div className="mx-11 mb-4 text-md text-gray-500">
          <p>
            {lesson_summary}
          </p>
        </div>
      </div>
        </div>
    );
};

export default LessonDetails;