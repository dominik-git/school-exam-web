import { toast } from "react-toastify";

export const sucessfulNotification = msg =>
  toast.success(msg, {
    className: {
      color: "white",
      borderRadius: "8px",
      background: "#253993",
      boxShadow: "2px 2px 20px 2px rgba(0,0,0,0.3)"
    }
  });

export const errorNotification = message => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER
  });
};

export const infoNotification = message => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER
  });
};
