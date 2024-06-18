import {
  useState,
  useRef,
  useEffect,
  ReactNode,
  useMemo,
  useCallback,
} from "react";
import SearchBar from "./SearchBar";
import { IconChevronDown } from "@/assets/icons";
import Image from "next/image";

interface ISelectFilter {
  title?: string;
  placeHolder: string;
  options: { title: string; value?: any; icon?: any }[];
  onUpdateValue?: (value: string) => void;
  reset?: boolean;
  search?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  multiple?: boolean;
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
  multiple,
}: ISelectFilter) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedArray, setSelectedArray] = useState<string[]>([]);

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

  const onSelectItem = useCallback(
    (value: string) => {
      if (multiple) {
        if (selectedArray.includes(value)) {
          setSelectedArray(selectedArray.filter((item) => item !== value));
        } else {
          setSelectedArray([...selectedArray, value]);
        }
      } else {
        setSelected(value);
        setActive(false);
      }
      onUpdateValue?.(value);
    },
    [multiple, onUpdateValue, selectedArray],
  );

  const isSelected = useCallback(
    (value: string) => {
      if (multiple) {
        if (selectedArray.includes(value)) return true;
      } else {
        if (selected === value) return true;
      }
      return false;
    },
    [multiple, selectedArray, selected],
  );

  useEffect(() => {
    if (reset) {
      setSelected("");
    }
  }, [reset]);

  const selectedContent = useMemo(() => {
    if (multiple) {
      if (selectedArray.length === 0) return placeHolder;
      let content = "";
      selectedArray.forEach((item: string) => {
        if (content.length > 0) content += ", ";
        content += options?.find((option) => option.value === item)?.title;
      });
      return content;
    } else {
      if (!selected) return placeHolder;
      return options?.find((option) => option.value === selected)?.title;
    }
  }, [multiple, options, placeHolder, selected, selectedArray]);

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
          className="relative flex h-full w-full items-center justify-between rounded-lg bg-bgray-100 px-4 dark:bg-[#121212]"
        >
          {startIcon && <span>{startIcon}</span>}

          <span
            className={`text-base  ${
              selected || selectedArray.length > 0
                ? "text-primary"
                : "text-bgray-500"
            }`}
          >
            {selectedContent}
          </span>

          {endIcon && <span>{endIcon}</span>}
        </button>
        <div
          id="province-filter"
          style={{ display: active ? "block" : "none" }}
          className="absolute right-0 top-14 z-10 hidden w-full overflow-hidden rounded-lg border border-[#FFFFFF22] bg-white shadow-lg dark:bg-[#121212]"
        >
          {search && <SearchBar ref={searchRef} />}

          <ul className="max-h-96 overflow-y-scroll">
            {options?.map((option) => (
              <li
                key={option.value}
                onClick={() => onSelectItem(option.value)}
                className={`flex items-center gap-2 cursor-pointer px-5 py-2 text-sm font-semibold text-white hover:bg-primary ${
                  isSelected(option.value) && "bg-primary"
                }`}
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={`${option.value} icon`}
                    width={16}
                    height={16}
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
