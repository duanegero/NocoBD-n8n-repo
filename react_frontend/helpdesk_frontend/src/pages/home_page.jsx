import React, { useEffect } from "react";
import HelpdeskForm from "../components/home_page_components/helpdesk_form";
export default function HomePage() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <HelpdeskForm />
    </>
  );
}
