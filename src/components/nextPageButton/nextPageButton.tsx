import React, { FC } from "react";

import "./nextPageButton.scss";

interface NextPageButtonProps {
  setSliceSecondValue: (value: number) => void;
  sliceSecondValue: number;
  setSliceMainValue: (value: number) => void;
  sliceMainValue: number;
}

const NextPageButton: FC<NextPageButtonProps> = ({
  setSliceMainValue,
  sliceMainValue,
  setSliceSecondValue,
  sliceSecondValue,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSliceMainValue(
      (sliceMainValue +=
        window.innerWidth >= 768 && window.innerWidth < 1024
          ? 8
          : window.innerWidth >= 1024
          ? 11
          : 12)
    );
    setSliceSecondValue(
      (sliceSecondValue +=
        window.innerWidth >= 768 && window.innerWidth < 1024
          ? 8
          : window.innerWidth >= 1024
          ? 11
          : 12)
    );
  };

  return (
    <div className="next-page-button" onClick={handleClick}>
      <div className="next-page-button__upper-part" />
      <span className="next-page-button__lower-part">show next page</span>
    </div>
  );
};

export default NextPageButton;
