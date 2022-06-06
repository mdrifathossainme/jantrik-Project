import React from "react";

const MyProtfolio = () => {
  return (
    <div className="md:px-12 lg:mt-8 mt-4 px-4">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center ">
          <div>
            <img
              src="https://i.ibb.co/bg6pMPd/261880983-653550162718303-7188586080518399796-n.jpg"
              className="rounded-full border-4 w-48 border-primary"
              alt=""
            />
          </div>
          <div className="lg:mt-8">
            <h1 className="text-4xl mb-4"> Name: MD RIFAT HOSSAIN </h1>
            <h2 className="text-xl">Education: Diploma in Mechanical</h2>
            <h2 className="text-xl">
              Email:{" "}
              <span className="underline text-blue-500">
                {" "}
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm#inbox?compose=GTvVlcSHwfLPsdzMXJwppbgdhnVbLQMzFzVGzDjfdKBmpVTZGjDkXDmSZmbCqbnvVSmHFvzDJjXGg"
                  target="_black"
                >
                  {" "}
                  mdrifathossain.mr@gmail.com
                </a>
              </span>{" "}
            </h2>
            <h2 className="text-xl">
              Linkedin :{" "}
              <span className="underline text-blue-500">
                <a
                  href="https://www.linkedin.com/in/mdrifathossainmr/"
                  target="_black"
                >
                  https://www.linkedin.com/in/mdrifathossainmr/
                </a>{" "}
              </span>{" "}
            </h2>

            <h2 className="text-xl">
              GitHub :{" "}
              <span className="underline text-blue-500">
                <a href="https://github.com/mdrifathossainme" target="_black">
                  https://github.com/mdrifathossainme
                </a>{" "}
              </span>{" "}
            </h2>
            <h2 className="text-xl">
              Skill: HTLM-5 ,CSS 3, Bootstrap 5,Tailwind ,JavaScript(ReactJS)
              NodeJS, MongoDb
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProtfolio;
