import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CheckIsAdmin from "@/components/CheckIsAdmin";
import ControlPanel from "@/components/Dashboard/ControlPanel";

export const metadata: Metadata = {
  title: "Ajwaa Dashboard",
  description: "This is Ajwaa for Dashboard Template",
};

export default function Home() {
  console.log("====================================");
  console.log(process.env.NEXT_PUBLIC_API_PRODUCTION);
  console.log("====================================");
  return (
    <>
      <CheckIsAdmin />
      <DefaultLayout>
        <ControlPanel />
      </DefaultLayout>
    </>
  );
}
