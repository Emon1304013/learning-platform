import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
// import { onAuthStateChanged } from "firebase/auth";

const SignUp = () => {
  const { createUser, verifyEmail, updateUserProfile, googleSignIn , githubSignIn} =
    useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setshowConfirmPass] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Name Validation
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Email Validation
  const handleEmail = (e) => {
    const test = /\S+@\S+\.\S+/.test(e.target.value);
    if (!test) {
      setEmailError("please give a valid email");
      return;
    }
    setEmail(e.target.value);
    setEmailError("");
  };

  // Password Validation
  const handlePassword = (e) => {
    if (!/(?=.{8,})/.test(e.target.value)) {
      setPasswordError("password must be 8 characters long");
      return;
    }

    if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
      setPasswordError(
        "password should have at least one  Upper case letter!!"
      );
      return;
    }
    if (!/(?=.*[!#@$%&? "])/.test(e.target.value)) {
      setPasswordError("password should have one special character!!");
      return;
    }

    setPasswordError("");
    setPassword(e.target.value);
  };

  // Confirm Password Validation

  const handleConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setConfirmPasswordError("Password didn't match");
      return;
    } else {
      setConfirmPasswordError("");
    }
  };

  // Handle Registration

  const handleSubmit = (event) => {
    event.preventDefault();

    // User Creation
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        event.target.reset();
        updateUserProfile(name, photoUrl)
        .then(() => {
          verifyEmail()
            .then(() => {
              return toast.success("please check your email for verification link");
            })
            .catch((error) => {
              toast.error(error.message);
            });
        });
      })

      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleShowPass = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const handleShowConfirmPass = (e) => {
    e.preventDefault();
    setshowConfirmPass(!showConfirmPass);
  };

  const handleGoogleSignin = () => {
    googleSignIn().then((result) => {
      navigate(from, { replace: true })
    });
  };

  const handleGithubSignIn = () =>{
    githubSignIn()
    .then((result) => {
      const user = result.user;
      toast.success("User logged in successfully")
      navigate(from, { replace: true })
    })
    .catch((error) => {
      toast.error(error.message);
    })
}

  return (
    <div className="flex justify-center items-center pt-8 mb-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                onBlur={handleName}
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>
            <p className="text-red-600 text-center">{emailError}</p>

            <div>
              <label htmlFor="photo" className="block mb-2 text-sm">
                Photo URL
              </label>
              <input
                onBlur={(e) => {
                  setPhotoUrl(e.target.value);
                }}
                name="photo"
                id="photo"
                placeholder="Enter Your photo URL Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <div className="relative flex items-center">
                <input
                  onBlur={handlePassword}
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  required
                />
                <span className="absolute right-4 cursor-pointer">
                  <FaEye onClick={handleShowPass}></FaEye>
                </span>
              </div>
            </div>
            <p className="text-red-600 text-center">{passwordError}</p>

            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Confirm Password
                </label>
              </div>
              <div className="relative flex items-center">
                <input
                  onChange={handleConfirmPassword}
                  type={showConfirmPass ? "text" : "password"}
                  name="confirm"
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900"
                  required
                />
                <span className="absolute right-4 cursor-pointer">
                  <FaEye onClick={handleShowConfirmPass}></FaEye>
                </span>
              </div>
            </div>
            <p className="text-red-600 text-center">{confirmPasswordError}</p>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-purple-500 hover:bg-cyan-700 hover:text-white text-gray-100"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>

        {/* Social Accounts Login  */}
        <div className="flex justify-center space-x-4">
          {/* Google Login  */}
          <button
            onClick={handleGoogleSignin}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>

          {/* Github Login  */}
          <button 
          onClick={handleGithubSignIn}
          aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-600">
            Sign In
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
