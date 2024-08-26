import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { Link } from "react-router-dom";
  
  import { Checkbox } from "@material-tailwind/react";
  
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    );
  }
  

export default function AccardionFilter3({
    data,
    filteredData,
    addFilterData,
    removeFilterData
  }) {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader className="text-md" onClick={() => handleOpen(1)}>
                  Other products
                </AccordionHeader>
                <AccordionBody className="flex flex-col text-base">
                {data.map((otherProducts, index) => {
                      const isChecked = filteredData.includes(
                        otherProducts.name.otherProducts
                      );

                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-2 select-none"
                          onClick={(event) => {
                            event.stopPropagation(); // Prevent event from bubbling up
                            if (isChecked) {
                              removeFilterData(
                                otherProducts.name.otherProducts
                              );
                            } else {
                              addFilterData(otherProducts.name.otherProducts);
                            }
                          }}
                        >
                          <Checkbox
                            className="w-4 h-4 checked:bg-plum"
                            id={otherProducts.name.otherProducts}
                            checked={isChecked}
                            readOnly
                          />
                          <label
                            htmlFor={otherProducts.name.otherProducts}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {otherProducts.name.otherProducts}
                          </label>
                        </div>
                      );
                    })}
                    <Link to="#" className=" text-indigo-500">
                      Sea all
                    </Link>
                </AccordionBody>
              </Accordion>
  )
}
