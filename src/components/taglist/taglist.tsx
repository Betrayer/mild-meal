import React, { FC } from "react";
import TaglistWrapper from "./taglistWrapper/taglistWrapper";
import "./taglist.scss";

interface TaglistProps {
  inputIsVisible: boolean;
  handleTagsOpeningButton: (e: React.FormEvent) => void;
}

const Taglist: FC<TaglistProps> = ({
  inputIsVisible,
  handleTagsOpeningButton,
}) => {
  return (
    <div className="taglist">
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
