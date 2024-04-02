import { useEffect, useState } from "react";
//customhook
const useOffline = () => {
  const [status, Setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      Setstatus(true);
    });
    window.addEventListener("offline", () => {
      Setstatus(false);
    });
  }, []);
  return status;
};
export default useOffline;
