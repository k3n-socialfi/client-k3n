import React, { useCallback } from "react";

interface IPaginationTableProps {
  total: number;
  page: number;
  onChange: (value: number) => void;
}

export default function PaginationTable({
  total,
  page,
  onChange,
}: IPaginationTableProps) {
  const onPrev = useCallback(() => {
    if (page > 0) return;
    onChange(page - 1);
  }, [onChange, page]);

  const onNext = useCallback(() => {
    if (page < total) return;
    onChange(page + 1);
  }, [onChange, page, total]);

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li
          onClick={onPrev}
          className={
            "relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-lg text-surface transition duration-300 hover:bg-primary dark:hover:bg-primary"
          }
        >
          Prev
        </li>
        {Array.from({ length: total }).map((_, index: number) => (
          <li
            key={index}
            onClick={() => onChange(index)}
            className={`${
              index === page && "text-primary"
            } relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-lg text-surface transition duration-300 hover:bg-primary dark:hover:bg-primary`}
          >
            {index + 1}
          </li>
        ))}
        <li
          onClick={onNext}
          className={
            "relative cursor-pointer block rounded bg-transparent px-3 py-1.5 text-lg text-surface transition duration-300 hover:bg-primary dark:hover:bg-primary"
          }
        >
          Next
        </li>
      </ul>
    </nav>
  );
}
