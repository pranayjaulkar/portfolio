"use client";

interface BackgroundImageProps {
  children: React.ReactNode;
}

export default function BackgroundImage({ children }: BackgroundImageProps) {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(/space.jpg)`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
