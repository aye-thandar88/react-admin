import { useContext } from "react";
import { ToastContext } from "../utils/toastProvider";

const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error(
      "useToast context must be used within a ToastContextProvider"
    );
  }
  return context;
};

export default useToast;
