import { Login } from "./pages/Login";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Signup } from "./pages/Signup";

function Root() {
  return (
    <>
      <Navbar />
      <main className="flex">
        <aside className="w-[25vw] h-[90vh] overflow-y-auto">
          <div>
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
            <h1 className="text-xl p-3 m-3">Username</h1>
          </div>
        </aside>
        <section className="w-[75vw] h-[90vh] flex flex-col">
          <div className="h-[90vh] overflow-y-auto">
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veniam dolorem laborum, dolore expedita itaque pariatur autem,
              similique beatae provident quia ipsa voluptatem placeat!
              Repellendus dolore sapiente velit reprehenderit dicta!
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">Lorem </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quasi odio modi aperiam quaerat maiores. Aspernatur,{" "}
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veniam dolorem laborum, dolore expedita itaque pariatur autem,
              similique beatae provident quia ipsa voluptatem placeat!
              Repellendus dolore sapiente velit reprehenderit dicta!
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">Lorem </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quasi odio modi aperiam quaerat maiores. Aspernatur,{" "}
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veniam dolorem laborum, dolore expedita itaque pariatur autem,
              similique beatae provident quia ipsa voluptatem placeat!
              Repellendus dolore sapiente velit reprehenderit dicta!
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">Lorem </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quasi odio modi aperiam quaerat maiores. Aspernatur,{" "}
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              veniam dolorem laborum, dolore expedita itaque pariatur autem,
              similique beatae provident quia ipsa voluptatem placeat!
              Repellendus dolore sapiente velit reprehenderit dicta!
            </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">Lorem </p>
            <p className="p-2 m-2 max-w-lg w-fit bg-green-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quasi odio modi aperiam quaerat maiores. Aspernatur,{" "}
            </p>
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
  );
}

export default Root;
