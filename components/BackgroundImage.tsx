import { useEffect, useState } from "react";

const BackgroundImage = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(
      "https://res.cloudinary.com/dphpgb4hg/image/upload/v1708235594/jlm7cc2h12saddbqh2qc.jpg"
    )
      .then((res) => res.blob())
      .then((data) => {
        const objectUrl = URL.createObjectURL(data);
        setImage(objectUrl);
      });
  }, []);
  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    ></div>
  );
};
export default BackgroundImage;
