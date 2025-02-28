import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-4 text-center">
      <p className="text-gray-700">
        Developed with ❤️ by{" "}
        <a
          href="https://twitter.com/segun_damola"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Adeniyi Oluwasegun 
        </a>
      </p>
      <p className="text-gray-700">
        Please consider giving this a star on{" "}
        <a
          href="https://github.com/segun-damola/AI-text-processor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
};

export default Footer;
