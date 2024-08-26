import React, { useContext } from "react";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { TfiBag } from "react-icons/tfi";
import { TbWorld } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

import { Avatar } from "@/assets/images/z-index";
import { Link } from "react-router-dom";
import { OffcanvasContext } from "@/layout/AppLayaut";
import { ShoppingCartContext } from "@/layout/MainLayout";

export function DrawerOffcanvas() {
  const { open, closeDrawer } = useContext(OffcanvasContext);
  const { favoriteData, cartData } = useContext(ShoppingCartContext)

  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className=" fixed left-0 top-0 h-screen bg-[#f7fafc] shadow-2xl select-none"
      >
        <div className="mb-6 flex justify-between bg-[#EFF2F4] p-4">
          <Typography variant="h5" className="">
            <img src={Avatar} alt="" />
            <div className="mt-4 font-thin">
              <Link to="/">Sign in </Link> |{" "}
              <Link to="/register">Register</Link>
            </div>
          </Typography>
          <div className="flex justify-center items-center w-8 h-8 rounded-full bg-slate-300 animate-pulse">
            <IoMdClose className="text-2xl" onClick={closeDrawer} />
          </div>
        </div>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <Link className="flex gap-1 items-center" to="/homepage">
            <ListItem>
              <ListItemPrefix>
                <IoHomeOutline className="text-lg relative " />
              </ListItemPrefix>
              Dashboard
            </ListItem>
          </Link>
          <Link className="flex gap-1 items-center" to="#">
            <ListItem>
              <ListItemPrefix>
                <MdFormatListBulleted className="text-lg relative " />
              </ListItemPrefix>
              Categories
            </ListItem>
          </Link>
          <Link className="flex gap-1 items-center" to="homepage/orders">
            <ListItem>
              <ListItemPrefix>
                <CiHeart className="text-lg relative " />
              </ListItemPrefix>
              Favorites
              <ListItemSuffix>
                <Chip
                  value={favoriteData.length}
                  size="sm"
                  color="green"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Link className="flex gap-1 items-center" to="homepage/mycart">
            <ListItem>
              <ListItemPrefix>
                <TfiBag className="text-lg relative " />
              </ListItemPrefix>
              My cart
              <ListItemSuffix>
                <Chip
                  value={cartData.length}
                  size="sm"
                  color="green"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
        </List>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <ListItem>
            <Link className="flex gap-1 items-center" to="#">
              <ListItemPrefix>
                <TbWorld className="text-lg relative " />
              </ListItemPrefix>
              English
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1 items-center" to="#">
              <ListItemPrefix>
                <TfiHeadphoneAlt className="text-lg relative " />
              </ListItemPrefix>
              Contact us
            </Link>
          </ListItem>
          <ListItem>
            <Link className="flex gap-1 items-center" to="#">
              <ListItemPrefix>
                <HiOutlineBuildingOffice2 className="text-lg relative " />
              </ListItemPrefix>
              About
            </Link>
          </ListItem>
        </List>
        <List className="border-b-[1px] border-[#DEE2E7]">
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            User Agrement
          </ListItem>
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            Partnership
          </ListItem>
          <ListItem>
            <ListItemPrefix> </ListItemPrefix>
            Privicy Policy
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}
