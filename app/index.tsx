import {
  CREATED_RESPONSE_CODE,
  SUCCESS_RESPONSE_CODE,
} from "@/constant/response";
import { TaskListResponse, TaskResponse } from "@/interfaces/task";
import { createTask, getTasks, updateTask } from "@/services/tasks";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskList from "./components/layout/TaskList";
import ActionButton from "./components/ui/ActionButton";
import CounterCard from "./components/ui/CounterCard";
import IconButton from "./components/ui/IconButton";
import InputText from "./components/ui/InputText";

export default function Index() {
  const [showDescription, setShowDescription] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [taskResponse, setTaskResponse] = useState<
    TaskResponse<TaskListResponse>
  >({
    data: {
      tasks: [],
      completedCount: 0,
      uncompletedCount: 0,
    },
    message: "",
    success: false,
  });

  const alert = (success: boolean, message: string) => {
    Alert.alert(success ? "Success" : "Error", message, [
      {
        text: "OK",
        onPress: () => {},
      },
    ]);
  };

  const handleShowDescriptionInput = () => {
    setShowDescription(true);
  };

  const handleHideDescriptionInput = () => {
    setShowDescription(false);
  };

  const handleInsertTask = async (data: {
    title: string;
    description: string;
  }) => {
    try {
      setIsLoading(true);
      const response = await createTask(data);
      if (response.status === CREATED_RESPONSE_CODE) {
        setTitle("");
        setDescription("");
        setShowDescription(false);
        alert(true, "Task inserted successfully");
        await fetchTasks();
      }
    } catch (error) {
      setIsError(true);
      alert(false, "Error inserting task: " + error);
    } finally {
      setIsError(false);
      setIsLoading(false);
      await fetchTasks();
    }
  };

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      setTaskResponse(response);
    } catch (error) {
      alert(false, "Error fetching tasks: " + error);
    }
  };

  const handleToggleComplete = async (id: string, newValue: boolean) => {
    try {
      setIsLoading(true);
      const response = await updateTask({ id, is_completed: newValue });
      if (response.status === SUCCESS_RESPONSE_CODE) {
        alert(true, "Task updated successfully");
      }
    } catch (error) {
      setIsError(true);
      alert(false, "Error updating task: " + error);
    } finally {
      setIsError(false);
      setIsLoading(false);
      await fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View className="flex-1 bg-gray-50/60">
      <View className="bg-blue-500/95 rounded-b-3xl">
        <SafeAreaView className="px-4">
          <View className="flex flex-col mt-10">
            <Text className="text-4xl font-bold text-white">TodoApp</Text>
            <Text className="text-white text-lg">Manage your tasks</Text>
          </View>
          <View className="flex-row gap-6 mt-5 px-2">
            <CounterCard
              title="Uncompleted"
              count={taskResponse.data?.uncompletedCount || 0}
            />
            <CounterCard
              title="Completed"
              count={taskResponse.data?.completedCount || 0}
            />
          </View>
        </SafeAreaView>
      </View>

      <View className="flex gap-6 mt-5 px-4">
        <InputText
          placeholder="Task Name"
          value={title}
          onChange={(value) => setTitle(value)}
        />
        {showDescription ? (
          <>
            <InputText
              placeholder="Task Description"
              value={description}
              onChange={(value) => setDescription(value)}
            />
            <View className="flex-row w-full gap-2">
              <View className="flex-1">
                <ActionButton
                  action="Discard"
                  isLoading={isLoading}
                  onPress={handleHideDescriptionInput}
                />
              </View>
              <View className="flex-1">
                <ActionButton
                  action={isLoading ? "Loading..." : "Save"}
                  isLoading={isLoading}
                  onPress={() => handleInsertTask({ title, description })}
                />
              </View>
            </View>
          </>
        ) : (
          <IconButton
            onPress={handleShowDescriptionInput}
            icon="add"
            color="white"
            iconSize={20}
          />
        )}
      </View>
      <ScrollView className="flex-1 px-4 mt-4">
        <TaskList
          tasks={taskResponse.data?.tasks || []}
          loading={isLoading}
          error={isError}
          onToggleComplete={handleToggleComplete}
        />
      </ScrollView>
    </View>
  );
}
