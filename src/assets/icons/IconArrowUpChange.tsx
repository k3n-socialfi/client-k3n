interface IIconArrowUp {
  width?: number;
  height?: number;
}

export default function IconArrowUp({ width, height }: IIconArrowUp) {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "17"}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.703 12.5158C15.5052 12.7137 15.2708 12.8126 14.9999 12.8126H1.00008C0.729069 12.8126 0.494784 12.7137 0.296837 12.5158C0.0988911 12.3176 0 12.0833 0 11.8125C0 11.5417 0.0988911 11.3074 0.296837 11.1094L7.29676 4.1095C7.49493 3.91155 7.72921 3.81244 8 3.81244C8.27079 3.81244 8.50529 3.91155 8.70307 4.1095L15.703 11.1095C15.9007 11.3074 16 11.5417 16 11.8125C16 12.0833 15.9007 12.3176 15.703 12.5158Z"
        fill="#54F209"
      />
    </svg>
  );
}
