import React from "react";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import { SessionProvider } from "./context/SessionContext";

const App = () => {
  return (
    <div className="bg-slate-800 h-screen">
      <div className="flex justify-center items-center h-screen">
        <SessionProvider>
          <RouterProvider router={router} />
        </SessionProvider>
      </div>
    </div>
  );
};

export default App;
