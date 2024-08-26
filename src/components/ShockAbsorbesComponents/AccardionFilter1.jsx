import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
  
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
  

export default function AccardionFilter1({ data, filteredData, addFilterData }) {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
      <AccordionHeader className="text-md" onClick={() => handleOpen(1)}>
        Category
      </AccordionHeader>
      <AccordionBody className="flex flex-col text-base gap-4">
        {data.map((category, index) => {
          const isSelected = filteredData.includes(category.name.category);
          return (
            <div
              className={isSelected ? `bg-indigo-50 rounded-md` : null}
              key={index}
              onClick={() => addFilterData(category.name.category)}
            >
              {category.name.category}
            </div>
          );
        })}
        <Link to="#" className=" text-indigo-500">
          Sea all
        </Link>
      </AccordionBody>
    </Accordion>
  );
}
