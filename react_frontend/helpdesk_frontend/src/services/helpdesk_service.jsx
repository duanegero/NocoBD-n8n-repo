import axios from "axios";

const WEBHOOK_URL =
  "http://localhost:5678/webhook/6b1b4bf7-a133-4092-9cf5-598818017151";

export const sendHelpdeskData = async (formData) => {
  try {
    const response = await axios.post(WEBHOOK_URL, formData);
    return response.data;
  } catch (error) {
    console.error("Error sending data to n8n:", error);
    throw error;
  }
};
