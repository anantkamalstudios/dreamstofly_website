// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// export const currency = "$";

// const App = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <>
//         <Navbar />
//         <hr />
//         <div className="flex w-full">
//           <Sidebar />
//           <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
//             <Outlet />
//           </div>
//         </div>
//       </>
//     </div>
//   );
// };

// export default App;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const currency = "$";

const App = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 md:p-2 lg:p-4 overflow-auto">
          <div className=" mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
