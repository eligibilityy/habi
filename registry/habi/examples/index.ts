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
import CheckboxDemo from "./checkbox-demo";
import CheckboxDisabled from "./checkbox-disabled";
import CheckboxGroupDemo from "./checkbox-group";
import CheckboxParent from "./checkbox-parent";
import CheckboxValidation from "./checkbox-validation";
import DateInputDemo from "./date-input-demo";
import DateInputDisabled from "./date-input-disabled";
import DateInputValidation from "./date-input-validation";
import LinkDemo from "./link-demo";
import LinkStandalone from "./link-standalone";
import LinkNext from "./link-next";
import LinkExternal from "./link-external";
import NotificationDemo from "./notification-demo";
import NotificationDismissible from "./notification-dismissible";
import NotificationKinds from "./notification-kinds";
import OtpInputDemo from "./otp-input-demo";
import OtpInputMpin from "./otp-input-mpin";
import OtpInputResend from "./otp-input-resend";
import OtpInputValidation from "./otp-input-validation";
import RadioGroupDemo from "./radio-group-demo";
import RadioGroupDisabled from "./radio-group-disabled";
import RadioGroupHints from "./radio-group-hints";
import RadioGroupValidation from "./radio-group-validation";
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
  "checkbox-demo": CheckboxDemo,
  "checkbox-disabled": CheckboxDisabled,
  "checkbox-group": CheckboxGroupDemo,
  "checkbox-parent": CheckboxParent,
  "checkbox-validation": CheckboxValidation,
  "date-input-demo": DateInputDemo,
  "date-input-disabled": DateInputDisabled,
  "date-input-validation": DateInputValidation,
  "link-demo": LinkDemo,
  "link-standalone": LinkStandalone,
  "link-next": LinkNext,
  "link-external": LinkExternal,
  "notification-demo": NotificationDemo,
  "notification-dismissible": NotificationDismissible,
  "notification-kinds": NotificationKinds,
  "otp-input-demo": OtpInputDemo,
  "otp-input-mpin": OtpInputMpin,
  "otp-input-resend": OtpInputResend,
  "otp-input-validation": OtpInputValidation,
  "radio-group-demo": RadioGroupDemo,
  "radio-group-disabled": RadioGroupDisabled,
  "radio-group-hints": RadioGroupHints,
  "radio-group-validation": RadioGroupValidation,
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
