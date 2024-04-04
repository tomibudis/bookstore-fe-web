"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

// import Tag from "~components/tag";
import { Input } from "~components/ui/input";
import useSearch from "~src/hooks/use-search";

const FilterAndSearch = () => {
  const router = useRouter();

  const { onChangeValue, value } = useSearch();

  useEffect(() => {
    const url = new URL(window.location.href);

    const searchQuery = url.searchParams.get("search");

    const keyword = value || searchQuery;
    const queryString = keyword ? `?search=${keyword}` : "";
    router.push(`/homepage${queryString}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const searchQuery = url.searchParams.get("search");
    onChangeValue(searchQuery || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container p-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-1">
          <Input
            type="text"
            placeholder="Search title book...."
            defaultValue={value}
            onChange={({ target }) => onChangeValue(target.value)}
          />
        </div>
        {/* NOTE: need more time to finish it */}
        {/* <div className="col-span-2 flex gap-2 items-center">
          <Tag>Fuction</Tag>
          <Tag>Essay</Tag>
        </div> */}
      </div>
    </div>
  );
};

export default FilterAndSearch;
