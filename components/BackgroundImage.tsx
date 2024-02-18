"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface BackgroundImageProps {
  children: React.ReactNode;
  image: string | undefined;
  setImage: Dispatch<SetStateAction<string | undefined>>;
  setShowUI: Dispatch<SetStateAction<boolean>>;
}

const BackgroundImage = ({
  children,
  image,
  setImage,
  setShowUI,
}: BackgroundImageProps) => {
  const [showImage, setShowImage] = useState(false);
  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/dphpgb4hg/image/upload/v1708235594/jlm7cc2h12saddbqh2qc.jpg"
    )
      .then((res) => res.blob())
      .then((data) => {
        const objectUrl = URL.createObjectURL(data);
        setImage(objectUrl);
        setTimeout(() => setShowUI(true), 1000);
      });
  }, []);

  useEffect(() => {
    setShowImage(true);
  }, [image]);
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
};
export default BackgroundImage;
