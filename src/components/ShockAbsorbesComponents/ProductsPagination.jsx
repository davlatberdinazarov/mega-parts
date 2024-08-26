import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const featured = [
  { id: 1, length: 5, unavailable: false },
  { id: 2, length: 10, unavailable: false },
  { id: 3, length: 15, unavailable: false },
];

export function PaginationDemo({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
  setItemsPerPage,
}) {
  const [selectedFeatured, setSelectedFeatured] = useState(featured[1]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  

  return (
    <div className="flex flex-wrap items-center sm:justify-center gap-4 h-full select-none">
      <div className="hidden sm:flex h-full items-center justify-between bg-white p-2 border-2 rounded-md">
        <h1>Show</h1>
        <div className="z-10 select-none">
          <Listbox value={selectedFeatured} onChange={setSelectedFeatured}>
          <Listbox.Button
            onClick={() => setItemsPerPage(selectedFeatured.length)}
            className="p-1 flex justify-around items-center gap-1"
          >
            {selectedFeatured.length} <FaChevronDown />
          </Listbox.Button>
            <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
              {featured.map((featured) => (
                <Listbox.Option
                  key={featured.id}
                  value={featured}
                  disabled={featured.unavailable}
                >
                  {featured.length}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
      <Pagination className=" sm:w-auto bg-white h-[40px] p-2 border-2 rounded-md select-none">
        <PaginationContent>
          <PaginationItem className="border-r-2 rounded-md">
            <PaginationPrevious
              onClick={() => { currentPage > 1 ? onPageChange(currentPage - 1) : onPageChange(1)}}
            />
          </PaginationItem>

          {pages.map((page, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                className={`${
                  currentPage === page ? " bg-[#0A74FF] text-white" : ""
                } border-r-2 rounded-md`}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => { currentPage == totalPages ? onPageChange(currentPage) : onPageChange(currentPage + 1)}}
            />
          </PaginationItem> 
        </PaginationContent>
      </Pagination>
    </div>
  );
}