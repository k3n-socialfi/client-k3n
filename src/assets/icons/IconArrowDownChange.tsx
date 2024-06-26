interface IIconArrowDown {
  width?: number;
  height?: number;
}

export default function IconArrowDown({ height, width }: IIconArrowDown) {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "17"}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.703 4.10928C15.5052 3.91133 15.2708 3.81244 14.9999 3.81244H1.00008C0.729069 3.81244 0.494784 3.91133 0.296837 4.10928C0.0988911 4.30744 0 4.54173 0 4.81257C0 5.08336 0.0988911 5.31764 0.296837 5.51564L7.29676 12.5156C7.49493 12.7135 7.72921 12.8126 8 12.8126C8.27079 12.8126 8.50529 12.7135 8.70307 12.5156L15.703 5.51559C15.9007 5.31764 16 5.08336 16 4.81251C16 4.54173 15.9007 4.30744 15.703 4.10928Z"
        fill="#F95A2C"
      />
    </svg>
  );
}
