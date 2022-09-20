import React, { FC, useState } from "react";
import "./themeChangeButton.scss";

const ThemeChangeButton: FC = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const handleClick = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <div
        className={`theme-change-button ${
          darkTheme ? "dark_theme" : "light_theme"
        }`}
        onClick={handleClick}
      >
        <span className="tooltip">Change theme</span>
      </div>
    </>
  );
};

export default ThemeChangeButton;
