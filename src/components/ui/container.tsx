import React from "react";
import PropTypes from "prop-types";

export default function Container({
  children,
  className = "",
  gradientClassName = "",
  secondaryGradientClassName = "",
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 relative z-10">
        {children}
      </div>

      {/* Background Gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
      >
        <div
          className={`blur-[126px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700 ${gradientClassName}`}
        ></div>
        <div
          className={`blur-[126px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600 ${secondaryGradientClassName}`}
        ></div>
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // The content inside the container
  className: PropTypes.string, // Additional custom class names
};

Container.defaultProps = {
  className: "", // Default to no additional class
};
