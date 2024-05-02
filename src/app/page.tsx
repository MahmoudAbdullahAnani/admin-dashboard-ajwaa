import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import CheckIsAdmin from "@/components/CheckIsAdmin";
import ControlPanel from "@/components/Dashboard/ControlPanel";


export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <CheckIsAdmin />
      <DefaultLayout>
        <ControlPanel />
      </DefaultLayout>
    </>
  );
}
