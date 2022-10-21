import React, { FC } from "react";
import TaglistWrapper from "./taglistWrapper/taglistWrapper";
import "./taglist.scss";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

interface TaglistProps {
  inputIsVisible: boolean;
  handleTagsOpeningButton: (e: React.FormEvent) => void;
}

const Taglist: FC<TaglistProps> = ({
  inputIsVisible,
  handleTagsOpeningButton,
}) => {
  const currentThemeColor = useSelector(
    (state: RootState) => state.global.themeColor
  );

  return (
    <div className={`taglist ${currentThemeColor}`}>
      {window.innerWidth >= 768 ? (
        inputIsVisible ? (
          <button
            className="taglist-button"
            onClick={handleTagsOpeningButton}
          ></button>
        ) : (
          <TaglistWrapper />
        )
      ) : (
        <>
          <button className="taglist-button" onClick={handleTagsOpeningButton}>
            <label>&#9660;</label>search by categories
          </button>
          <TaglistWrapper />
        </>
      )}
    </div>
  );
};

export default Taglist;
