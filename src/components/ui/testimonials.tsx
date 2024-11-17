import React from "react";
import Container from "./container";

export default function Testimonials() {
  return (
    <div className="text-gray-600 a:text-gray-300" id="testimonials">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 a:text-white md:text-4xl">
            Testimonials
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[
            {
              name: "Daniella Doe",
              role: "Mobile dev",
              imgSrc: "./avatars/pic4.jpg",
              testimonial:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur laborum cum, a suscipit, ratione ea totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
              name: "Jane Doe",
              role: "Marketing",
              imgSrc: "./avatars/pic5.jpg",
              testimonial:
                "Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
              name: "Yanick Doe",
              role: "Developer",
              imgSrc: "./avatars/pic3.jpg",
              testimonial:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
              name: "Jane Doe",
              role: "Mobile dev",
              imgSrc: "./avatars/pic4.jpg",
              testimonial:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
              name: "Andy Doe",
              role: "Manager",
              imgSrc: "./avatars/pic5.jpg",
              testimonial:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
            {
              name: "Yanndy Doe",
              role: "Mobile dev",
              imgSrc: "./avatars/pic2.jpg",
              testimonial:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white a:bg-gray-800 a:border-gray-700 shadow-2xl shadow-gray-600/10 a:shadow-none"
            >
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={item.imgSrc}
                  alt={`${item.name} avatar`}
                  width="400"
                  height="400"
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 a:text-white">
                    {item.name}
                  </h6>
                  <p className="text-sm text-gray-500 a:text-gray-300">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">{item.testimonial}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
