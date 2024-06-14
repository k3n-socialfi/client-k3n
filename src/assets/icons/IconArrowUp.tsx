interface IIconArrowUpProps {
  color?: string;
}

export default function IconArrowUp({ ...props }: IIconArrowUpProps) {
  return (
    <svg
      width="14"
      height="7"
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.52128 1.0965C7.67864 0.261736 6.3151 0.260153 5.47765 1.0976L1.13098 5.44427C0.807474 5.76778 0.807474 6.29883 1.13098 6.62234C1.45449 6.94585 1.98555 6.94585 2.30905 6.62234L6.65572 2.27567C6.84555 2.08585 7.15449 2.08585 7.34432 2.27567L11.691 6.62234C11.8568 6.78815 12.0697 6.86664 12.28 6.86664C12.5001 6.86664 12.706 6.77481 12.8608 6.63032L12.865 6.6264L12.8691 6.62234C13.1926 6.29883 13.1926 5.76778 12.8691 5.44427L8.52239 1.0976L8.52128 1.0965Z"
        fill={props.color ?? "#F23581"}
      />
    </svg>
  );
}
