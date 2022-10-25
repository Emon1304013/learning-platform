import React from "react";

const ProjectCard = ({ project }) => {
  const { project_description, project_img, project_name } = project;
  return (
    <div className="mb-8 w-full lg:w-1/2  mx-auto">
      <div className="w-full lg:flex">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${project_img})` }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {project_name}
            </div>
            <p className="text-gray-700 text-base">{project_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
