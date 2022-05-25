import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle} from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import Loading from "../../Components/Loading/Loading";
import UseToken from "../../hooks/useToken";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signInWithGoogle, user, loading, gerror] = useSignInWithGoogle(auth);
    const [emailerror, setEmailCerror] = useState('');
    const [passerror, setpassCerror] = useState('');
    const [signInWithEmailAndPassword,epuser,eploading,eperror] = useSignInWithEmailAndPassword(auth);
   const location=useLocation();
    const navigate=useNavigate();
  
  
  const onSubmit = async data => { 
    
    if (eperror) {
      console.log('errro')
    }
    else {
      signInWithEmailAndPassword(data.email, data.password)
      reset()
       const[token]=UseToken(user)
    }
           
  };


  if (eploading) {
    return <Loading/>
  }



  const from= location.state?.from?.pathname ||"/"

  if (user) {
        navigate(from, {replace:true})
  }
  
  return (
    <div className="my-12">
      <div className="lg:w-[470px] lg:h-[450px] mx-auto border-2 px-12 py-8 rounded-md ">
        <h1 className="text-2xl">Login </h1>
        
        <form className="mt-12"  onSubmit={handleSubmit(onSubmit)}>
          
          <div className="form-control w-full max-w-xs">
            <input {...register("email", { required: true, 
                    pattern: {
                    value: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                    message: 'Email is not valid' 
                    } })}
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered lg:w-[362px]"
            />
            <label className="label">
               <span className="label-text-alt"> 
                          {errors.email?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Email required</p>}
                          {/* {errors.email?.type === 'pattern' && <p className='text-red-500 text-[12px] font-bold'>{errors.email.message}</p>} */}
                      
                          
                          </span>
            </label>
          </div>
          
          <div className="form-control w-full max-w-xs">
            <input   {...register("password", { required: true, 
                    })}
              type="Password"
              placeholder="Password"
              className="input input-bordered lg:w-[362px]"
            />
            <label className="label">
                <span className="label-text-alt"> 
                          {errors.password?.type === 'required' && <p className='text-red-500 text-[12px] font-bold'>Password required</p>}
                          {/* {passerror && <p className='text-red-500 text-[12px] font-bold'>Password Wrong</p>} */}
                     
                </span>
            </label>
          </div>
          
          <input type="submit" value="Login" className="btn btn-primary lg:w-full text-white" />
              </form>
              <h6 className=" mt-2"> I am New In Jantrik <Link to="/signup"><span className="text-primary"> Creat Account </span></Link></h6>
              <div className="divider">OR</div>
              <div>
                  <button onClick={()=>signInWithGoogle()} className="btn btn-outline lg:w-full">
                      <img className="w-8 mx-2" src="https://i.ibb.co/cCYwCmx/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                      Continue With Google</button>
              </div>
      </div>
    </div>
  );
};

export default Login;