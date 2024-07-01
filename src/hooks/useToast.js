import { useContext } from "react";
import { ToastContext } from "../utils/toastProvider";

const useToast = () => {
  const useToast = useContext(ToastContext);

  return useToast;
};

export default useToast;
