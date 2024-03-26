export default function GithubLightIcon({
  fill,
  width,
  className,
}: {
  fill?: string;
  className?: string;
  width: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      width={width}
      height={width}
      className={className}
    >
      <g
        fill={fill}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M5,3c-1.09306,0 -2,0.90694 -2,2v14c0,1.09306 0.90694,2 2,2h14c1.09306,0 2,-0.90694 2,-2v-7h-2v7h-14v-14h7v-2zM14,3v2h3.58594l-9.29297,9.29297l1.41406,1.41406l9.29297,-9.29297v3.58594h2v-7z"></path>
        </g>
      </g>
    </svg>
  );
}
