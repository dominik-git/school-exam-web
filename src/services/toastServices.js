import { toast } from "react-toastify";

export const sucessfulNotification = message => {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const errorNotification = message => {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};

export const infoNotification = message => {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_CENTER,
  });
};
