import React from "react";
import router from './routes'
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-slate-100 h-screen">
      <div className="flex justify-center items-center h-screen">
        <RouterProvider router={router} />
        //
      </div>
      //
    </div>
  );
};

export default App;
