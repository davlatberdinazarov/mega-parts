import React from "react";
import { bannerRequest } from "@/assets/images/z-index";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { Button } from "../ui/button";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const featured = [
  { id: 1, name: "1", unavailable: false },
  { id: 2, name: "5", unavailable: false },
  { id: 3, name: "15", unavailable: false },
];

export default function RequestSendingBanner() {
  const [selectedFeatured, setSelectedFeatured] = useState(featured[1]);
  return (
    <div className="w-full h-[223px] lg:h-[446px] relative">
      <img className="h-full w-full" src={bannerRequest} alt="banner" />
      <div className="w-full h-full absolute top-0 px-4 sm:px-6 lg:px-10 py-2 sm:py-4 lg:py-8 flex justify-between  rounded-lg">
        {/* content */}
        <div className="w-[440px] text-white">
          <h1 className="text-2xl md:text-3xl md:mb-2 mb-3 lg:my-3 font-semibold">
            An easy way to send requests to all suppliers
          </h1>
          <p className="text-md md:text-lg hidden md:block my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <Button type="submit block lg:hidden" className="w-[160px] text-lg">
            Send inquery
          </Button>
        </div>
        {/* form */}
        <div className="hidden lg:block w-2/5 max-h-[346px]">
          <form className=" bg-white w-full h-full rounded-md p-6 flex flex-col gap-4">
            <h1 className="font-bold text-xl">Send quote to suppliers</h1>
            <Input
              className=" rounded-sm  focus-visible:none"
              type="text"
              placeholder="What item you need?"
            />
            <Textarea
              className=" focus-visible:none"
              placeholder="type something"
            />
            <div className="flex gap-4 items-center">
              <Input
                className="w-1/2 rounded-sm  focus-visible:none"
                type="number"
                placeholder="Quantity"
              />
              <div>
                <div className="h-[40px] flex items-center justify-between bg-white p-2 border-2 rounded-md">
                  <h1>Psc:</h1>
                  <div className="z-30 ">
                    <Listbox value={selectedFeatured} onChange={setSelectedFeatured}>
                      <Listbox.Button className="p-1 flex justify-around items-center gap-1">
                        {selectedFeatured.name} 
                      </Listbox.Button>
                      <Listbox.Options className="absolute W-32 mt-2 text-[16px] rounded-md px-3 bg-white py-2 shadow-lg p-2">
                        {featured.map((featured) => (
                          <Listbox.Option
                            key={featured.id}
                            value={featured}
                            disabled={featured.unavailable}
                          >
                            {featured.name}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Listbox>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Button type="submit" className="w-[160px] text-lg">
              Send inquery
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
