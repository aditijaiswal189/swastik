import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Container from "./container";
import LinkButton from "./link";

export default function Footer() {
  return (
    <Container gradientClassName="h-max" secondaryGradientClassName="h-max">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 ">
        <LinkButton href="#" variant="plain" className="flex justify-between">
          <div
            aria-hidden="true"
            className="flex space-x-1 justify-center items-center"
          >
            <div className="h-6 w-2 bg-primary"></div>
            <span className="text-xl font-bold text-gray-900 dark:text-white pl-2">
              Swastik Immigrations
            </span>
          </div>
        </LinkButton>

        <div className="flex items-center gap-0">
          <LinkButton href="#" variant="light" className="font-light">
            About us
          </LinkButton>
          <LinkButton href="#" variant="light" className="font-light">
            Our services
          </LinkButton>
          <LinkButton href="#" variant="light" className="font-light">
            Testimonials
          </LinkButton>

          <LinkButton href="#" variant="light" className="font-light">
            News
          </LinkButton>
          <LinkButton href="#" variant="light" className="font-light">
            Contact Us
          </LinkButton>
        </div>
      </nav>
      <div className=" flex justify-between items-center w-full my-3 mt-3 border-t">
        <div className="container mx-auto text-center text-sm text-gray-500 my-3">
          ©swastikimmigrations 2024, All rights reserved.
        </div>
        {/* <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Twitter className="w-5 h-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Instagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            <Youtube className="w-5 h-5" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div> */}
      </div>
    </Container>
  );
}
