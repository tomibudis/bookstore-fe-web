import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "~utils/axios";

interface BookResponse {
  id: number;
  title: string;
  writer: string;
  coverImage: string;
  point: number;
  tag: string[];
  createdAt: string;
}
const useGetBooks = ({ keyword = "" }: { keyword?: string }) => {
  const fetchBooks = async (params) => {
    const response = await axios.get<BookResponse[]>("/api/books", {
      params: { limit: 10, page: params.page, keyword: params.keyword },
    });
    return {
      data: response.data,
      page: params.page,
    };
  };

  return useInfiniteQuery({
    queryKey: ["books", keyword],
    queryFn: ({ pageParam }) => fetchBooks({ page: pageParam, keyword }),
    getNextPageParam: ({ page, data }) =>
      data?.length >= 10 ? page + 1 : null,
    initialPageParam: 1,
  });
};

export default useGetBooks;
