import { useContext } from "react";
import { ContactUsContext } from "../contexts/ContactUs/ContactUsContext";

export const useContactUs = () => {
  const context = useContext(ContactUsContext);

  if (!context) {
      throw new Error ('The ContactUsContext is not working')
  }
  return{
      ...context
  }
}