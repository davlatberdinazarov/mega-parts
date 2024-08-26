import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
  
  export function VerticalTabs() {
    const data = [
      {
        label: "Automobiles",
        value: "html",
        linkName: "Akkumlyatorlar",
        links: ["Delkor", "Multu", "Bars", "Kainar", "Akom"],
      },
      {
        label: "Telephone",
        value: "react",
        linkName: "Telefonlar",
        links: ["A12", "Iphone 12", "Iphone 14 Pro", "Samsung S24", "Redmi Pro"],
      },
      {
        label: "Planshetlar",
        value: "vue",
        linkName: "Planshetlar",
        links: ["I PAD PRO", "Samsung X", "Galaxy Surface", "Xiaomi plus", "Redmi Pro"],
      },
      {
        label: "Noutbuklar",
        value: "angular",
        linkName: "Planshetlar",
        links: ["Macbook Pro 2020", "Macbook Air 2023", "Galaxy Fold", "Hp Victus", "Acer"],
      },
      {
        label: "Console",
        value: "svelte",
        linkName: "O'yin Gatjetlari",
        links: ["Play Station 5", "X box 3", "PS4"],
      },
      {
        label: "Heavy Cars",
        value: "11",
        linkName: "Akkumlyatorlar",
        links: ["Delkor", "Multu", "Bars", "Kainar", "Akom"],
      },
      {
        label: "Smartphones",
        value: "12",
        linkName: "Telefonlar",
        links: ["A12", "Iphone 12", "Iphone 14 Pro", "Samsung S24", "Redmi Pro"],
      },
      {
        label: "Tabs",
        value: "13",
        linkName: "Planshetlar",
        links: ["I PAD PRO", "Samsung X", "Galaxy Surface", "Xiaomi plus", "Redmi Pro"],
      },
      {
        label: "Macs",
        value: "14",
        linkName: "Planshetlar",
        links: ["Macbook Pro 2020", "Macbook Air 2023", "Galaxy Fold", "Hp Victus", "Acer"],
      },
      {
        label: "Gatjets",
        value: "15",
        linkName: "O'yin Gatjetlari",
        links: ["Play Station 5", "X box 3", "PS4"],
      },
      {
        label: "Auto Parts",
        value: "16",
        linkName: "Akkumlyatorlar",
        links: ["Delkor", "Multu", "Bars", "Kainar", "Akom"],
      },
      {
        label: "Custom Teqnics",
        value: "18",
        linkName: "Telefonlar",
        links: ["A12", "Iphone 12", "Iphone 14 Pro", "Samsung S24", "Redmi Pro"],
      },
      {
        label: "Custom covers",
        value: "19",
        linkName: "Planshetlar",
        links: ["I PAD PRO", "Samsung X", "Galaxy Surface", "Xiaomi plus", "Redmi Pro"],
      },
      {
        label: "Wi fi",
        value: "20",
        linkName: "Planshetlar",
        links: ["Macbook Pro 2020", "Macbook Air 2023", "Galaxy Fold", "Hp Victus", "Acer"],
      },
      {
        label: "Tyres",
        value: "21",
        linkName: "O'yin Gatjetlari",
        links: ["Play Station 5", "X box 3", "PS4"],
      },
    ];
  
    return (
      <Tabs value="html" orientation="vertical">
        <TabsHeader className="w-60 h-96 overflow-y-scroll overflow-x-hidden">
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody >
          {data.map(({ value, linkName, links }) => (
            <TabPanel key={value} value={value} className="py-0 flex gap-12 flex-wrap">
              <div className="flex flex-wrap  gap-8 sm:gap-16 sm:justify-between ">
                {/* About */}
                <div className="">
                  <h3 className=" font-medium mb-3">{linkName}</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    {links &&
                      links.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/products/${item}`}
                            className="text-[#8B96A5] hover:text-gray-700"
                          >
                            {item}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap  gap-8 sm:gap-16 sm:justify-between ">
                {/* About */}
                <div className="">
                  <h3 className=" font-medium mb-3">{linkName}</h3>
                  <div className="text-[#8B96A5] flex flex-col gap-1">
                    {links &&
                      links.map((item, index) => {
                        return (
                          <Link
                            key={index}
                            to={`/products/${item}`}
                            className="text-[#8B96A5]"
                          >
                            {item}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }