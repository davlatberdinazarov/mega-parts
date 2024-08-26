import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
 
const menuItems = [
  {
    title: "FAQ"
  },
  {
    title: "Contact",
  },
  {
    title: "Blog",
  },
];
 
export function HelpDropdown() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-3 text-base font-normal capitalize tracking-normal p-2"
        >
          Help {" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden overflow-visible lg:grid">
        <ul className=" flex flex-col">
          {menuItems.map(({ title, description }) => (
            <a href="#" key={title}>
              <MenuItem>
                  {title}
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}