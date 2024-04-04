import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Tag from "./tag";
import { DollarSign } from "lucide-react";

interface BookProps {
  title: string;
  image: string;
  writer: string;
  price: number;
  onClick?: () => void;
  buttonAction?: string;
  tags: string[];
}
const Book: React.FC<BookProps> = ({
  title,
  image,
  writer,
  price,
  onClick = () => null,
  buttonAction = "Order",
  tags = [],
}) => {
  return (
    <div className="flex mb-5">
      <div>
        <Image src={image} alt="book" width={150} height={150} />
      </div>
      <div className="p-2 flex flex-col justify-between">
        <div>
          <h4 className="text-lg capitalize font-medium">{title}</h4>
          <p className="text-neutral-500 capitalize">{writer}</p>
          <div className="flex mt-2">
            <Tag size="small">{tags?.join(", ")}</Tag>
          </div>
          <p className="mt-2 flex items-center">
            <DollarSign size={14} />
            Price: {price}
          </p>
        </div>

        <div className="flex">
          <Button onClick={onClick}>{buttonAction}</Button>
        </div>
      </div>
    </div>
  );
};

export default Book;
