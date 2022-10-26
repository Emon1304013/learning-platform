import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import ProjectCard from "../ProjectCard/ProjectCard";
import LessonDetails from "../LessonDetails/LessonDetails";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { id, name, description, img, projects, skills, lesson_details } =
    courseDetails;
    console.log(lesson_details);

  const createPdf = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name} lesson_plan.pdf`);
  };
  return (
    <div className="mt-10 px-6 lg:px-20">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center text-xl lg:text-4xl font-bold font-serif">
          {name}
        </h1>

        <button
          onClick={createPdf}
          className="bg-white border px-2 lg:px-4 py-2 text-purple-500 rounded-3xl lg:text-xl hover:bg-purple-500 hover:text-white hover:border-none cursor-pointer font-bold border-gray-600"
        >
          Download Lesson
        </button>
      </div>
      <h3 className="my-4 font-semibold text-lg lg:text-2xl font-mono">
        About This Course
      </h3>
      <p className="w-full lg:w-2/3 font-serif text-sm lg:text-lg">
        {description}
      </p>
      <h3 className="my-4 font-semibold text-lg lg:text-2xl font-mono">
        Skills You will gain
      </h3>
      <ul className="list-disc pl-4 font-extralight lg:font-bold">
        {skills.map((skill, i) => (
          <li className="" key={i}>
            {skill}
          </li>
        ))}
      </ul>

      {/* {lesson_details &&  */}
      
      <div id="pdf" className="my-10">
        <h2 className="text-center font-serif text-3xl font-bold">Lesson Plan</h2>
          {lesson_details.map((lesson,i) => (
            <LessonDetails key={i} lesson={lesson}></LessonDetails>
          ))}
      </div>

      {projects && (
        <div>
          <h2 className="uppercase text-center text-2xl lg:text-4xl font-bold font-serif my-4 lg:my-8">
            What You will Create
          </h2>
          <h4 className="text-gray-600 font-mono text-center text-lg lg:text-2xl font-bold">
            Portfolio projects that showcase your new skills
          </h4>

          <div className="mt-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mb-4">
        <Link to={`/checkout/${id}`}>
          <button className="bg-purple-500 px-8 py-4 rounded-full text-white text-2xl hover:bg-[#93E2A9] cursor-pointer font-bold">
            Get Premium Access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseDetails;
