import type { ComponentType } from "react";

import ButtonDemo from "./button-demo";
import ButtonDisabled from "./button-disabled";
import ButtonIconOnly from "./button-icon-only";
import ButtonKinds from "./button-kinds";
import ButtonLink from "./button-link";
import ButtonWithIcon from "./button-with-icon";

export const examples: Record<string, ComponentType> = {
  "button-demo": ButtonDemo,
  "button-disabled": ButtonDisabled,
  "button-icon-only": ButtonIconOnly,
  "button-kinds": ButtonKinds,
  "button-link": ButtonLink,
  "button-with-icon": ButtonWithIcon,
};
