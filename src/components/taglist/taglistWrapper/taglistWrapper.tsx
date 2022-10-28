import React, { FC, useEffect, useRef, useState } from "react";

import "./taglistWrapper.scss";

import { tagsArray } from "../../../assets/variables/taglist";
import { useDispatch } from "react-redux";
import { getRecipesByTag } from "../../../redux/actions/recipes";
import { useNavigate } from "react-router-dom";

const TaglistWrapper: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const taglistRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    taglistRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      //@ts-ignore
      taglistRef.current.scrollLeft += e.deltaY / 10;
    });
  }, []);

  const handleTagClick = (e: any) => {
    // dispatch(getRecipesByTag(e.currentTarget.getAttribute("value")));
    navigate("/results");
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
