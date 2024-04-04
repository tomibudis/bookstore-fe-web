import { useMutation } from "@tanstack/react-query";
import axios from "~utils/axios";

interface Payload {
  fullName: string;
  username: string;
  password: string;
}
const postRegisterUser = async (values: Payload) => {
  const { data } = await axios.post("/api/user", values);

  return data;
};
const usePostRegisterUser = () => {
  return useMutation({
    mutationFn: postRegisterUser,
  });
};

export default usePostRegisterUser;
