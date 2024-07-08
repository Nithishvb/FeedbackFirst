"use server";

import { redirect } from "next/navigation";

const page = () => {
  redirect("/dashboard/space");
};

export default page;
