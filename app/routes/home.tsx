import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fund Details" },
    { name: "description", content: "Welcome to fund details app!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
