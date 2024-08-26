import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("description");
  const data = [
    {
      label: "Description",
      value: "description",
      desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
      in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Lorem ipsum dolor sit amet, consectetur
      adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
      label: "Reviews",
      value: "reviews",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Shipping",
      value: "shipping",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Seller",
      value: "About Seller",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    }
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <div className="md:px-5 px-2">
              <p>
                {desc}
              </p>

              {/* table */}
              <div className="border-[1px] border-[#BDC1C8] my-5 w-full lg:w-2/3">
                <div className="flex ">
                  <div className="w-1/3 flex flex-col gap-3 border-r-[1px] border-[#BDC1C8] text-[#505050] bg-[#EFF2F4]">
                    <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                      Model
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                      Style
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                      Size
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                      Certificate
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-2">
                      Memory
                    </div>
                  </div>
                  <div className="w-2/3 flex flex-col gap-3 text-[#505050]">
                    <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                      #8786867
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                      Classic style
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                      ISO-898921212
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                      34mm x 450mm x 19mm
                    </div>
                    <div className="border-b-[1px] border-[#BDC1C8] pl-3">
                      36GB RAM
                    </div>
                  </div>
                </div>
              </div>
              {/* /table */}
              {/* cheklist */}
              <div className=" mt-6 w-2/3 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#505050]" />
                  <p>Some great feature name here</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#505050]" />
                  <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#505050]" />
                  <p>Duis aute irure dolor in reprehenderit</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[#505050]" />
                  <p>Some great feature name here</p>
                </div>
              </div>
              {/* /cheklist */}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
