import React from "react";
import { PrimaryButton, SecondaryButton } from "../../components/common/Button";

export default {
  title: "Common/Button",
  component: PrimaryButton,
};

export const Primary = () => (
  <PrimaryButton text="ボタン" onClick={() => console.log("clicked")} />
);

export const PrimaryDisabled = () => (
  <PrimaryButton
    disabled
    text="ボタン"
    onClick={() => console.log("clicked")}
  />
);

export const Secondary = () => (
  <SecondaryButton text="ボタン" onClick={() => console.log("clicked")} />
);

export const SecondaryDisabled = () => (
  <SecondaryButton
    disabled
    text="ボタン"
    onClick={() => console.log("clicked")}
  />
);
