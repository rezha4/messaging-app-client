import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex justify-center items-center h-[85vh]">
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
        <div className="mb-6">
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
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-500 hover:bg-gray-700 active:bg-gray-900 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={isLoading}
          >
            Log In
          </button>
        </div>
        <p className="text-center text-gray-500 text-xs mt-6 ">
          No account? <Link to={"/signup"} className="hover:text-blue-500 text-underline">Sign up here</Link>
        </p>
        <p className="text-center text-gray-500 text-xs mt-6">Need a quick demo? login with this credential: user: user, password: password</p>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};
