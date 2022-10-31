import { notification } from "antd";
import { info } from "console";

type NotificationType = "success" | "info" | "warning" | "error";

export const sendNotification = (
  type: NotificationType,
  message: string,
  description: string
) => {
  notification[type]({
    message: message,
    description: description,
    duration: 2,
  });
};

export const sendErrorNotification = (error: any) => {
  switch (error.code) {
    case "auth/invalid-email":
      sendNotification("error", "Login Failed", "Invalid email");
      break;
    case "auth/user-not-found":
      sendNotification(
        "error",
        "Login Failed",
        "Your email not exists on server"
      );
      break;
    case "auth/wrong-password":
      sendNotification("error", "Login Failed", "Wrong password");
      break;
    case "auth/too-many-requests":
      sendNotification(
        "error",
        "Login Failed",
        "Too many request. Try again after a few minutes"
      );
      break;
    default:
      break;
  }
};
