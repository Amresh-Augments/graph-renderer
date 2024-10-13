import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import HeaderSkeleton from "@/components/header-skeleton";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  // CODE FOR TASK 3.2 -----------------------------------------

  const name = cookies().get("gr-name")?.value;
  if (!name) {
    redirect("/");
  }
  return (
    <Suspense fallback={<HeaderSkeleton />}>
      <Header name={name} />
      <Dashboard />
    </Suspense>
  );

  // END OF CODE FOR TASK 3.2 ----------------------------------
}
