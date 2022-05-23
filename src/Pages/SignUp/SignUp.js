import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleCreateAccount = (e) => {
        e.preventDefault()
    }
  return (
    <div className="my-12">
      <div className="lg:w-[570px] lg:h-[600px] mx-auto border-2 px-12 py-8 rounded-md ">
        <h1 className="text-2xl">Create an account</h1>
        
        <form className="mt-12" onSubmit={handleCreateAccount}>
          <div class="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Your Name"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
              {/* <span class="label-text-alt">Alt label</span> */}
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input
              type="email"
              placeholder="Enter Your Email"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
              {/* <span class="label-text-alt">Alt label</span> */}
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input
              type="Password"
              placeholder="Password"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
              {/* <span class="label-text-alt">Alt label</span> */}
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input
              type="password"
              placeholder="Confirm Password"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
              {/* <span class="label-text-alt">Alt label</span> */}
            </label>
          </div>
          
          <input type="submit" value="Create Account" className="btn btn-primary lg:w-full text-white" />
              </form>
              <h6 className=" mt-2"> I Have A Already Account <Link to="/login"><span className="text-primary"> Login </span></Link></h6>
              <div class="divider">OR</div>
              <div>
                  <button className="btn btn-outline lg:w-full">
                      <img className="w-8 mx-2" src="https://i.ibb.co/cCYwCmx/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                      Continue With Google</button>
              </div>
      </div>
    </div>
  );
};

export default SignUp;
