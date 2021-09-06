import React from "react";

type TagProps = {
  text: string;
  removeTag: (index: number) => void;
  id: number;
};

const Tag: React.FC<TagProps> = ({ text, removeTag, id }) => {
  return (
    <div className="tag">
      <p>{text}</p>
      <span onClick={() => removeTag(id)} className="material-icons">
        close
      </span>
    </div>
  );
};

export default Tag;
