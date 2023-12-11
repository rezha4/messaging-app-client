import { useState, useEffect } from "react";
import { useSignup } from "../hooks/useSignup";
import Root from "./Root";
import { Navbar } from "../components/Navbar";
import { Login } from "./Login";
import { useAuthContext } from "../hooks/useAuthContext";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const { signup, error, isLoading } = useSignup();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != passwordConfirmation) {
      console.log("Pass dnt match");
    } else {
      await signup(username, password);
      setIsSignedUp(true);
    }
  };

  return (
    <>
      {isSignedUp ? (
        <Root />
      ) : (
        <>
          <Navbar />
          <div className="flex justify-center items-center h-[90vh]">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-80"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  id="username"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />
              </div>
              <div className="mb-1">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="reconfirmPassword"
                >
                  Reconfirm Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight"
                  id="reconfirmPassword"
                  type="password"
                  placeholder="Password"
                  name="reconfirmPassword"
                  //TODO
                  //reconfirm logic
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  value={passwordConfirmation}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-500 hover:bg-gray-700 active:bg-gray-900 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={isLoading}
                >
                  Sign Up
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </>
      )}
    </>
  );
};
