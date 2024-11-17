import React from "react";
import PropTypes from "prop-types";

export default function Title({ heading, subtext, level, className }) {
  const HeadingTag = level; // Dynamically set the heading level (h1, h2, etc.)

  return (
    <div className="text-center">
      <HeadingTag
        className={`text-gray-900 dark:text-white  ${className} font-bold`}
      >
        {heading}
      </HeadingTag>
      {subtext && (
        <div className="mt-8 text-gray-700 dark:text-gray-300">{subtext}</div>
      )}
    </div>
  );
}

Title.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired, // Accepts plain text or JSX
  subtext: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // Optional subtext, accepts plain text or JSX
  level: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired, // Heading level, required
  className: PropTypes.string, // Additional custom class names
};

Title.defaultProps = {
  subtext: null,
  className: "", // Default to no subtext
};
