/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import HeroHome from "@/app/assets/img/Hero_home.png";
import { HomeMenu } from "../api/data/HomeMenuList";
import { NewsList } from "../api/data/NewsList";
import { CarModels } from "../api/data/CarModelList";
import { FAQ } from "../api/data/FaqList";
import ButtonTheme from "../components/ButtonTheme";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div>
      <div className="w-full h-screen min-h-screen relative">
        <Image
          src={HeroHome}
          width={0}
          height={0}
          alt="Hero Image"
          className="object-cover object-center h-screen min-h-screen -z-10"
        />
        <div
          className="absolute inset-0 flex items-center justify-start lg:px-48 md:px-36 px-8"
          data-aos="fade-up"
        >
          <div className="text-white animate-slidein">
            <h1 className="text-6xl font-bold mb-2">Moments of joy.</h1>
            <p className="text-xl">Choose your deal & own your joy!</p>
            <div className="w-full flex justify-start mt-6">
              <ButtonTheme text="View Cars" redirectTo="/cars" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-48 md:px-24 px-8 lg:py-24 py-12">
        <section className="features lg:mb-36 mb-24">
          <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
            Are you looking for this ?
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-8 md:gap-4 gap-4 md:mb-7 mb-4">
            <a
              href="/car"
              data-aos="fade-up"
              className="card rounded-xl rounded-br-[3.5rem] relative image-full transition-all hover:shadow-xl md:col-span-2 col-span-1 h-96"
            >
              <figure>
                <img
                  src="https://www.honda.co.th/uploads/car_models/highlight/1723354960_660.jpg"
                  className="w-full md:h-40 h-40 object-cover object-center"
                  alt="Car Image"
                />
              </figure>
              <div className="card-body">
                <div className="absolute bottom-6 text-white mt-8">
                  <p className="mb-2">See our best Seller</p>
                  <h2 className="card-title text-2xl mb-4">
                    We provide you what is best from our stocks
                  </h2>
                  <ButtonTheme text="Learn more" redirectTo="/cars" />
                </div>
              </div>
            </a>
            <a
              href="/car"
              data-aos="fade-up"
              className="card rounded-xl rounded-br-[3.5rem] relative image-full transition-all hover:shadow-xl h-96"
            >
              <figure>
                <img
                  src="https://cf.autodeft2.pw/uploads/images/2015/Scoop/Esp/mercedes-ESP%20(5).jpg"
                  className="w-full md:h-40 h-40 object-cover object-bottom"
                  alt="Car Image"
                />
              </figure>
              <div className="card-body">
                <div className=" absolute text-white bottom-6 mt-8">
                  <p className="mb-2">New arrival</p>
                  <h2 className="card-title text-2xl mb-4">
                    We provide you what is best from our customer
                  </h2>
                  <ButtonTheme text="Learn more" redirectTo="/cars" />
                </div>
              </div>
            </a>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-8 md:gap-4 gap-4">
            {HomeMenu.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="card rounded-xl rounded-br-[3.5rem] relative image-full transition-all hover:shadow-xl md:h-64 h-96"
                data-aos="fade-up"
              >
                <figure>
                  <img
                    src={item.src}
                    className="w-full lg:h-40 md:h-64 h-96 object-cover object-bottom"
                    alt="Car Image"
                  />
                </figure>
                <div className="card-body">
                  <div className=" absolute bottom-6 text-white mt-8">
                    <p className="mb-2">{item.title}</p>
                    <h2 className="card-title text-2xl w-3/4 mb-4">
                      {item.desc}
                    </h2>

                    <ButtonTheme text="Learn more" redirectTo="/cars" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="cars lg:mb-24 mb-12">
          <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
            Find your car
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-8 md:gap-6">
            {CarModels.map((item, index) => (
              <div
                className="card w-full rounded-xl bg-slate-50 shadow-sm overflow-hidden relative"
                data-aos="fade-up"
                key={index}
              >
                <div className="card-body p-6">
                  <p className="text-sm text-gray-500 mb-2">Discover a model</p>
                  <h2 className="card-title text-2xl font-semibold mb-4">
                    {item.model}
                  </h2>
                  <div className="absolute bottom-[-1.5rem] right-0 md:right-0 lg:right-5">
                    <img
                      src={item.src}
                      className="w-52 md:w-40 lg:w-52 object-contain opacity-20"
                      alt={`${item.model}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="cars relative flex items-center mb-12 w-full h-[40rem] backdrop-brightness-50 bg-[url('https://wallpapercat.com/w/full/3/b/a/738966-3840x2160-desktop-4k-highway-background-image.jpg')]">
        <div className="lg:px-48 md:px-24 px-8">
          <div
            className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-8 items-center"
            data-aos="fade-up"
          >
            <div className="text-white">
              <h1 className="text-6xl font-bold mb-2">Get your car</h1>
              <p className="w-3/4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                maiores nesciunt blanditiis, quod iure nisi voluptate debitis
                facilis? Suscipit harum explicabo consequatur eos totam alias
                reprehenderit, iste repudiandae expedita fuga?
              </p>
              <ButtonTheme text="Explore" redirectTo="/cars" />
            </div>
            <div>
              <img
                src="https://i.pinimg.com/originals/95/52/93/95529322a24345160efef4223347dc63.jpg"
                className="w-full rounded-xl rounded-br-[5rem] shadow-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div className="lg:px-48 md:px-24 px-8 lg:py-24 py-12">
        <section className="news lg:mb-36 mb-24">
          <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
            News
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-8 gap-4 grid-cols-1">
            {NewsList.map((item, index) => (
              <a
                href={item.src}
                key={index}
                className="card w-full rounded-xl"
                data-aos="fade-up"
              >
                <figure className="rounded-xl rounded-br-[3.5rem]">
                  <img
                    src={item.src}
                    className="w-full min-h-40 h-60 object-cover object-center transition duration-300 hover:scale-125"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body px-0">
                  <small>{item.date}</small>
                  <h2 className="card-title text-orange-600">{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="QA">
          <h1
            className="text-4xl font-bold mb-8 text-center"
            data-aos="fade-up"
          >
            FAQ
          </h1>
          <div className="grid gap-4">
            {FAQ.map((item, index) => (
              <div
                tabIndex={0}
                data-aos="fade-up"
                key={index}
                className="collapse collapse-plus border-gray-300 border"
              >
                <div className="collapse-title text-xl font-medium">
                  {item.title}
                </div>
                <div className="collapse-content">
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
