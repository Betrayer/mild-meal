import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { themeColor } from "../../../redux/actions/global";
import { RootState } from "../../../redux/rootReducer";
import "./themeChangeButton.scss";

const ThemeChangeButton: FC = () => {
  const handleClick = () => {
    dispatch(themeColor(currentThemeColor === "dark" ? "bright" : "dark"));
  };
  const dispatch = useDispatch();

  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <div
      className={`theme-change-button ${currentThemeColor}`}
      onClick={handleClick}
    >
      <span className="tooltip">Change theme</span>
    </div>
  );
};

export default ThemeChangeButton;
