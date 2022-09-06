import React, { FC, ReactNode } from "react";
import WindowHeader from "./WindowHeader";

type WindowWrapperProps = { children: ReactNode };

const WindowWrapper: FC<WindowWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-6xl h-full rounded-none sm:rounded-2xl overflow-hidden">
      <WindowHeader />
      <div className="w-full h-full bg-indigo-600/50">{children}</div>
    </div>
  );
};

export default WindowWrapper;
