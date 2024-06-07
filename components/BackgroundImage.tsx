"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface BackgroundImageProps {
  children: React.ReactNode;
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(/keyboard.jpg)`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};
export default BackgroundImage;
