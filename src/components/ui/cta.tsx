import React from "react";
import Container from "./container";

import FormA from "./formA";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./alert-dialog";

export default function Cta() {
  return (
    <div>
      <Container>
        <div className="relative">
          {/* Avatar Section */}
          <div className="flex items-center justify-center -space-x-2">
            {featuresImages.map((src, index) => (
              <img
                key={index}
                loading="lazy"
                width="200"
                height="200"
                src={src}
                alt={`member photo ${index + 1}`}
                className={`rounded-full object-cover ${
                  index === 2
                    ? "z-10 h-16 w-16"
                    : index === 1 || index === 3
                    ? "h-12 w-12"
                    : "h-8 w-8"
                }`}
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12 text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Express Entry
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find out what it takes to be eligible for Canadian immigration and
              begin your clear path to Canada.
            </p>

            {/* CTA Buttons */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <div className="flex flex-wrap justify-center gap-6">
                  <a
                    href="#"
                    className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-base font-semibold text-white dark:text-dark">
                      Get your Free Assessment Done
                    </span>
                  </a>
                </div>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-white text-black min-w-max max-w-max px-0 py-0">
                <FormA />
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </Container>
    </div>
  );
}

const featuresImages = [
  "avatars/pic1.jpg",
  "avatars/pic2.jpg",
  "avatars/pic3.jpg",
  "avatars/pic4.jpg",
  "avatars/pic5.jpg",
];
