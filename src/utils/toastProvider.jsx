import { createContext, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

export const ToastContext = createContext();

const ToastProvider = ({ children, position = "top-right", ...rest }) => {
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

export default ToastProvider;
