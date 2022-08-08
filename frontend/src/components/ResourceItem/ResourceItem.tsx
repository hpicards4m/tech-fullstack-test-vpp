import { Avatar } from "primereact/avatar";
import React from "react";
import "./ResourceItem.css";
import { ResourceItemProps } from "./ResourceItem.types";

export const ResourceItem: React.FC<ResourceItemProps> = ({
  title,
  description,
  avatarText,
  avatarImage,
  avatarIcon,
  selectable,
  selected,
  onSelect,
  ...JSXProps
}) => {
  let classes = "resourceItem";

  if (selectable) {
    classes += " resourceItem-selectable";
  }

  const handleSelect = (event: React.MouseEvent) => {
    if (selectable && onSelect) {
      onSelect(event);
    }
  };

  return (
    <button
      type="button"
      className={classes}
      onClick={handleSelect}
      {...JSXProps}
    >
      {(avatarText || avatarImage || avatarIcon) && (
        <Avatar
          label={avatarText}
          image={avatarImage}
          icon={avatarIcon ? `pi pi-${avatarIcon}` : undefined}
          style={{ backgroundColor: "#009ec0", color: "#ffffff" }}
          shape="circle"
          size="large"
        />
      )}
      <div className="resourceItem_texts">
        <p className="resourceItem_title">
          {title}
        </p>
        {description && (
          <p className="resourceItem_description">
            {description}
          </p>
        )}
      </div>
      {selectable && selected && (
        <i className="pi pi-check" style={{fontSize: "1.25rem", color: "#009ec0"}}></i>
      )}
    </button>
  );
};
