import { redirect } from "next/navigation";

// Redirect to Shea Butter flagship export page as Young and Dufe focuses exclusively on Shea Butter
export default function BaobabOilPage() {
  redirect("/products/shea-butter");
}
