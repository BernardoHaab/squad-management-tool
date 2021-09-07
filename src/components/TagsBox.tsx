import React, { useState, KeyboardEvent, useEffect } from "react";

import Tag from "./Tag";

type TagsBoxProps = {
  tags?: string[];
  addTag: (tagText: string) => void;
  removeTag: (index: number) => void;
};

const TagsBox: React.FC<TagsBoxProps> = ({ tags, addTag, removeTag }) => {
  const [newTag, setNewTag] = useState("");

  function handleKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    const { key } = e;
    const { value } = e.target as any;

    const pressedEnter = key === "Enter";

    pressedEnter && e.preventDefault();

    if ((pressedEnter || key === ";") && value) {
      addTag(value);
    }

    if (key === "Backspace" && !value && tags) {
      removeTag(tags.length - 1);
    }
  }

  return (
    <label htmlFor="new-tag" className="tags-box">
      <ul>
        {tags?.map((tag, id) => (
          <Tag key={id} text={tag} removeTag={removeTag} id={id} />
        ))}
      </ul>
      <input
        type="text"
        id="new-tag"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </label>
  );
};

export default TagsBox;
