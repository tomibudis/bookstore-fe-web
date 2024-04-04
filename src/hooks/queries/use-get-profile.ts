import { useQuery } from "@tanstack/react-query";
import axios from "~utils/axios";

const useGetUserById = ({ id }: { id: number }) => {
  return useQuery({
    queryFn: async () => {
      const response = await axios.get(`/api/users/${id}`);
      return response.data;
    },
    queryKey: ["profile"],
    enabled: !!id,
  });
};

export default useGetUserById;
