import { Task } from "@/types/tasks";
import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import TaskCard from "../ui/TaskCard";

const TaskList = ({
  tasks,
  loading,
  error,
  onToggleComplete,
}: {
  tasks: Task[];
  loading: boolean;
  error: boolean;
  onToggleComplete: (id: string, value: boolean) => void;
}) => {
  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-red-500 text-center">
          An error occurred while fetching tasks
        </Text>
      </View>
    );
  }

  if (tasks?.length === 0) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-gray-500 text-center">
          No tasks found. Add a new task to get started!
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 mt-4 space-y-3 gap-5">
      {tasks.map((value) => (
        <TaskCard
          key={value.id}
          id={value.id}
          title={value.title}
          description={value.description}
          created_at={value.created_at}
          is_completed={value.is_completed}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </View>
  );
};

export default TaskList;
