import { Login } from "./pages/Login";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { Link } from "react-router-dom";

function Root() {
  const { user } = useAuthContext();
  console.log(user)

  const contactClass = "text-xl p-3 m-3 border-b-2";
  const messageClass = "p-2 m-2 max-w-lg w-fit bg-green-400 rounded";
  return (
    <>
      <Navbar />
      {user ? (
        <>
          <main className="flex">
            <aside className="w-[25vw] h-[90vh] overflow-y-auto">
              <div>
                <h1 className={contactClass}>Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
                <h1 className="text-xl p-3 m-3">Username</h1>
              </div>
            </aside>
            <section className="w-[75vw] h-[90vh] flex flex-col">
              <div className="h-[90vh] overflow-y-auto">
                <p className={messageClass}>hi</p>
              </div>
              <div className="w-[100%] h-[10vh]">
                <form className="h-[100%] flex justify-center items-center gap-2">
                  <button className="" type="submit">
                    Send
                  </button>
                  <input
                    type="text"
                    name="message"
                    className="border border-black w-[90%] h-[70%] rounded-md"
                  />
                </form>
              </div>
            </section>
          </main>
        </>
      ) : (
        <div className="text-center mt-8">
          <p>Please login to see content:</p>
          <Link to={"/login"} className="text-2xl underline">Login</Link>
        </div>
      )}
    </>
  );
}

export default Root;
