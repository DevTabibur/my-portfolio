import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import RequireAdmin from "../../../authentication/RequireAdmin";
import useAdmin from "../../../Hooks/useAdmin";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import Loader from "../../Shared/Loader/Loader";

const LoginModal = () => {
  const navigate = useNavigate();
  // const [admin, setAdmin] = useState(false);
  const [createUserWithEmailAndPassword, cUser, cLoading, cError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithEmailAndPassword, signInUser, signInLoading, signError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState([]);
  const onSubmit = async (data, e) => {
    await signInWithEmailAndPassword(data.email, data.password);
    setEmail(data.email);
  };

  if (cUser || signInUser) {
    navigate("/dashboard");
  }


  // for loading
  if (cLoading || signInLoading) {
    return <Loader />;
  }

  // for error showing messages
  let signInError;
  if (cError || signError) {
    signInError = (
      <small>
        <p className="text-red-500">{cError?.message || signError?.message}</p>
      </small>
    );
  }

  return (
    <>
      {/* modal */}
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <label htmlFor="login-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Only Admin can Login. Thank you!
          </h3>
          <>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value="tobiburrohman2@gmail.com"
                  readOnly
                  // className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label my-1 py-0">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {signInError}
                </label>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="LOGIN"
                  ></input>
                </div>
              </div>
            </form>
          </>
        </label>
      </label>
    </>
  );
};

export default LoginModal;
