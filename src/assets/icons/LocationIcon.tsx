import { TIcon } from "@/types/icons.type";

const LocationIcon = ({ width, height, color }: TIcon) => {
  return (
    <svg
      width={width ?? 17}
      height={height ?? 17}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width ?? 17}
        height={height ?? 17}
        fill="white"
        fill-opacity="0.01"
      />
      <path
        d="M8.00001 1C6.54186 1.00177 5.14394 1.5818 4.11288 2.61287C3.08181 3.64394 2.50178 5.04185 2.50001 6.5C2.49828 7.69163 2.88758 8.85092 3.60816 9.8C3.60816 9.8 3.75816 9.99725 3.78226 10.0259L8.00001 15L12.2195 10.0237C12.2417 9.99705 12.3919 9.7998 12.3919 9.7998L12.3926 9.7986C13.1128 8.84987 13.5018 7.69109 13.5 6.5C13.4982 5.04185 12.9182 3.64394 11.8871 2.61287C10.8561 1.5818 9.45815 1.00177 8.00001 1ZM8.00001 8.5C7.60444 8.5 7.21776 8.3827 6.88887 8.16294C6.55997 7.94318 6.30362 7.63082 6.15225 7.26537C6.00087 6.89991 5.96126 6.49778 6.03843 6.10982C6.11561 5.72186 6.30609 5.36549 6.58579 5.08579C6.8655 4.80608 7.22186 4.6156 7.60983 4.53843C7.99779 4.46126 8.39992 4.50087 8.76537 4.65224C9.13082 4.80362 9.44318 5.05996 9.66294 5.38886C9.88271 5.71776 10 6.10444 10 6.5C9.99941 7.03025 9.78851 7.53861 9.41356 7.91356C9.03862 8.2885 8.53026 8.4994 8.00001 8.5Z"
        fill={color ?? "#F23581"}
      />
    </svg>
  );
};

export default LocationIcon;
