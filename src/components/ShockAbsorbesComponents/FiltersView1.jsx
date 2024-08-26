

import ProductItems1 from "./ProductItems1";
import { useState } from "react";
import { PaginationDemo } from "./ProductsPagination";
import ProductItems2 from "./ProductItems2";
import data from "../../data/offers.json"



export default function FiltersView1({ activeFilterBtn }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [filteredData1, setFilteredData1] = useState(data);

  // Calculate the index of the first and last items to display on the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = filteredData1.slice(firstIndex, lastIndex);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {!activeFilterBtn ? (
        <div className="w-full h-full flex flex-col gap-1 pb-3">
          {currentItems.map((element, index) => (
            <div key={element.id}>
              <ProductItems1 element={element} index={index} />
            </div>
          ))}

          <div className="w-full flex justify-end gap-4">
            <PaginationDemo
              setItemsPerPage={setItemsPerPage}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredData1.length}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="grid sm:grid-cols-3 grid-cols-2 my-4 gap-3 md:gap-5 h-full">
            {currentItems.map((element, index) => {
              return (
                <div index={element.id} >
                  <ProductItems2 element={element}/>
                </div>
              )
            })}

          </div>
            <div className="w-full flex justify-end gap-4">
              <PaginationDemo
                setItemsPerPage={setItemsPerPage}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredData1.length}
                onPageChange={handlePageChange}
              />
            </div>
        </div>
      )}
    </div>
  );
}
