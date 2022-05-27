import React from "react";

const Blog = () => {
  return (
    <>
      <div className="px-4 lg:px-12">
        <h1 className="text-4xl text-center"> Our Blog</h1>
        <span className="flex justify-center mt-4">
          {" "}
          <div className="divaidar"></div>
        </span>

        <div className="grid md:grid-cols-2 md:gap-8 gap-4 grid-cols-1 lg:mt-10 mt-5">
          <div className="">
            <h2 className="text-3xl mb-4">
              How will you improve the performance of a React Application?
            </h2>
            <div>
              <p>
                Internally, React uses several clever techniques to minimize the
                number of costly DOM operations required to update the UI. For
                many applications, using React will lead to a fast user
                interface without doing much work to specifically optimize for
                performance. Nevertheless, there are several ways you can speed
                up your React application.
              </p>
              <p>
                This can impact the React app’s performance if we have an
                operation in a child component that takes time to compute. This
                brings us to our optimization techniques. <br />
                1. Keeping component state local where necessary <br />
                2. Memoizing React components to prevent unnecessary re-renders
                <br />
                3.Code-splitting in React using dynamic import
                <br />
                4.Windowing or list virtualization in React.
                <br />
                5.Lazy loading images in React.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl mb-4">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <div>
              <p>
                There are dozens of state management tools on GitHub (e.g.,
                Redux, MobX, Akita, Recoil, and Zustand). However, taking each
                of them into consideration would lead to endless research and
                comparisons. That’s why I narrowed down my selection to the
                three main competitors based on their popularity, usage, and
                maintainer.
              </p>
              <p>
                <img
                  src="https://i.ibb.co/6b5rHDQ/image-1626077078758-8f13c8c642a8caef9e37466be79cc830.gif"
                  alt=""
                />
                To make the comparison explicit, I’ll use the following quality
                attributes: <br />
                1.Usability <br />
                2. Maintainability
                <br />
                3.Performance
                <br />
                4.Scalability (works with the same performance on the bigger
                states)
                <br />
                5.Modifiability.
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl mb-4">
              How does prototypical inheritance work?
            </h2>
            <div>
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object.getPrototypeOf and Object.
              </p>
              <p>
                <img
                  src="https://i.ibb.co/3k7Vpcs/Untitled-Diagram108.png"
                  alt=""
                />
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl mb-4">
              You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h2>
            <div>
              <p>
                UseIng
                <ul>
                  <li>map()</li>
                  <li>forEach()</li>
                  <li>filter()</li>
                  <li>find()</li>
                  <li>Call Index Number</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl mb-4">
              What is a unit test? Why should write unit tests?
            </h2>
            <div>
              <p>
                UNIT TESTING : is a type of software testing where individual
                units or components of a software are tested. The purpose is to
                validate that each unit of the software code performs as
                expected. Unit Testing is done during the development (coding
                phase) of an application by the developers. Unit Tests isolate a
                section of code and verify its correctness. A unit may be an
                individual function, method, procedure, module, or object.
              </p>
              <p>
                Unit testing allows software developers to actually think
                through the design of the software and what has to be done
                before they write the code. This can help them to stay focused
                and can also help them to create much better designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
