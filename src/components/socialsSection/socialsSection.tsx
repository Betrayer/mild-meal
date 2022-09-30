import React, { FC } from "react";

import "./socialsSection.scss";

const SocialsSection: FC = () => {
  return (
    <ul className="socials">
      <li className="socials__facebook">
        <a className="facebook" href="#"></a>
      </li>
      <li className="socials__instagram">
        <a className="instagram" href="#"></a>
      </li>
      <li className="socials__youtube">
        <a className="youtube" href="#"></a>
      </li>
      <li className="socials__twitter">
        <a className="twitter" href="#"></a>
      </li>
    </ul>
  );
};

export default SocialsSection;
