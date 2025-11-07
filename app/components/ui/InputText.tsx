import { InputTextProps } from "@/interfaces/input";
import React from "react";
import { TextInput } from "react-native";

const InputText = ({
  placeholder,
  value,
  onChange,
  className,
}: InputTextProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="black"
      className={className ? className : "p-4 rounded-lg bg-white"}
      value={value}
      onChangeText={onChange}
    />
  );
};

export default InputText;
