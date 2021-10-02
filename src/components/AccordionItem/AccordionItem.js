import React, { useRef, useState } from "react";


const AccordionItem = ({ title, content }) => {
  const [active, setActive] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleContent = () => {
    setActive(!active)
    setMaxHeight(!active ? `${contentRef.current.scrollHeight}px` : "0px" )
  };

  return (
    <div className="accordion__item">
      <div
        className={active ? "accordion__item-header active" : "accordion__item-header"}
        onClick={toggleContent}
      >
        {title}
      </div>
      <div className="accordion__item-body" ref={contentRef} style={{ maxHeight: `${maxHeight}` }}>
        <div className="accordion__item-body--content">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
