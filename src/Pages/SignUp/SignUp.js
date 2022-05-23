import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

const SignUp = () => {
 const { register, handleSubmit ,formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        reset()
        
        console.log(data)
    };
  return (
    <div className="my-12">
      <div className="lg:w-[570px] lg:h-[600px] mx-auto border-2 px-12 py-8 rounded-md ">
        <h1 className="text-2xl">Create an account</h1>
        
        <form className="mt-12"  onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <input {...register("displayName", { required: true ,   
                    maxLength : {
                            value: 28,
                            message: 'Max Length 28 Character'
                        },
                       
                    })}
              type="text"
              placeholder="Your Name"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
                <span className="label-text-alt"> 
                          {errors.displayName?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>First name is required</p>}
                          {errors.displayName?.type === 'maxLength' && <p className='text-red-500 text-[12px] font-bold'>{errors.displayName.message}</p>}
                         
                          
                          </span>
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input {...register("email", { required: true, 
                    pattern: {
                    value: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                    message: 'Email is not valid' 
                    } })}
              type="email"
              placeholder="Enter Your Email"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
               <span className="label-text-alt"> 
                          {errors.email?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Email required</p>}
                          {errors.email?.type === 'pattern' && <p className='text-red-500 text-[12px] font-bold'>{errors.email.message}</p>}
                          
                          </span>
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input   {...register("password", { required: true, 
                    pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: 'Minimum eight characters, at least one letter and one number' 
                    } })}
              type="Password"
              placeholder="Password"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
                <span className="label-text-alt"> 
                          {errors.password?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Password required</p>}
                          {errors.password?.type === 'pattern' && <p className='text-red-500 text-[12px] font-bold'>{errors.password.message}</p>}
                          
                </span>
            </label>
          </div>
          
          <div class="form-control w-full max-w-xs">
            <input  {...register("cpassword", { required: true, 
                   })} 
              type="password"
              placeholder="Confirm Password"
              class="input input-bordered lg:w-[462px]"
            />
            <label class="label">
               <span className="label-text-alt"> 
                          {errors.cpassword?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Confirm Password required</p>}
                          
                </span>
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
