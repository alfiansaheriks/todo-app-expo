import { Task } from "@/types/tasks";
import { Checkbox } from "expo-checkbox";
import React from "react";
import { Text, View } from "react-native";

interface TaskCardProps extends Task {
  onToggleComplete: (id: string, value: boolean) => void;
}

const TaskCard = ({
  id,
  title,
  description,
  created_at,
  is_completed,
  onToggleComplete,
}: TaskCardProps) => {
  return (
    <View className="flex flex-row justify-between gap-1 p-4 rounded-lg w-full bg-white">
      <View key={id}>
        <Text className="text-lg font-bold text-blue-500/90">{title}</Text>
        <Text className="text-sm font-medium text-blue-500/90">
          {description}
        </Text>
        <Text className="text-sm font-medium text-blue-500/90">
          {created_at ? new Date(created_at).toDateString() : "No due date"}
        </Text>
      </View>
      <View>
        <Checkbox
          value={is_completed}
          onValueChange={(newValue) => onToggleComplete(id, newValue)}
        />
      </View>
    </View>
  );
};

export default TaskCard;
