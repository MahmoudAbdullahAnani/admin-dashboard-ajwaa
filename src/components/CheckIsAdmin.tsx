"use client";
import { useEffect } from "react";

export default function CheckIsAdmin() {
  const getAndSetToken = async () => {
    const href = window.location.href;
    const token = href.split("token=")[1];
    if (token === undefined) {
      return (window.location.href = "https://ittrip.vercel.app");
    }
    localStorage.setItem("token", token);
  };
  useEffect(() => {
    getAndSetToken();
  }, []);
  return (
    <>
      {!localStorage.getItem("token") && (
        <div className="absolute left-0 top-0 z-[200] h-[100vw] w-[100%] bg-white"></div>
      )}
    </>
  );
}
