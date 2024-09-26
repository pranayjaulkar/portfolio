export default function NodesIconLight({
  fill,
  width,
  className,
}: {
  fill?: string;
  className?: string;
  width: number;
  height?: number;
}) {
  return (
    <svg
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={width}
      height={width}
      className={className}
    >
      <path
        fill={fill}
        d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-48c0 38.7-27.5 71-64 78.4V273.6c20.3-20.7 48.7-33.6 80-33.6h96c44.2 0 80-35.8 80-80v-1.6c-36.5-7.4-64-39.7-64-78.4c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4V160c0 61.9-50.1 112-112 112H176c-44.2 0-80 35.8-80 80v1.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4V352 158.4C27.5 151 0 118.7 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
      ></path>
    </svg>
  );
}
