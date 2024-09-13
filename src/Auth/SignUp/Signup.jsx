import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import UseAuth from "../../Hooks/useAuth";

const Signup = () => {
  const [passError, setPassError] = useState(null);
  const [pass, setPass] = useState(false);
  const { createUser, updateUserProfile, setUser, setLoading } = UseAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setPassError('');

    if (data.password.length < 6) {
      setPassError("Password length must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(data.password)) {
      setPassError('Password must contain at least one uppercase letter');
      return;
    } else if (!/[a-z]/.test(data.password)) {
      setPassError('Password must contain at least one lowercase letter');
      return;
    }

    // Create user functionality
    createUser(data.email, data.password)
      .then((userCredential) => {
        setLoading(false);
        const user = userCredential.user;
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            setUser({
              ...user,
              displayName: data.name,
              photoURL: data.photoURL,
            });
            toast.success("Registration successful");
            reset();
            navigate("/");
          })
          .catch(() => {
            // Handle update profile error
          });
      })
      .catch((error) => {
        setPassError(error.message);
        toast.error(error.message);
      });
  };

  // Password toggle functionality 
  const handlePassword = () => {
    setPass(!pass);
  }

  return (
    <div className="font-Poppins">
      <div className="pt-5"></div>
      <div className="w-[35rem] mx-auto shadow-xl bg-white rounded-lg p-5">
        <h1 className="text-center text-2xl font-bold italic">
          Welcome To <span className="font-bold text-green-700">Plate</span> <span className="font-bold">Swap!</span>
          <h2 className="text-base text-gray-600 font-normal mt-1">
            Welcome to <span className="font-bold text-green-700">Plate</span> <span className="font-bold">Swap!</span> Sign Up to Start Your Journey
          </h2>
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-2"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required.</p>
            )}
          </div>

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
            <label className="mb-2 text-gray-700">Photo URL</label>
            <input
              type="text"
              placeholder="Photo URL"
              className="border border-gray-300 rounded-lg p-2"
              {...register("photoURL", { required: true })}
            />
            {errors.photoURL && (
              <p className="text-red-500 text-sm mt-1">Photo URL is required.</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 text-gray-700">Password</label>
            <div className="relative">
              <input
                type={pass ? 'text' : 'password'}
                placeholder="Password"
                className="border border-gray-300 rounded-lg p-2 w-full"
                {...register("password", { required: true })}
              />
              <button
                type="button"
                onClick={handlePassword}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                <FaEye />
              </button>
            </div>
            {passError && <p className="text-red-500 text-sm mt-1">{passError}</p>}
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">Password is required.</p>
            )}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg"
            >
              Sign Up
            </button>
          </div>
          <div className="flex gap-5 items-center mt-4">
            <p>Already have an account?</p>
            <Link to="/login">
              <button className="bg-gray-100 text-green-700 py-2 px-4 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
