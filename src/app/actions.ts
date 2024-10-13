"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function redirectToDashboard(formData: FormData) {
  // CODE FOR TASK 2.4 -----------------------------------------
  let name = formData.get("name") as string;

  if (!name) {
    return { error: "Hey, your name is missing!" };
  }

  name = name.trim().toLowerCase().replace(/\s+/g, "");
  cookies().set("gr-name", name);
  redirect("/dashboard");
  // END OF CODE FOR TASK 2.4 ----------------------------------
}
