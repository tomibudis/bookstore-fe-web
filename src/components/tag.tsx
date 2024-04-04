import React from "react";
import { cn } from "~src/lib/utils";

interface TagProps {
  size?: "normal" | "small";
}
const Tag: React.FC<TagProps> = (props) => {
  const className =
    props.size === "small" ? "text-xs px-2 py-1" : "text-sm px-4 py-2";

  return (
    <div
      className={cn(
        "shadow-md border-2 border-teal-700 rounded-lg text-teal-800",
        className
      )}
    >
      {props.children}
    </div>
  );
};

export default Tag;
