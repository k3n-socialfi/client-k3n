import { TIcon } from "@/types/icons.type"

const Top1Icon = ({width, height, color}: TIcon) => {
  return (
    <svg width={width ?? "32"} height={height ?? "32"} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9969 12.0166L31.5348 14.4006H31.53C32.1564 15.3717 32.1564 16.6293 31.53 17.6004L29.992 19.9844C29.8019 20.2781 29.6898 20.618 29.6703 20.9676L29.5094 23.7959C29.4436 24.9515 28.7002 25.9687 27.618 26.3863L24.9686 27.4108C24.6396 27.5394 24.3471 27.7507 24.1253 28.0226L22.3314 30.2148C21.5978 31.1131 20.3937 31.5015 19.2701 31.2053L16.5256 30.4818C16.182 30.392 15.8212 30.392 15.48 30.4818L12.7355 31.2053C12.4869 31.2709 12.231 31.3024 11.98 31.3024C11.1001 31.3024 10.247 30.914 9.67423 30.2148L7.88034 28.0226C7.65854 27.7482 7.36605 27.537 7.03701 27.4108L4.38761 26.3863C3.30299 25.9663 2.56203 24.9515 2.49622 23.7959L2.33536 20.9676C2.31342 20.618 2.20374 20.2781 2.01363 19.9844L0.475659 17.6004C-0.150741 16.6293 -0.150741 15.3717 0.475659 14.4006L2.01607 12.0142C2.20618 11.7204 2.3183 11.3805 2.3378 11.031L2.49866 8.20266C2.56447 7.04707 3.30786 6.02985 4.39005 5.61228L7.03945 4.58779C7.36849 4.45912 7.66097 4.24791 7.88277 3.976L9.67666 1.78377C10.4103 0.885514 11.6119 0.497079 12.738 0.793261L15.4849 1.51915C15.8285 1.60897 16.1893 1.60897 16.5305 1.51915L19.275 0.795689C20.3986 0.499507 21.6002 0.887942 22.3363 1.7862L24.1302 3.97843C24.352 4.25276 24.6444 4.46397 24.9735 4.59021L27.6229 5.61471C28.7051 6.03471 29.4485 7.04949 29.5143 8.20509L29.6751 11.0334C29.6971 11.383 29.8068 11.7229 29.9969 12.0166ZM29.6069 19.7343L31.1449 17.3503C31.6762 16.5273 31.6762 15.4737 31.1449 14.6507L29.6069 12.2667C29.3729 11.9025 29.2364 11.4874 29.212 11.0577L29.0512 8.22937C28.9951 7.25342 28.3736 6.39887 27.4571 6.04442L24.8077 5.01992C24.4031 4.86212 24.0449 4.60478 23.7719 4.26976L21.978 2.07752C21.3565 1.31765 20.345 0.992334 19.3944 1.24239L16.6499 1.96585C16.2307 2.07752 15.7871 2.07752 15.3679 1.96585L12.6234 1.24239C11.6729 0.989906 10.6614 1.31765 10.0398 2.07752L8.24594 4.26976C7.97052 4.60478 7.61466 4.86455 7.21006 5.01992L4.56066 6.04442C3.64665 6.39887 3.02269 7.25342 2.96663 8.22937L2.80577 11.0577C2.78139 11.4874 2.6449 11.9049 2.41092 12.2667L0.872947 14.6507C0.341605 15.4737 0.341605 16.5273 0.872947 17.3503L2.41092 19.7343C2.6449 20.0985 2.78139 20.5136 2.80577 20.9433L2.96663 23.7716C3.02269 24.7476 3.64422 25.6021 4.56066 25.9566L7.21006 26.9811C7.61466 27.1389 7.97296 27.3962 8.24594 27.7312L10.0398 29.9235C10.6614 30.6833 11.6729 31.0087 12.6234 30.7586L15.3679 30.0351C15.7871 29.9235 16.2307 29.9235 16.6499 30.0351L19.3944 30.7586C20.345 31.0111 21.3565 30.6833 21.978 29.9235L23.7719 27.7312C24.0473 27.3962 24.4031 27.1364 24.8077 26.9811L27.4571 25.9566C28.3712 25.6021 28.9951 24.7476 29.0512 23.7716L29.212 20.9433C29.2364 20.5136 29.3729 20.0961 29.6069 19.7343ZM28.7481 11.0845C28.7749 11.5943 28.9382 12.0895 29.2136 12.5168L29.216 12.5144L30.754 14.8984C31.1854 15.566 31.1854 16.4303 30.754 17.0979L29.216 19.4819C28.9382 19.9116 28.7773 20.4069 28.7481 20.9143L28.5872 23.7426C28.5433 24.5365 28.0315 25.2356 27.2881 25.5245L24.6387 26.549C24.161 26.7335 23.7369 27.0419 23.4127 27.4376L21.6188 29.6298C21.1118 30.2489 20.2856 30.5159 19.5129 30.312L16.7685 29.5885C16.2713 29.4574 15.7472 29.4574 15.25 29.5885L12.5056 30.312C11.7305 30.5135 10.9042 30.2465 10.3997 29.6298L8.60579 27.4376C8.28162 27.0419 7.85752 26.7335 7.3798 26.549L4.7304 25.5245C3.987 25.2356 3.4776 24.5365 3.43129 23.7426L3.27042 20.9143C3.24361 20.4045 3.08031 19.9092 2.80489 19.4819L1.26692 17.0979C0.835506 16.4303 0.835506 15.566 1.26692 14.8984L2.80489 12.5144C3.08275 12.0847 3.24361 11.5894 3.27286 11.082L3.43372 8.25373C3.4776 7.45987 3.98944 6.76069 4.73283 6.47179L7.38224 5.44729C7.85996 5.26278 8.28406 4.95446 8.60822 4.55874L10.4021 2.36651C10.7945 1.88825 11.3819 1.61877 11.9864 1.61877C12.1594 1.61877 12.3325 1.64062 12.5056 1.68675L15.25 2.41021C15.7472 2.54131 16.2713 2.54131 16.7685 2.41021L19.5129 1.68675C20.2856 1.48525 21.1143 1.7523 21.6188 2.36894L23.4127 4.56117C23.7369 4.95689 24.161 5.26521 24.6387 5.44972L27.2881 6.47421C28.0315 6.76311 28.5409 7.4623 28.5872 8.25616L28.7481 11.0845Z" fill="url(#paint0_linear_1597_41495)"/>
      <circle opacity="0.4" cx="16.0089" cy="15.9991" r="11.8077" stroke="white"/>
      <path d="M15.7793 21V11.8906H15.7324L12.8574 13.875V11.75L15.7715 9.72656H18.1152V21H15.7793Z" fill={color ?? "white"}/>
      <defs>
        <linearGradient id="paint0_linear_1597_41495" x1="16.0028" y1="0.695312" x2="16.0028" y2="31.3033" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F4BE67"/>
          <stop offset="1" stop-color="#CD9526"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Top1Icon
