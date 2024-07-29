"use server";
import { Environment, OspClient } from "@open-social-protocol/osp-client";

export const login = async () => {
  const osp = await OspClient?.create({
    // env: process.env.NEXT_PUBLIC_ENV as Environment,
    env: "dev" as Environment,
    app_id: process.env.NEXT_PUBLIC_APP_ID || "2"!,
  });
  console.log(osp);
};
