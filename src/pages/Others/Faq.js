import React from "react";

const Faq = () => {
  return (
    <div>
      <div>
        <section className="text-gray-700">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Frequently Asked Question
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                The most common questions in our community
              </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What Language Do You Need to Know for being good developer?
                  </summary>

                  <span>
                    If you're interested in creating a static website or a
                    single webpage, you should start with Web Fundamentals of
                    HTML and CSS. To make them interactive learn JS. Research on
                    google You will get the future paths.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    No, currently we don't support this Feature. We are working
                    on this.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is React Router - Dynamic Routes?
                  </summary>

                  <span>
                    When we say dynamic routing, we mean routing that takes
                    place as your app is rendering, not in a configuration or
                    convention outside of a running app. That means almost
                    everything is a component in React Router
                  </span>
                </details>
              </div>
              <div className="w-full lg:w-1/2 px-4 py-2">
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    Overview of the Internet - How Do Browsers Work
                  </summary>

                  <span className="px-4 py-2">
                    The browser is a rendering engine. Its job is to download a
                    web page and render it in a way that's understandable by a
                    human being.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What kinds of problems does a data analyst solve?
                  </summary>

                  <span className="px-4 py-2">
                    The types of problems that data analysts work on can depend
                    on different things, such as the context of the field they
                    are working in, which can include finance, e-commerce, real
                    estate, and many different fields that data plays an
                    important part in.
                  </span>
                </details>
                <details className="mb-4">
                  <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                    What is the best career path for Computer Science Student
                  </summary>

                  <span className="px-4 py-2">
                    There is no fixed career path CS students. This is huge
                    field. There are various sites that students can explore.
                    One should take the field as career path in which he/she
                    finds most interesting.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Faq;
