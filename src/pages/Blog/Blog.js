import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            What is Cors?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-md text-gray-500">
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. <br />
            An example of a cross-origin request: the front-end JavaScript code
            served from https://domain-a.com uses XMLHttpRequest to make a
            request for https://domain-b.com/data.json. <br /> <br />
            The CORS mechanism supports secure cross-origin requests and data
            transfers between browsers and servers. Modern browsers use CORS in
            APIs such as XMLHttpRequest or Fetch to mitigate the risks of
            cross-origin HTTP requests
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-md text-gray-500">
          <div>
            Google Firebase is an application development platform that allows
            developers to create iOS, Android, and Web apps. It reduces
            development workload and time. And it's a perfect prototyping tool.
            Firebase is simple, lightweight, friendly, and industrially
            recognized. <br />
            <span className="font-bold text-black mt-2">
              It offers a robust feature set that focuses on three main pillars:
            </span>
            <ul className="list-disc pl-4">
              <li>Helping you to build apps faster</li>
              <li>
                Releasing apps with confidence, performance, and stability
              </li>
              <li>Increasing user engagement after releasing the app</li>
            </ul>
            Being serverless, Firebase removes the need to worry about the
            technicalities of cloud server configuration <br />
            <span className="my-2 text-xl font-bold text-black">
              Alternatives of Firebase:{" "}
            </span>
            <ul className="list-decimal pl-8">
              <li className="mb-2">
                <span className="font-bold text-black">Back4app</span> is a
                great option to build web and mobile apps super fast, scale
                without the complexity of managing server-side infrastructure
                and focus on the user interface. The pricing is affordable and
                easy to understand.
              </li>
              <li className="mb-2">
                <span className="font-bold text-black"> Parse </span>is a comprehensive application stack that will help you build applications faster. It is an open-source backend framework that is free to use and download. It is a terrific free Firebase alternative.
              </li>
              <li className="">
                <span className="font-bold text-black"> Backendless </span>is a visual application development platform. It has been operating since 2012, and it is one of the first Backend as a Service solutions launched. 
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
            How does the private route work?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-md text-gray-500">
          <p>
          PrivateRoute component is the blueprint for all private routes in the application. The private route component is used to protect selected pages in a React app from unauthenticated users. <br />
          The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
          </p>
        </div>
      </div>

      <div className="mx-auto my-10 flex flex-col w-full lg:w-2/3 rounded-lg bg-white font-serif text-black shadow-xl">
        <div className="mt-4">
          <h1 className="ml-8 md:mx-11 my-1 font-bold text-xl lg:text-[20px] text-gray-600">
          What is Node? How does Node work?
          </h1>
        </div>
        <div className="mx-11 mb-4 text-md text-gray-500">
          <p>
          Node.js, a JavaScript runtime for building server-side or desktop applications. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications. <br />

          <span className="my-2 text-xl font-bold text-black"> Working of Node JS: </span> <br />
          Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.

          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png" alt="" className="w-full mx-auto"/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
