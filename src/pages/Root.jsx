import "../index.css";
import { Navbar } from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Login } from "./Login";

function Root() {
  const { user } = useAuthContext();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);

  const fetchMessages = async () => {
    try {
      const url = `http://localhost:3000/messages?sender=${user.user._id}&receiver=${receiver}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
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

  const postMessages = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: user.user._id, receiver, message }),
      });
      fetchMessages();
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (receiver) {
      fetchMessages();
    }
  }, [receiver]);

  const handleUserClick = (id) => {
    setReceiver(id);
  };

  const determineClass = (userid) => {
    return userid === receiver
      ? "bg-gray-200 shadow-xl text-center text-xl p-3 my-3 border-b-2 cursor-pointer hover:bg-gray-200 hover:shadow-xl transition duration-300"
      : "text-center text-xl p-3 my-3 border-b-2 cursor-pointer hover:bg-gray-200 hover:shadow-xl";
  };
  const messageClass = "p-2 m-2 max-w-lg w-fit bg-green-400 rounded";
  return (
    <>
      <Navbar />
      {user ? (
        <>
          <main className="flex">
            <aside className="w-[25vw] h-[90vh] overflow-y-auto border-r-2">
              {users.map((user) => (
                <div
                  key={user._id}
                  className={determineClass(user._id)}
                  onClick={() => {
                    handleUserClick(user._id);
                  }}
                >
                  <p>{user.username}</p>
                </div>
              ))}
            </aside>
            <section className="w-[75vw] h-[90vh] flex flex-col">
              <div className="h-[90vh] overflow-y-auto">
                {messages.map((message) => (
                  <p
                    key={message._id}
                    className={`${messageClass} ${
                      user.user._id === message.sender
                        ? "bg-blue-400 text-white rounded-l-none rounded"
                        : "bg-green-400 text-black rounded-r-none rounded"
                    }`}
                  >
                    {message.message}
                  </p>
                ))}
              </div>
              <div className="w-[100%] h-[10vh] border-t-2">
                <form
                  onSubmit={(e) => {
                    postMessages(e);
                  }}
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </form>
              </div>
            </section>
          </main>
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

export default Root;
