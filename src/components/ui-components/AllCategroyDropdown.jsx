import React from "react";
import {  ChevronUpIcon } from "@heroicons/react/24/solid";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
 
export function AllCategoryDropdown() {
  const [openMenu, setOpenMenu] = React.useState(false);
 
  return (
    <Menu
    animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}>
      <MenuHandler>
        <Button className="bg-white h-[35px] flex items-center justify-center rounded-none border-l-[1px] border-blue-800 capitalize text-md font-thin text-dark">Category <IoMdArrowDropdown/> </Button>
      </MenuHandler>
      <MenuList>
        <Link to='/shock-absorbes'>
          <MenuItem>Absorbes</MenuItem>
        </Link>
        <MenuItem>Telefones</MenuItem>
        <Menu
          placement="right-start"
          open={openMenu}
          handler={setOpenMenu}
          allowHover
          offset={15}
        >
          <MenuHandler className="flex items-center justify-between">
            <MenuItem>
              Boshqalar
              <ChevronUpIcon
                strokeWidth={2.5}
                className={`h-3.5 w-3.5 transition-transform ${
                  openMenu ? "rotate-90" : ""
                }`}
              />
            </MenuItem>
          </MenuHandler>
          <MenuList>
            <MenuItem>Mobile Parts</MenuItem>
            <MenuItem>Auto Parts</MenuItem>
            <MenuItem>Technic parts</MenuItem>
          </MenuList>
        </Menu>
        <Link to='/blogs'>
          <MenuItem>Blogs</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
}