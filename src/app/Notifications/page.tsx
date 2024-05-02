import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CheckIsAdmin from "@/components/CheckIsAdmin";
import ContentNotifications from "./ContentNotifications";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajwaa Dashboard Notifications",
  description: "This is Ajwaa Dashboard Notifications",
};

export default function Notifications() {
  return (
    <DefaultLayout>
      <CheckIsAdmin />
      <ContentNotifications />
    </DefaultLayout>
  );
}
