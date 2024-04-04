import { LOCALSTORAGE_KEY } from "~constants/index";
import useGetUserById from "./queries/use-get-profile";
import { useEffect } from "react";

const useGetProfile = () => {
  const userInfo =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  useEffect(() => {
    if (!userInfo) {
      window.location.href = "/login";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const response = useGetUserById({ id: userInfo?.id });
  return response;
};

export default useGetProfile;
