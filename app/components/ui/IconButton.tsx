import { IconButtonProps } from "@/interfaces/button";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

const IconButton = ({
  onPress,
  icon,
  color,
  iconSize,
  className,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      className={
        className
          ? className
          : "absolute right-6 top-1.5 bg-blue-500 p-2 rounded-xl"
      }
      onPress={onPress}
    >
      <Ionicons name={icon} size={iconSize} color={color} />
    </TouchableOpacity>
  );
};

export default IconButton;
