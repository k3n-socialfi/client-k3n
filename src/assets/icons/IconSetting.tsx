import React from "react";

const SettingIcon = () => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 12.66C19.7397 12.4775 19.6513 12.2429 19.6513 12C19.6513 11.7571 19.7397 11.5225 19.9 11.34L21.18 9.90002C21.3211 9.74269 21.4087 9.54472 21.4302 9.33452C21.4518 9.12433 21.4062 8.9127 21.3 8.73002L19.3 5.27002C19.1949 5.08754 19.0349 4.94289 18.8428 4.8567C18.6506 4.77051 18.4362 4.74718 18.23 4.79002L16.35 5.17002C16.1108 5.21945 15.8618 5.17961 15.6499 5.05802C15.438 4.93643 15.278 4.7415 15.2 4.51002L14.59 2.68002C14.5229 2.4814 14.3951 2.30888 14.2246 2.18686C14.0542 2.06484 13.8497 1.99948 13.64 2.00002H9.64002C9.42195 1.98864 9.20615 2.04894 9.02558 2.17173C8.84501 2.29452 8.7096 2.47304 8.64002 2.68002L8.08002 4.51002C8.00202 4.7415 7.84199 4.93643 7.63013 5.05802C7.41827 5.17961 7.16924 5.21945 6.93002 5.17002L5.00002 4.79002C4.80457 4.7624 4.60532 4.79324 4.42737 4.87866C4.24941 4.96407 4.10072 5.10025 4.00002 5.27002L2.00002 8.73002C1.89118 8.91067 1.84224 9.1211 1.8602 9.33124C1.87816 9.54138 1.9621 9.74046 2.10002 9.90002L3.37002 11.34C3.53034 11.5225 3.61875 11.7571 3.61875 12C3.61875 12.2429 3.53034 12.4775 3.37002 12.66L2.10002 14.1C1.9621 14.2596 1.87816 14.4587 1.8602 14.6688C1.84224 14.8789 1.89118 15.0894 2.00002 15.27L4.00002 18.73C4.10512 18.9125 4.26514 19.0571 4.45727 19.1433C4.6494 19.2295 4.86384 19.2529 5.07002 19.21L6.95002 18.83C7.18924 18.7806 7.43827 18.8204 7.65013 18.942C7.86199 19.0636 8.02202 19.2585 8.10002 19.49L8.71002 21.32C8.7796 21.527 8.91501 21.7055 9.09558 21.8283C9.27615 21.9511 9.49195 22.0114 9.71002 22H13.71C13.9197 22.0006 14.1242 21.9352 14.2946 21.8132C14.4651 21.6912 14.5929 21.5186 14.66 21.32L15.27 19.49C15.348 19.2585 15.508 19.0636 15.7199 18.942C15.9318 18.8204 16.1808 18.7806 16.42 18.83L18.3 19.21C18.5062 19.2529 18.7206 19.2295 18.9128 19.1433C19.1049 19.0571 19.2649 18.9125 19.37 18.73L21.37 15.27C21.4762 15.0873 21.5218 14.8757 21.5002 14.6655C21.4787 14.4553 21.3911 14.2573 21.25 14.1L19.9 12.66ZM18.41 14L19.21 14.9L17.93 17.12L16.75 16.88C16.0298 16.7328 15.2806 16.8551 14.6446 17.2238C14.0086 17.5925 13.5302 18.1819 13.3 18.88L12.92 20H10.36L10 18.86C9.76987 18.1619 9.2914 17.5725 8.65542 17.2038C8.01945 16.8351 7.27024 16.7128 6.55002 16.86L5.37002 17.1L4.07002 14.89L4.87002 13.99C5.36197 13.44 5.63395 12.7279 5.63395 11.99C5.63395 11.2521 5.36197 10.54 4.87002 9.99002L4.07002 9.09002L5.35002 6.89002L6.53002 7.13002C7.25024 7.27724 7.99945 7.1549 8.63542 6.78622C9.2714 6.41753 9.74987 5.82818 9.98002 5.13002L10.36 4.00002H12.92L13.3 5.14002C13.5302 5.83818 14.0086 6.42753 14.6446 6.79622C15.2806 7.1649 16.0298 7.28724 16.75 7.14002L17.93 6.90002L19.21 9.12002L18.41 10.02C17.9236 10.5688 17.655 11.2767 17.655 12.01C17.655 12.7433 17.9236 13.4513 18.41 14ZM11.64 8.00002C10.8489 8.00002 10.0755 8.23461 9.41774 8.67414C8.75994 9.11366 8.24725 9.73838 7.9445 10.4693C7.64175 11.2002 7.56254 12.0045 7.71688 12.7804C7.87122 13.5563 8.25218 14.269 8.81159 14.8284C9.371 15.3879 10.0837 15.7688 10.8597 15.9232C11.6356 16.0775 12.4398 15.9983 13.1708 15.6955C13.9017 15.3928 14.5264 14.8801 14.9659 14.2223C15.4054 13.5645 15.64 12.7911 15.64 12C15.64 10.9392 15.2186 9.92174 14.4684 9.17159C13.7183 8.42144 12.7009 8.00002 11.64 8.00002ZM11.64 14C11.2445 14 10.8578 13.8827 10.5289 13.663C10.2 13.4432 9.94363 13.1308 9.79226 12.7654C9.64088 12.3999 9.60128 11.9978 9.67845 11.6098C9.75562 11.2219 9.9461 10.8655 10.2258 10.5858C10.5055 10.3061 10.8619 10.1156 11.2498 10.0384C11.6378 9.96128 12.0399 10.0009 12.4054 10.1523C12.7708 10.3036 13.0832 10.56 13.303 10.8889C13.5227 11.2178 13.64 11.6045 13.64 12C13.64 12.5304 13.4293 13.0392 13.0542 13.4142C12.6792 13.7893 12.1705 14 11.64 14Z"
        fill="white"
      />
    </svg>
  );
};

export default SettingIcon;
