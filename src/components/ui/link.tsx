import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";

export default function LinkButton({ href, variant, className, children }) {
  // Define styles for different variants
  const baseStyles =
    "relative flex h-11 w-full items-center justify-center px-6 sm:w-max before:absolute before:inset-0 before:rounded-full before:transition-transform before:duration-300 hover:before:scale-105 active:before:scale-95";
  const variants = {
    primary: "before:bg-primary text-white font-semibold",
    plain: "block md:px-4 transition hover:text-primary",
    light: "text-gray-600 hover:text-primary font-light text-sm ",
    secondary:
      " font-semibold before:border  before:border-transparent before:bg-primary/10 before:bg-gradient-to-b a:before:border-gray-700 a:before:bg-gray-800 text-primary a:text-white",
  };

  const variantStyles = variants[variant] || "";

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles} ${className}`}>
      <span className="relative text-base ">{children}</span>
    </Link>
  );
}

LinkButton.propTypes = {
  href: PropTypes.string.isRequired, // URL to navigate to
  variant: PropTypes.oneOf(["primary", "secondary", "plain", "light"]), // Button style variant
  className: PropTypes.string, // Optional additional classes
  children: PropTypes.node.isRequired, // Content inside the button
};

LinkButton.defaultProps = {
  variant: "primary", // Default to primary variant
  className: "",
};
