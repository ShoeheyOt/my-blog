import { LoginPage } from "@/components/pages/LoginPage";
import { redirect } from "next/navigation";

export default function Login() {
  redirect("/blog");
  // return <LoginPage />;
}
