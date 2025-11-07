import { Task } from "@/types/tasks";
import { Checkbox } from "expo-checkbox";
import React from "react";
import { Text, View } from "react-native";
import IconButton from "./IconButton";

interface TaskCardProps extends Task {
  onToggleComplete: (id: string, value: boolean) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskCard = ({
  id,
  title,
  description,
  created_at,
  is_completed,
  onToggleComplete,
  onEdit,
  onDelete,
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
      <View className="flex-row items-center gap-2">
        <IconButton
          icon="create-outline"
          onPress={() => onEdit(id)}
          color="#3b82f6"
          iconSize={20}
          className="p-2"
        />
        <IconButton
          icon="trash-outline"
          onPress={() => onDelete(id)}
          color="#ef4444"
          iconSize={20}
          className="p-2"
        />
        <Checkbox
          value={is_completed}
          onValueChange={(newValue) => onToggleComplete(id, newValue)}
          color={is_completed ? "#3b82f6" : undefined}
        />
      </View>
    </View>
  );
};

export default TaskCard;
