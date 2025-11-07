import { CountCard } from "@/interfaces/task";
import React from "react";
import { Text, View } from "react-native";

const CounterCard = ({ title, count }: CountCard) => {
  return (
    <View className="flex-1 gap-1 p-4 rounded-xl w-full bg-blue-400/30">
      <Text className="text-md font-medium text-white">{title}</Text>
      <Text className="text-lg font-medium text-white">{count}</Text>
    </View>
  );
};

export default CounterCard;
