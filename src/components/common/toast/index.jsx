import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ position = "top-right", ...rest }) => {
  return (
    <div>
      <ToastContainer position={position} {...rest} />
    </div>
  );
};

export default Toast;
