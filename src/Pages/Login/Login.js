import React, { useEffect, useState } from "react";
import { Link, Routes, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase,init";
import Loading from "../../Components/Loading/Loading";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [signInWithGoogle, user, loading, gerror] = useSignInWithGoogle(auth);
  const [resetFormToggle, setResetFormToggle] = useState(false);
  const [passerror, setpassCerror] = useState();
  const [signInWithEmailAndPassword, epuser, eploading, eperror] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [token] = useToken(user || epuser);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    if (user || epuser) {
      reset();
    }
  };

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (eploading || loading) {
    return <Loading />;
  }

  const handlerResetPassword = async (data) => {
    await sendPasswordResetEmail(data.email);
    toast("Check Your Mail");
    reset();
  };

  return (
    <div className="my-12">
      <div
        className={`lg:w-[470px]  ${
          resetFormToggle === false ? "lg:h-[480px]" : "lg:h-[300px]"
        } mx-auto border-2 px-12 py-8 rounded-md`}
      >
        <h1 className="text-2xl">
          {resetFormToggle === false ? "Login" : "Rset Password"}{" "}
        </h1>

        {resetFormToggle === false ? (
          <div>
            <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <input
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                      message: "Email is not valid",
                    },
                  })}
                  type="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered lg:w-[362px]"
                />
                <label className="label">
                  <span className="label-text-alt">
                    {errors.email?.type === "required" && (
                      <p className="text-red-500 text-[12px] font-bold">
                        Email required
                      </p>
                    )}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  {...register("password", { required: true })}
                  type="Password"
                  placeholder="Password"
                  className="input input-bordered lg:w-[362px]"
                />
                <label className="label">
                  <span className="label-text-alt">
                    {errors.password?.type === "required" && (
                      <p className="text-red-500 text-[12px] font-bold">
                        Password required
                      </p>
                    )}
                    {eperror ? (
                      <p className="text-red-500 text-[12px] font-bold capitalize">
                        {eperror.message.slice(22, 36)}
                      </p>
                    ) : (
                      ""
                    )}
                  </span>
                </label>
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary lg:w-full text-white"
              />
            </form>

            <h6 className=" mt-2">
              <span
                onClick={() => setResetFormToggle(!resetFormToggle)}
                className=" text-sm font-semibold cursor-pointer hover:underline"
              >
                {" "}
                Forget Password
              </span>
            </h6>
            <h6 className=" mt-2">
              {" "}
              I am New In Jantrik{" "}
              <Link to="/signup">
                <span className="text-primary"> Creat Account </span>
              </Link>
            </h6>
            <div className="divider">OR</div>
            <div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline lg:w-full"
              >
                <img
                  className="w-8 mx-2"
                  src="https://i.ibb.co/cCYwCmx/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt=""
                />
                Continue With Google
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(handlerResetPassword)} className="mt-4">
            <div className="form-control w-full max-w-xs">
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value:
                      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
                    message: "Email is not valid",
                  },
                })}
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered lg:w-[362px]"
              />
              <label className="label">
                <span className="label-text-alt">
                  {errors.email?.type === "required" && (
                    <p className="text-red-500 text-[12px] font-bold">
                      Email required
                    </p>
                  )}
                </span>
              </label>
            </div>
            <input
              type="submit"
              value="Reset PassWOrd"
              className="btn btn-primary lg:w-full text-white"
            />

            <h6 className=" mt-2">
              {" "}
              <span
                onClick={() => setResetFormToggle(!resetFormToggle)}
                className="text-primary cursor-pointer hover:underline"
              >
                {" "}
                Login{" "}
              </span>
            </h6>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
