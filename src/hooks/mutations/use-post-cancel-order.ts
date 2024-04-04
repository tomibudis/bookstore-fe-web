import { useMutation } from "@tanstack/react-query";
import axios from "~utils/axios";

interface Payload {
  id: number;
  userId: number;
  bookId: number;
}

const postCancelOrder = async (values: Payload) => {
  const { data } = await axios.post("/api/cancel-order", values);
  return { data };
};

const usePostCancelOrder = () => {
  return useMutation({
    mutationKey: ["create-order"],
    mutationFn: postCancelOrder,
  });
};

export default usePostCancelOrder;
