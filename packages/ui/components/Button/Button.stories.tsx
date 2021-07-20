import React, { FC } from "react";

import { Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const TypeButton: FC<ButtonProps> = () => (
  <Button type="button">Button</Button>
);
export const TypeReset: FC<ButtonProps> = () => (
  <Button type="reset">Button</Button>
);
