import { Button } from "@/components/ui/button";
import { Checkbox } from "@material-tailwind/react";  
import {
  detailsLoginRegister,
  megapartsLogo,
  mobileDetails,
} from "../assets/images/z-index";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const onSignup = (e) => {
    e.preventDefault();
    if (phoneNumber == "123" && password == "123") {
      navigate("/");
    }
  };
  return (
    <section className=" h-screen w-full flex justify-between select-none">
      <div className="w-full h-full xl:w-2/3 flex justify-center items-center">
        <form
          onSubmit={onSignup}
          className="w-full md:w-3/4 h-full xl:px-12 flex sm:justify-around lg:justify-center flex-col sm:gap-3 "
        >
          {/* Mobile logo */}
          <div className="bg-plum relative rounded h-[250px] sm:h-[330px] w-full mb-2 block lg:hidden">
            <img
              className="w-[210px] p-2 block lg:hidden"
              src={megapartsLogo}
              alt="img"
            />
            <img
              className="mx-auto rounded-lg block lg:hidden relative top-4 w-[90%] h-[220px] sm:h-[310px]"
              src={mobileDetails}
              alt=""
            />
          </div>
          {/* Desktop logo */}
          <div className="px-3 flex flex-col gap-3 mt-3">
            <img
              className="w-[270px] relative lg:block hidden -top-12 right-12"
              src={megapartsLogo}
              alt="img"
            />
            <h1 className="text-xl relative top-2 sm:top-0 sm:static lg:text-2xl font-semibold">
              Register from your email
            </h1>

            <label className=" sm:my-2 text-xl">
              Phone number
              <Input
                className="border-2 h-16 sm:h-[70px] border-b-green-500 "
                type="text"
                placeholder="Enter your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </label>

            <label className="text-xl">
              Username
              <Input
                className="h-16 sm:h-[70px] border-2 border-b-green-500 "
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label className="text-xl">
              Enter your password
              <Input
                className="h-16 sm:h-[70px] border-2 border-b-green-500 "
                type="password"
                placeholder="Enter your password here"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <div className="flex justify-between items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Checkbox className=" checked:bg-plum" id="terms"/>
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me?
                </label>
              </div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Forgot password?
              </label>
            </div>
            <Button className="w-full h-16 py-6 sm:h-[70px] sm:mt-3">
              Register
            </Button>
            <p>
              <span>Already have an account? </span>
              <Link className="text-plum" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="w-full h-full hidden lg:block xl:w-1/2">
        <div className="w-full h-full flex justify-end items-center">
          <img
            className="rounded-lg absolute top-12 right-12 w-[500px] h-[570px] xl:w-[553px] xl:h-[638px] hidden lg:block"
            src={detailsLoginRegister}
            alt=""
          />
          <div className="h-full bg-plum w-2/3"></div>
        </div>
      </div>
    </section>
  );
}
