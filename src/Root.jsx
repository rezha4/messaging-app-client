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
  const [users, setUsers] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const fetchMessages = async () => {
    try {
      const url = `http://localhost:3000/messages?sender=${user.user._id}&receiver=${receiver}`;
      const response = await fetch(url);
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error(error);
    }
  };

  const postMessages = async () => {
    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: user.user._id, receiver, message }),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserClick = (id) => {
    setReceiver(id);
    fetchMessages();
    console.log(user.user._id);
    console.log(receiver);
  };

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
                {users.map((user) => (
                  <p
                    key={user._id}
                    className={contactClass}
                    onClick={() => handleUserClick(user._id)}
                  >
                    {user.username}
                  </p>
                ))}
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
                <form
                  onSubmit={postMessages}
                  className="h-[100%] flex justify-center items-center gap-0.5"
                >
                  <button
                    className="border p-2 border-black rounded"
                    type="submit"
                  >
                    Send
                  </button>
                  <input
                    type="text"
                    name="message"
                    className="border border-black w-[90%] h-[70%] rounded-md"
                    onChange={(e) => setMessage(e.target.value)}
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
