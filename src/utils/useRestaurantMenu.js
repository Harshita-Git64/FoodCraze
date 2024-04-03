import { useEffect, useState } from "react";
import { REST_MENU } from "./constants";

//customhook
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(REST_MENU + resId);
    const jsondata = await data.json();
    console.log(jsondata.data);
    setResInfo(jsondata.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
