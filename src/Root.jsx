import { Login } from "./pages/Login";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Root() {
  const { user } = useAuthContext();
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:3000/messages");
      const data = await response.json();
      console.log(data)
      setMessages(data.messages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const contactClass = "text-xl p-3 m-3 border-b-2";
  const messageClass = "p-2 m-2 max-w-lg w-fit bg-green-400 rounded";
  return (
    <>
      <Navbar />
      {user ? (
        <>
          <main className="flex">
            <aside className="w-[25vw] h-[90vh] overflow-y-auto border-r-2">
              <div>
                <h1 className={contactClass}>Username</h1>
              </div>
            </aside>
            <section className="w-[75vw] h-[90vh] flex flex-col">
              <div className="h-[90vh] overflow-y-auto">
                {messages.map((message) => (
                  <p key={message._id} className={messageClass}>
                    {message.message}
                  </p>
                ))}
              </div>
              <div className="w-[100%] h-[10vh] border-t-2">
                <form className="h-[100%] flex justify-center items-center gap-0.5">
                  <button className="border p-2 border-black" type="submit">
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
          <Link to={"/login"} className="text-2xl underline">
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default Root;
