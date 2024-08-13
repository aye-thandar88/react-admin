import { createContext, useCallback, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error(
      "useToast context must be used within a ToastContextProvider"
    );
  }
  return context;
};

export const ToastProvider = ({
  children,
  position = "top-right",
  ...rest
}) => {
  const showToast = useCallback(
    (message, options = {}) => {
      if (message.status === "success") {
        toast.success(message.text, { position, ...options });
      } else if (message.status === "error") {
        toast.error(message.text, { position, ...options });
      } else {
        toast(message.text, { position, ...options });
      }
    },
    [position]
  );

  const hideToast = useCallback(() => {
    toast.dismiss();
  });

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <ToastContainer {...rest} />
    </ToastContext.Provider>
  );
};
