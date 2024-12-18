import React from "react";
import Container from "./container";
import LinkButton from "./link";
import { Link } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="z-10 w-full absolute">
          <Container>
            <div className="flex flex-wrap items-center justify-between py-2 px-8 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <LinkButton
                  href="#"
                  variant="plain"
                  className="flex justify-between"
                >
                  <div
                    aria-hidden="true"
                    className="flex space-x-1 justify-center items-center"
                  >
                    {/* <div className="h-4 w-4 rounded-full bg-gray-900 a:bg-white"></div> */}
                    <div className="h-6 w-2 bg-primary"></div>
                    <span className="text-xl font-bold text-gray-900 a:text-white pl-2">
                      Swastik Immigrations
                    </span>
                  </div>
                </LinkButton>

                <div className="relative flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="hamburger"
                    id="hamburger"
                    aria-controls="navigation"
                    aria-expanded="false"
                    className="relative p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-sky-900 a:bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 a:bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden a:bg-gray-900/70"
              ></div>
              <div
                id="navigation"
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            a:shadow-none a:bg-gray-800 a:border-gray-700"
              >
                <div className="text-gray-600 a:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                    <li>
                      <LinkButton href="#home" variant="plain">
                        Home
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton href="#services" variant="plain">
                        Services
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton
                        href="#about"
                        variant="plain"
                        className="text-sm"
                      >
                        About Us
                      </LinkButton>
                    </li>
                    <li>
                      <LinkButton href="/news" variant="plain">
                        News
                      </LinkButton>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 lg:mt-0">
                  <LinkButton href="#" variant="secondary">
                    Get started
                  </LinkButton>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
}
