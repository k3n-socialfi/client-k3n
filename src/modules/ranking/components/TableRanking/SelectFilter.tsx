import { useState, useRef, useEffect, ReactNode } from "react";
import SearchBar from "./SearchBar";
import { IconChevronDown } from "@/assets/icons";
import Image from "next/image";

interface ISelectFilter {
  title?: string;
  placeHolder: string;
  options: { title: string; value?: any; icon?: any }[];
  onUpdateValue: (value: string) => void;
  reset: boolean;
  search?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const SelectFilter = ({
  title,
  placeHolder,
  options,
  onUpdateValue,
  reset,
  search,
  startIcon,
  endIcon = <IconChevronDown />,
}: ISelectFilter) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const onSelectItem = (value: string) => {
    setSelected(value);
    onUpdateValue(value);
    setActive(false);
  };

  useEffect(() => {
    if (reset) {
      setSelected("");
    }
  }, [reset]);

  return (
    <div className="w-full" ref={wrapperRef}>
      <p className="mb-2 text-base font-bold leading-[24px] text-bgray-900 dark:text-white">
        {title}
      </p>
      <div className="relative h-14 w-full">
        <button
          aria-label="none"
          onClick={() => setActive(!active)}
          type="button"
          className="relative flex h-full w-full items-center justify-between rounded-lg bg-bgray-100 px-4 dark:bg-darkblack-500"
        >
          {startIcon && <span>{startIcon}</span>}

          <span className="text-base text-bgray-500">
            {selected
              ? options?.find((option) => option.value === selected)?.title
              : placeHolder}
          </span>

          {endIcon && <span>{endIcon}</span>}
        </button>
        <div
          id="province-filter"
          style={{ display: active ? "block" : "none" }}
          className="absolute right-0   top-14 z-10 hidden w-full overflow-hidden rounded-lg bg-white shadow-lg dark:bg-darkblack-500"
        >
          {search && <SearchBar ref={searchRef} />}

          <ul className="max-h-96 overflow-y-scroll">
            {options?.map((option) => (
              <li
                key={option.value}
                onClick={() => onSelectItem(option.value)}
                className={`flex gap-2 cursor-pointer px-5 py-2 text-sm font-semibold text-white hover:bg-primary ${
                  option.value === selected ? "bg-primary" : ""
                }`}
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={`${option.value} icon`}
                    width={20}
                    height={20}
                  />
                )}
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectFilter;
