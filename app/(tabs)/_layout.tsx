import { Redirect, Slot } from "expo-router";
import React from "react";

export default function _layout() {
  const isAuthorized = false;
  if (!isAuthorized) return <Redirect href={"/SignIn"} />;
  return <Slot />;
}
