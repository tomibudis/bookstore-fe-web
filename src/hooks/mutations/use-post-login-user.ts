import { useMutation } from "@tanstack/react-query";
import axios from "~utils/axios";

interface Payload {
  username: string;
  password: string;
}
const postLoginUser = async (values: Payload) => {
  const response = await axios.post("/api/login", values);

  return response;
};
const usePostLoginUser = () => {
  return useMutation({
    mutationFn: postLoginUser,
  });
};

export default usePostLoginUser;
