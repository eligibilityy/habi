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
import TagControlled from "./tag-controlled";
import TagDemo from "./tag-demo";
import TagDisabled from "./tag-disabled";

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
  "tag-controlled": TagControlled,
  "tag-demo": TagDemo,
  "tag-disabled": TagDisabled,
};
