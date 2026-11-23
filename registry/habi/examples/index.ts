import type { ComponentType } from "react";

import BadgeDemo from "./badge-demo";
import BadgeInContext from "./badge-in-context";
import BadgeKinds from "./badge-kinds";
import BadgeWithIcon from "./badge-with-icon";
import ButtonDemo from "./button-demo";
import ButtonDisabled from "./button-disabled";
import ButtonIconOnly from "./button-icon-only";
import ButtonKinds from "./button-kinds";
import ButtonLink from "./button-link";
import ButtonWithIcon from "./button-with-icon";
import CardDemo from "./card-demo";
import CardHorizontal from "./card-horizontal";
import CardWithIcon from "./card-icon";
import CardWithImage from "./card-image";
import LinkDemo from "./link-demo";
import LinkStandalone from "./link-standalone";
import LinkNext from "./link-next";
import LinkExternal from "./link-external";
import NotificationDemo from "./notification-demo";
import NotificationDismissible from "./notification-dismissible";
import NotificationKinds from "./notification-kinds";
import SelectDemo from "./select-demo";
import SelectValidation from "./select-validation";
import SelectGrouped from "./select-grouped";
import SelectDisabled from "./select-disabled";
import TagControlled from "./tag-controlled";
import TagDemo from "./tag-demo";
import TagDisabled from "./tag-disabled";
import TextInputDemo from "./text-input-demo";
import TextInputDisabled from "./text-input-disabled";
import TextInputServerError from "./text-input-server-error";
import TextInputValidation from "./text-input-validation";

export const examples: Record<string, ComponentType> = {
  "badge-demo": BadgeDemo,
  "badge-in-context": BadgeInContext,
  "badge-kinds": BadgeKinds,
  "badge-with-icon": BadgeWithIcon,
  "button-demo": ButtonDemo,
  "button-disabled": ButtonDisabled,
  "button-icon-only": ButtonIconOnly,
  "button-kinds": ButtonKinds,
  "button-link": ButtonLink,
  "button-with-icon": ButtonWithIcon,
  "card-demo": CardDemo,
  "card-horizontal": CardHorizontal,
  "card-icon": CardWithIcon,
  "card-image": CardWithImage,
  "link-demo": LinkDemo,
  "link-standalone": LinkStandalone,
  "link-next": LinkNext,
  "link-external": LinkExternal,
  "notification-demo": NotificationDemo,
  "notification-dismissible": NotificationDismissible,
  "notification-kinds": NotificationKinds,
  "select-demo": SelectDemo,
  "select-validation": SelectValidation,
  "select-grouped": SelectGrouped,
  "select-disabled": SelectDisabled,
  "tag-controlled": TagControlled,
  "tag-demo": TagDemo,
  "tag-disabled": TagDisabled,
  "text-input-demo": TextInputDemo,
  "text-input-disabled": TextInputDisabled,
  "text-input-server-error": TextInputServerError,
  "text-input-validation": TextInputValidation,
};
