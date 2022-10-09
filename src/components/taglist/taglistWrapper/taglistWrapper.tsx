import React, { FC, useEffect, useRef, useState } from "react";

import "./taglistWrapper.scss";

import { tagsArray } from "../../../assets/variables/taglist";

const TaglistWrapper: FC = () => {
  const taglistRef = useRef(null);
  const [currentTag, setCurrentTag] = useState("");

  useEffect(() => {
    //@ts-ignore
    taglistRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      //@ts-ignore
      taglistRef.current.scrollLeft += e.deltaY / 10;
    });
  }, []);

  const handleTagClick = (e: any) => {
    setCurrentTag(e.currentTarget.getAttribute("value"))
    alert (e.currentTarget.getAttribute("value"));
  };
  return (
    <div ref={taglistRef} className="taglist-wrapper">
      <ul className="taglist-list">
        {tagsArray.map((tag, index) => (
          <li
            key={index}
            value={tag.value}
            className="taglist-list-item"
            onClick={(e) => handleTagClick(e)}
          >
            <img src={tag.img} alt={tag.img}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaglistWrapper;
