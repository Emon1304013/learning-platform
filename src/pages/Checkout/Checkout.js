import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Checkout = () => {
  const course = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(course);
  const { name, description, img, lessons, difficulty } = course;
  return (
    <div className="my-12">
      <div className="w-11/12 lg:w-1/2 mx-auto ">
        <h2 className="text-xl lg:text-2xl text-center font-bold mb-4 font-serif">
          Welcome, <span className="uppercase">{user?.displayName}</span>
        </h2>
        <h6 className="text-md lg:text-xl font-semibold text-center ">
          You have the selected {name} course
        </h6>

        <div className="my-8 w-full mx-auto">
          <div className="w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${img})` }}
              title=""
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {name}
                </div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
              <div class="flex flex-col lg:flex-row items-center justify-between">
                <p><span className="font-semibold">Lessons: </span> {lessons}</p>
                <p><span className="font-semibold">Difficulty-level: </span>{difficulty}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center font-semibold">
          Thanks for Purchasing
        </h3>
      </div>
    </div>
  );
};

export default Checkout;
