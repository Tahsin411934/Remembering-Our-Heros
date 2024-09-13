import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import SocialLogin from "../SocialLogin/SocialLogin";

import Swal from "sweetalert2";
import UseAuth from "../../Hooks/useAuth";

const Login = () => { 
  const [error, setError] = useState(null);
  const location = useLocation();
  const { signinUser, setLoading } = UseAuth();
  const navigate = useNavigate();
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();

    //email password functionality
    signinUser(data.email, data.password)
      .then(() => {
        navigate(location?.state ? location.state : "/Admin/Deshboard");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire(`${error}`);
        reset();
      });   
  };

  return (
    <div className="font-Poppins pt-16">
      <div className="w-[80%] lg:w-[40%] mx-auto shadow-xl bg-white rounded-lg p-5">
        <h1 className="text-center text-2xl text-green-700 font-bold italic">
          Welcome Back 
          
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {error && <p className="text-red-500">{error}</p>}

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required.</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required.</p>
            )}
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg">
              Sign In
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
