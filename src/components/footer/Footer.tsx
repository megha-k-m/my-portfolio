import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faConnectdevelop,
  faMailchimp,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-2">
      <div className="max-w-6xl mx-auto px-2 flex flex-col items-center justify-center gap-2">
        <div className="text-lg font-semibold text-red-500">
          © Megha's portfolio
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://www.linkedin.com/in/megha-m-731354181/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className=" hover:text-blue-800 transition-colors duration-300"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://github.com/MeghaDM1526"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="hover:text-blue-800 transition-colors duration-300"
              icon={faGithub}
            />{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
