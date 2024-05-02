import * as React from "react";
import { Metadata } from "next";
import { ContentProfile } from "./ContentProfile";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
export const metadata: Metadata = {
  title: "Ajwaa Dashboard Profile",
  description: "This is Ajwaa Dashboard Profile page for TailAdmin",
};

const Profile = () => {
  return (
    <DefaultLayout>
      <ContentProfile />
    </DefaultLayout>
  );
};

export default Profile;
