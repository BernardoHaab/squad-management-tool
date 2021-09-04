import React from "react";

type CardProps = {
  title: string;
  hasCreateButton?: boolean;
  children: JSX.Element;
  className?: string;
};

const TopFive: React.FC<CardProps> = ({
  title,
  hasCreateButton = false,
  children,
  className = "",
}) => {
  return (
    <div className={`card-container ${className}`}>
      <span className="header">
        <p>{title}</p>
        {hasCreateButton && <button>+</button>}
      </span>

      <div className="main">{children}</div>
    </div>
  );
};

export default TopFive;
