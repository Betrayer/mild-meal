import React, { FC, useEffect, useRef } from "react";

import "./taglistWrapper.scss";

const TaglistWrapper: FC = () => {
  const taglistRef = useRef(null);

  useEffect(() => {
    //@ts-ignore
    taglistRef.current.addEventListener("wheel", (e) => {
      e.preventDefault();
      //@ts-ignore
      taglistRef.current.scrollLeft += e.deltaY / 10;
    });
  }, []);
  
  return (
    <div ref={taglistRef} className="taglist-wrapper">
      <ul className="taglist-list">
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
        <li className="taglist-list-item"></li>
      </ul>
    </div>
  );
};

export default TaglistWrapper;
