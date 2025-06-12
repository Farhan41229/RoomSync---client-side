import React, { useContext, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { setUser, CreateUser, setDBuser, DBuser } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  function validatePassword(password) {
    // Check if the password has at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Check if the password has at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // Check if the password has a length of at least 6 characters
    const isLongEnough = password.length >= 6;

    // If any condition is not met, set the error message
    if (!hasUppercase) {
      setErrorMessage('Password must contain at least one uppercase letter.');
      return false;
    }
    if (!hasLowercase) {
      setErrorMessage('Password must contain at least one lowercase letter.');
      return false;
    }
    if (!isLongEnough) {
      setErrorMessage('Password must be at least 6 characters long.');
      return false;
    }

    // If all conditions are met, clear the error message
    setErrorMessage('');
    return true;
  }
  // console.log('Error Message,', errorMessage);
  const HandleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoUrl = e.target.photourl.value;
    const dbuser = {
      email,
      name,
      photoUrl,
    };

    if (validatePassword(password)) {
      // Create a Firebase user
      CreateUser(email, password)
        .then((result) => {
          const user = result.user;
          setUser(user);

          // Add the user to MongoDB
          fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dbuser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log('Data after adding the user', data);

              // Set the MongoDB user data in the state
              setDBuser(data); // Use the MongoDB data returned from the server

              Swal.fire({
                title: 'User Registered Successfully',
                icon: 'success',
                draggable: true,
              });
            })
            .catch((error) => {
              console.log('Error adding MongoDB user:', error);
              Swal.fire({
                title: 'Error adding user',
                icon: 'error',
                text: error.message,
                draggable: true,
              });
            });
          // Navigate back to the login Page
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            title: 'Registration Error',
            icon: 'error',
            text: error.message,
            draggable: true,
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Validation Failed',
        text: errorMessage,
          footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              onSubmit={HandleRegister}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="photourl"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photourl
                </label>
                <input
                  type="url"
                  name="photourl"
                  id="photourl"
                  placeholder="Enter your PhotoURL"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#2563eb] focus:border-[#2563eb] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-[#2563eb] dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{' '}
                    <a
                      className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#2563eb] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#2563eb] dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{' '}
                <Link
                  to={'/auth/login'}
                  className="font-medium text-[#2563eb] hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
