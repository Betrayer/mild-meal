import React, { FC } from "react";
import "./greetingSection.scss";

const GreetingSection: FC = () => {
  return (
    <section className="greeting-section">
      <div className="greeting-section__text">
        <p>
          Pellentesque ac iaculis nisl. Nulla a justo ac risus sagittis rutrum.
          Aenean sollicitudin venenatis ligula, a rhoncus sapien.
        </p>
        <p>
          bibendum sed. Mauris urna ante, fringilla vitae tempor non, auctor
          quis lorem. Aenean quis posuere leo. Nulla vel ultrices dolor. Vivamus
          ut egestas ipsum. Sed sodales sed rid facilisis.
        </p>
        <p>
          porta in massa atoled iaculis. Quisqur. u malesuada velit, ac iaculis
          leo. Donec viverra libero at ante luctus eleifend. Fusce. fer.
        </p>
      </div>
      <ul className="greeting-section__socials">
        <li className="greeting-section__socials__facebook">
          <a className="facebook" href="https://www.google.com.ua/"></a>
        </li>
        <li className="greeting-section__socials__instagram">
          <a className="instagram" href="https://www.google.com.ua/"></a>
        </li>
        <li className="greeting-section__socials__youtube">
          <a className="youtube" href="https://www.google.com.ua/"></a>
        </li>
        <li className="greeting-section__socials__twitter">
          <a className="twitter" href="https://www.google.com.ua/"></a>
        </li>
      </ul>
    </section>
  );
};

export default GreetingSection;
