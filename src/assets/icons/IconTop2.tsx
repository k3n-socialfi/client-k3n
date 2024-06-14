import { IIcon } from "@/interface/common.interface";

export default function IconTop2({ size = 32 }: IIcon) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.9941 11.9292L31.532 14.3132H31.5272C32.1536 15.2843 32.1536 16.5419 31.5272 17.513L29.9892 19.897C29.7991 20.1907 29.687 20.5306 29.6675 20.8802L29.5066 23.7085C29.4408 24.8641 28.6974 25.8813 27.6152 26.2989L24.9658 27.3234C24.6368 27.452 24.3443 27.6633 24.1225 27.9352L22.3286 30.1274C21.5949 31.0257 20.3909 31.4141 19.2673 31.1179L16.5228 30.3944C16.1791 30.3046 15.8184 30.3046 15.4772 30.3944L12.7327 31.1179C12.4841 31.1835 12.2282 31.215 11.9772 31.215C11.0973 31.215 10.2442 30.8266 9.67142 30.1274L7.87753 27.9352C7.65573 27.6608 7.36325 27.4496 7.0342 27.3234L4.3848 26.2989C3.30018 25.8789 2.55923 24.8641 2.49342 23.7085L2.33255 20.8802C2.31062 20.5306 2.20093 20.1907 2.01082 19.897L0.472851 17.513C-0.153548 16.5419 -0.153548 15.2843 0.472851 14.3132L2.01326 11.9268C2.20337 11.633 2.31549 11.2931 2.33499 10.9436L2.49585 8.11526C2.56166 6.95966 3.30505 5.94245 4.38724 5.52488L7.03664 4.50038C7.36568 4.37172 7.65817 4.1605 7.87997 3.8886L9.67386 1.69637C10.4075 0.798112 11.6091 0.409677 12.7352 0.705859L15.4821 1.43175C15.8257 1.52157 16.1865 1.52157 16.5277 1.43175L19.2722 0.708286C20.3958 0.412104 21.5974 0.800539 22.3335 1.6988L24.1274 3.89103C24.3492 4.16536 24.6416 4.37657 24.9707 4.50281L27.6201 5.52731C28.7023 5.94731 29.4457 6.96209 29.5115 8.11769L29.6723 10.946C29.6943 11.2956 29.8039 11.6355 29.9941 11.9292ZM29.6041 19.6469L31.1421 17.2629C31.6734 16.4399 31.6734 15.3863 31.1421 14.5633L29.6041 12.1793C29.3701 11.8151 29.2336 11.4 29.2092 10.9703L29.0484 8.14196C28.9923 7.16602 28.3708 6.31146 27.4543 5.95702L24.8049 4.93252C24.4003 4.77472 24.042 4.51738 23.7691 4.18235L21.9752 1.99012C21.3536 1.23025 20.3421 0.904932 19.3916 1.15499L16.6471 1.87845C16.2279 1.99012 15.7843 1.99012 15.3651 1.87845L12.6206 1.15499C11.67 0.902504 10.6585 1.23025 10.037 1.99012L8.24313 4.18235C7.96771 4.51738 7.61186 4.77714 7.20726 4.93252L4.55785 5.95702C3.64385 6.31146 3.01988 7.16602 2.96383 8.14196L2.80296 10.9703C2.77859 11.4 2.6421 11.8175 2.40811 12.1793L0.87014 14.5633C0.338797 15.3863 0.338797 16.4399 0.87014 17.2629L2.40811 19.6469C2.6421 20.0111 2.77859 20.4262 2.80296 20.8559L2.96383 23.6842C3.01988 24.6602 3.64141 25.5147 4.55785 25.8692L7.20726 26.8937C7.61186 27.0515 7.97015 27.3088 8.24313 27.6438L10.037 29.8361C10.6585 30.5959 11.67 30.9213 12.6206 30.6712L15.3651 29.9477C15.7843 29.8361 16.2279 29.8361 16.6471 29.9477L19.3916 30.6712C20.3421 30.9237 21.3536 30.5959 21.9752 29.8361L23.7691 27.6438C24.0445 27.3088 24.4003 27.049 24.8049 26.8937L27.4543 25.8692C28.3683 25.5147 28.9923 24.6602 29.0484 23.6842L29.2092 20.8559C29.2336 20.4262 29.3701 20.0087 29.6041 19.6469ZM28.7453 10.9971C28.7721 11.5069 28.9354 12.0021 29.2108 12.4294L29.2132 12.427L30.7512 14.811C31.1826 15.4786 31.1826 16.3429 30.7512 17.0105L29.2132 19.3945C28.9354 19.8242 28.7745 20.3195 28.7453 20.8269L28.5844 23.6552C28.5405 24.449 28.0287 25.1482 27.2853 25.4371L24.6359 26.4616C24.1582 26.6461 23.7341 26.9545 23.4099 27.3502L21.616 29.5424C21.109 30.1615 20.2828 30.4285 19.5101 30.2246L16.7657 29.5011C16.2685 29.37 15.7444 29.37 15.2472 29.5011L12.5027 30.2246C11.7277 30.4261 10.9014 30.159 10.3969 29.5424L8.60298 27.3502C8.27881 26.9545 7.85471 26.6461 7.37699 26.4616L4.72759 25.4371C3.9842 25.1482 3.47479 24.449 3.42848 23.6552L3.26761 20.8269C3.2408 20.3171 3.0775 19.8218 2.80208 19.3945L1.26411 17.0105C0.832699 16.3429 0.832699 15.4786 1.26411 14.811L2.80208 12.427C3.07994 11.9973 3.2408 11.502 3.27005 10.9946L3.43092 8.16633C3.47479 7.37247 3.98663 6.67328 4.73003 6.38439L7.37943 5.35989C7.85715 5.17538 8.28125 4.86706 8.60542 4.47134L10.3993 2.27911C10.7917 1.80085 11.3791 1.53137 11.9836 1.53137C12.1566 1.53137 12.3297 1.55322 12.5027 1.59935L15.2472 2.32281C15.7444 2.45391 16.2685 2.45391 16.7657 2.32281L19.5101 1.59935C20.2828 1.39785 21.1115 1.6649 21.616 2.28154L23.4099 4.47377C23.7341 4.86949 24.1582 5.17781 24.6359 5.36231L27.2853 6.38681C28.0287 6.67571 28.5381 7.37489 28.5844 8.16876L28.7453 10.9971Z"
        fill="url(#paint0_linear_279_170)"
      />
      <circle
        opacity="0.4"
        cx="16.0061"
        cy="15.913"
        r="11.8077"
        stroke="white"
      />
      <path
        d="M13.6862 9.39309H18.5342L19.9102 11.4571V13.0411L14.1182 19.0411V19.1051H19.9102V20.9131H12.1982V18.4491L18.1182 12.3691L17.3342 11.2011H14.4382L13.1262 12.4971L12.1022 11.0091L13.6862 9.39309Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_279_170"
          x1="16"
          y1="0.60791"
          x2="16"
          y2="31.2159"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DEDEE2" />
          <stop offset="1" stopColor="#919191" />
        </linearGradient>
      </defs>
    </svg>
  );
}
