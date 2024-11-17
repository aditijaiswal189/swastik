import React from "react";
import Container from "./container";
import Title from "./title";

export default function Blog() {
  return (
    <div>
      <div id="blog">
        <Container>
          <div className="mb-12 space-y-2 text-center">
            <Title
              heading="Latest News"
              subtext=" Quam hic dolore cumque voluptate rerum beatae et quae, tempore
              sunt, debitis dolorum officia aliquid explicabo? Excepturi,
              voluptate?"
              level="h1"
              className="text-4xl"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 ">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info ">Read more</span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100  bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 ">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 ">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info ">Read more</span>
                </a>
              </div>
            </div>
            <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100   bg-opacity-50 shadow-2xl shadow-gray-600/10">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 relative">
                <h3 className="text-2xl font-semibold text-gray-800 ">
                  De fuga fugiat lorem ispum laboriosam expedita.
                </h3>
                <p className="mt-6 mb-8 text-gray-600 ">
                  Voluptates harum aliquam totam, doloribus eum impedit atque!
                  Temporibus...
                </p>
                <a className="inline-block" href="#">
                  <span className="text-info ">Read more</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
