/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import HeroHome from "@/app/assets/img/Hero_home.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { HomeMenu } from "../api/data/HomeMenuList";

export default function Home() {
  return (
    <div>
      <div className="w-full max-h-[40rem] relative">
        <Image
          src={HeroHome}
          width={0}
          height={0}
          alt="Hero Image"
          className="object-cover object-center max-h-[40rem] min-h-96 h-auto -z-10"
        />
        <div className="absolute inset-0 flex items-center justify-start lg:px-48 px-8">
          <div className="text-white">
            <h1 className="text-6xl font-bold mb-2">Moments of joy.</h1>
            <p className="text-xl">Choose your deal & own your joy!</p>
            <div className="w-full flex justify-start mt-4">
              <button className="btn bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg px-8">
                View cars
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:py-24 py-16 lg:px-48 px-8">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-8 md:gap-4 gap-4">
          {HomeMenu.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="card relative bg-base-100 image-full transition-all hover:shadow-xl"
            >
              <figure>
                <img
                  src={item.src}
                  className="w-full lg:h-40 md:h-64 h-40 object-cover object-bottom"
                  alt="Car Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{item.desc}</h2>

                <div className="card-actions absolute bottom-4 flex justify-between items-center mt-8">
                  <p className="text-white">{item.title}</p>
                  <button className="btn btn-ghost hover:bg-transparent text-white p-0">
                    <ArrowRightOutlined />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1"></div>
      </div>
    </div>
  );
}
