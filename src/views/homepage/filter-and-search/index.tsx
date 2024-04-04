import React from "react";
import Tag from "~components/tag";
import { Input } from "~components/ui/input";

const FilterAndSearch = () => {
  return (
    <div className="container p-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <Input type="text" placeholder="Search title book...." />
        </div>
        <div className="col-span-2 flex gap-2 items-center">
          <Tag>Fuction</Tag>
          <Tag>Essay</Tag>
        </div>
      </div>
    </div>
  );
};

export default FilterAndSearch;
