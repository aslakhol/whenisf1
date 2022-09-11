import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Toggle = (props: ToggleProps) => {
  const { label, checked, onChange } = props;

  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        checked ? "bg-indigo-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      )}
    >
      <span className="sr-only">{label}</span>
      <span
        aria-hidden="true"
        className={classNames(
          checked ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
};
export default Toggle;
