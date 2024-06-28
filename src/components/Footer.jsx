import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-background py-8 px-4 flex flex-col items-center text-center text-gray-600 mt-6 justify-end">
      <p className="mb-4 text-lg text-black">
        All Rights Reserved &#169; Taha Zoabi
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          className="text-gray-600 hover:text-button-hover transition-colors duration-300"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-button-hover transition-colors duration-300"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-button-hover transition-colors duration-300"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
