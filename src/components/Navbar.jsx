import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-[10vh] shadow-md flex justify-center items-center">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold">Messaging App</h1>
      </Link>
    </div>
  );
};
