"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import { CarModels } from "../api/data/CarModelList";
import { CarLists } from "../api/data/CarList";

export default function Car() {
  const modalRef = useRef(null);

  const showModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <div className="lg:px-48 md:px-24 px-8 lg:py-36 py-28">
        <section className="heading">
          <h1 className="text-4xl font-bold mb-8">All Cars</h1>
        </section>

        <section className="content">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 relative md:gap-8 gap-4 min-h-screen">
            <div className="md:sticky md:top-32 block h-max z-10">
              <div className="badge bg-orange-600 border-none text-white py-3 mb-8">
                {CarLists.length} Cars
              </div>
              <div className="md:block flex justify-between items-center md:mb-0 mb-4">
                <h1 className="md:mb-2 mb-0">Car type</h1>
                <div className="form-control md:flex hidden flex-wrap gap-4">
                  {CarModels.map((item, index) => (
                    <label
                      key={index}
                      className="label cursor-pointer flex items-center gap-4 justify-normal"
                    >
                      <input
                        type="checkbox"
                        className="checkbox border-gray-500 [--chkbg:theme(colors.orange.600)] [--chkfg:white] checked:border-orange-600"
                      />
                      <span>{item.model}</span>
                    </label>
                  ))}
                </div>
                <div className="md:hidden sticky bottom-0 h-max">
                  <button
                    onClick={showModal}
                    className="btn rounded rounded-br-3xl bg-orange-600 hover:bg-orange-700 text-white border-none shadow-lg px-8"
                  >
                    Filter
                  </button>
                </div>
              </div>
              <dialog ref={modalRef} className="modal">
                <div className="modal-box bg-white">
                  <h3 className="font-bold text-lg">Filter</h3>
                  <p className="py-4">
                    {CarModels.map((item, index) => (
                      <label
                        key={index}
                        className="label cursor-pointer flex items-center gap-4 justify-normal"
                      >
                        <input
                          type="checkbox"
                          className="checkbox border-gray-500 [--chkbg:theme(colors.orange.600)] [--chkfg:white] checked:border-orange-600"
                        />
                        <span>{item.model}</span>
                      </label>
                    ))}
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      <button
                        className="btn btn-outline border-orange-600 text-orange-600 mr-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        className="btn bg-orange-600 border-none text-white"
                        onClick={closeModal}
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>

            <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {CarLists.map((item, index) => (
                <a
                  href={item.src}
                  key={index}
                  className="card w-full rounded-xl z-0"
                >
                  <figure className="rounded-xl rounded-br-[3.5rem]">
                    <img
                      src="https://media.cdn-jaguarlandrover.com/api/v2/images/55880/w/680.jpg"
                      className="w-full min-h-40 h-60 object-cover object-center transition duration-300 hover:scale-125"
                      alt={item.model}
                    />
                  </figure>
                  <div className="card-body px-0">
                    <small>{item.mileage}</small>
                    <h2 className="card-title text-orange-600">{item.model}</h2>
                    <p>{item.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
