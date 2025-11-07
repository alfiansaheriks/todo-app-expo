import { ActionButtonProps } from "@/interfaces/button";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ActionButton = ({
  action,
  className,
  onPress,
  isLoading,
}: ActionButtonProps) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      className={
        className
          ? className
          : `bg-blue-500 ${isLoading ? "opacity-50" : ""} p-3 rounded-xl`
      }
    >
      <Text className="text-white font-bold text-center">{action}</Text>
    </TouchableOpacity>
  );
};

export default ActionButton;
