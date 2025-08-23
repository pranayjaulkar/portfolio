"use client";

import { useEffect, useState } from "react";

interface BackgroundImageProps {
  children: React.ReactNode;
}

export default function BackgroundImage({ children }: BackgroundImageProps) {
  const [loading, setloading] = useState("");
  const [bgImage, setBgImage] = useState("");
  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const res = await fetch("/space.webp");
        const blob = await res.blob();

        const img = new Image();
        const imageUrl = URL.createObjectURL(blob);
        setBgImage(imageUrl);
        img.src = imageUrl;
        await img.decode();
      } catch (error) {
        console.log("error: ", error);
      }
    };
    fetchBackgroundImage();
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-auto">
      {bgImage && <img className="w-screen h-screen object-cover" src={bgImage} alt="bg" />}
      <div className="fixed top-0 left-0 w-screen h-screen">{children}</div>
    </div>
  );
}
