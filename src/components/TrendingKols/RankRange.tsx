import { useCallback, useState } from "react";

export default function RankRange({
  onChange,
}: {
  onChange: (key: string) => void;
}) {
  const [selectedRange, setSeletedRange] = useState<"1D" | "7D" | "30D">("1D");
  const onRangeChange = useCallback(
    (value: "1D" | "7D" | "30D") => {
      setSeletedRange(value);
      onChange(value);
    },
    [onChange],
  );

  const rangeColors = {
    "1D": "bg-blue-500",
    "7D": "bg-green-500",
    "30D": "bg-primary",
  };

  return (
    <div className="flex items-center space-x-2 pr-4">
      <button
        onClick={() => onRangeChange("1D")}
        className={`rounded-lg px-2 py-1.5 text-xs font-bold text-white transition duration-300 ease-in-out hover:opacity-80 ${
          selectedRange === "1D" ? rangeColors["1D"] : "bg-gray-500" // Màu mặc định nếu không được chọn
        } lg:px-4 lg:py-[2px] lg:text-sm border-[1px] border-gray-100/20`}
      >
        1D
      </button>
      <button
        onClick={() => onRangeChange("7D")}
        className={`rounded-lg px-2 py-1.5 text-xs font-bold text-white transition duration-300 ease-in-out hover:opacity-80 ${
          selectedRange === "7D" ? rangeColors["7D"] : "bg-gray-500"
        } lg:px-4 lg:py-[2px] lg:text-sm border-[1px] border-gray-100/20`}
      >
        7D
      </button>
      <button
        onClick={() => onRangeChange("30D")}
        className={`rounded-lg px-2 py-1.5 text-xs font-bold text-white transition duration-300 ease-in-out hover:opacity-80 ${
          selectedRange === "30D" ? rangeColors["30D"] : "bg-gray-500"
        } lg:px-4 lg:py-[2px] lg:text-sm border-[1px] border-gray-100/20`}
      >
        30D
      </button>
    </div>
  );
}
