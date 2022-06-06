import React from "react";
import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import { phone } from "react-icons-kit/fa/phone";
import { twitter } from "react-icons-kit/fa/twitter";
import { facebook } from "react-icons-kit/fa/facebook";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { instagram } from "react-icons-kit/fa/instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-6  grid-cols-1 px-12 gap-8 bg-slate-100  pt-12">
        <div className="lg:col-span-2 md:col-span-3 col-span-2">
          <div>
            <h5 className="text-xl">Contact Us</h5>
          </div>
          <div className="py-4">
            <span className="flex gap-x-2 items-center ">
              <Icon icon={mapMarker} size={20} />
              <p className="mt-2">Dhaka, BanglaDesh</p>
            </span>
            <span className="flex gap-x-2 items-center ">
              <Icon icon={envelopeO} size={20} />
              <p className="mt-2">Mail Us: mdrifat.mr@gmail.com</p>
            </span>
            <span className="flex gap-x-2 items-center ">
              <Icon icon={phone} size={20} />
              <p className="mt-2">Phone: 0123456789</p>
            </span>
            <span>
              <img
                className="mt-8"
                src="https://i.ibb.co/SJmt8qz/1-1.webp"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-1">
          <div>
            <h5 className="text-xl">Information</h5>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Site Map
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Specials
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Jobs
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Delivery Information
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Order History
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div>
            <h5 className="text-xl">My Account</h5>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              My Account
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Checkout
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Login
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Address
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Order Status
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Site Map
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div>
            <h5 className="text-xl">Customer Service</h5>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              My Account
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              New
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Gift Cards
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Return Policy
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Your Orders
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Subway
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <div>
            <h5 className="text-xl">Let Us Help You</h5>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Your Account
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Your Orders
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Shipping
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Amazon Prime
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Replacements
            </Link>
            <Link
              className="hover:text-primary hover:translate-x-3 transition delay-50 duration-300 ease-in-out"
              to=""
            >
              Manage
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4 px-12 bg-slate-200 grid lg:grid-cols-2 grid-cols-1 gap-y-4">
        <span className="flex gap-4 lg:justify-start justify-center ">
          <h5 className="font-semibold">
            {" "}
            &copy;{new Date().getFullYear()} Jantrik Made with by Rifat Hossain
          </h5>
        </span>
        <span className="flex gap-4 lg:justify-end justify-center ">
          <Icon
            className="hover:text-primary transition delay-50 duration-300 ease-in-out cursor-pointer"
            icon={twitter}
            size={20}
          />
          <Icon
            className="hover:text-primary transition delay-50 duration-300 ease-in-out cursor-pointer"
            icon={facebook}
            size={20}
          />
          <Icon
            className="hover:text-primary transition delay-50 duration-300 ease-in-out cursor-pointer"
            icon={linkedin}
            size={20}
          />
          <Icon
            className="hover:text-primary transition delay-50 duration-300 ease-in-out cursor-pointer"
            icon={instagram}
            size={20}
          />
        </span>
      </div>
    </>
  );
};

export default Footer;
