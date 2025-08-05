import Navbar from "./navbar/Navbar";
import React, { memo } from "react";
import { Outlet } from "react-router-dom";

interface ContainerProps {
  children?: React.ReactNode;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Container(props: ContainerProps) {
  return (
    <div className="relative h-screen bg-[#fffff0] flex flex-col md:flex-row">
      <div className="md:w-[10vw] w-full md:static fixed bottom-0 left-0 right-0 z-10 md:order-1 order-2">
        <Navbar setCurrentPage={props.setCurrentPage} />
      </div>

      <div className="flex-grow md:order-2 order-1 md:min-h-screen">
        <div className="relative md:overflow-y-auto">
          {props.children}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default memo(Container);
