import React, { Dispatch, FC, SetStateAction } from "react";

import "./nextPageButton.scss";

interface NextPageButtonProps {
  sliceParams: { from: number; to: number };
  setSliceParams: Dispatch<SetStateAction<{ from: number; to: number }>>;
  sliceHelper: number;
}

const NextPageButton: FC<NextPageButtonProps> = ({
  sliceParams,
  setSliceParams,
  sliceHelper,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSliceParams({
      from: sliceParams.from + sliceHelper,
      to: sliceParams.to + sliceHelper,
    });
  };

  return (
    <div className="next-page-button" onClick={handleClick}>
      <div className="next-page-button__upper-part" />
      <span className="next-page-button__lower-part">show next page</span>
    </div>
  );
};

export default NextPageButton;
