"use client";
import Image from "next/image";
import { login } from "../customer";

export default function Home() {
  return <button onClick={() => login()}>Login</button>;
}
