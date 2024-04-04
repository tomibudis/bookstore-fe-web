import { useMutation } from "@tanstack/react-query";
import axios from "~utils/axios";

interface Payload {
  userId: number;
  bookId: number;
}

const postOrder = async (values: Payload) => {
  const { data } = await axios.post("/api/order", values);
  return { data };
};

const usePostOrder = () => {
  return useMutation({
    mutationKey: ["create-order"],
    mutationFn: postOrder,
  });
};

export default usePostOrder;
