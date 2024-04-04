import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "~utils/axios";

const useGetOrders = ({
  keyword = "",
  userId,
}: {
  keyword?: string;
  userId?: number;
}) => {
  const fetchOrders = async (params) => {
    const response = await axios.get("/api/orders", {
      params: { limit: 10, page: params.page, keyword: params.keyword, userId },
    });
    return {
      data: response.data,
      page: params.page,
    };
  };

  return useInfiniteQuery({
    queryKey: ["orders", { userId, keyword }],
    queryFn: ({ pageParam }) =>
      fetchOrders({ page: pageParam, keyword, userId }),
    getNextPageParam: ({ page, data }) =>
      data?.length >= 10 ? page + 1 : null,
    initialPageParam: 1,
  });
};

export default useGetOrders;
