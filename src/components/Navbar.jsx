import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  return (
    <div className="h-[10vh] shadow-md flex items-center justify-around">
      <div></div>
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">Messaging App</h1>
        </Link>
      </div>
      <div>
        {user && (
          <button
            onClick={handleClick}
            className="text-xl border p-2 rounded-md hover:bg-gray-200"
          >
            {user.user.username} - Logout
          </button>
        )}
      </div>
    </div>
  );
};
