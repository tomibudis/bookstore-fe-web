import { LOCALSTORAGE_KEY } from "~constants/index";
import useGetUserById from "./queries/use-get-profile";

const useGetProfile = () => {
  const userInfo =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  const response = useGetUserById({ id: userInfo.id });
  return response;
};

export default useGetProfile;
