import { TaskFormProps } from "@/interfaces/task";
import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ActionButton from "./ActionButton";
import InputText from "./InputText";

const TaskForm: React.FC<TaskFormProps> = ({
  visible,
  onClose,
  onSubmit,
  initialData = { title: "", description: "" },
  isEditing = false,
  isLoading = false,
}) => {
  const [title, setTitle] = React.useState(initialData.title);
  const [description, setDescription] = React.useState(initialData.description);

  React.useEffect(() => {
    if (visible) {
      setTitle(initialData.title);
      setDescription(initialData.description);
    }
  }, [visible, initialData]);

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({ title, description });
  };

  if (!visible) return null;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center bg-black/60 px-4">
        <View className="w-full max-w-md overflow-hidden rounded-2xl bg-gray-50/95 shadow-2xl">
          <View className="bg-blue-500 px-5 py-4 flex-row items-center justify-between">
            <Text className="text-white text-lg font-semibold">
              {isEditing ? "Edit Task" : "Add New Task"}
            </Text>
            <TouchableOpacity
              onPress={onClose}
              className="rounded-full bg-white/20 px-2 py-1"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text className="text-white text-xl font-bold">✕</Text>
            </TouchableOpacity>
          </View>

          <View className="p-5">
            <View className="mb-4">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Title
              </Text>
              <InputText
                placeholder="Enter task title"
                value={title}
                onChange={setTitle}
              />
            </View>

            <View className="mb-6">
              <Text className="text-sm font-medium text-gray-700 mb-1">
                Description
              </Text>
              <InputText
                placeholder="Enter task description"
                value={description}
                onChange={setDescription}
              />
            </View>

            <View className="flex-row gap-3 w-full justify-end">
              <View className="flex-1">
                <ActionButton
                  action="Cancel"
                  onPress={onClose}
                  isLoading={isLoading}
                />
              </View>
              <View className="flex-1">
                <ActionButton
                  action={isEditing ? "Update" : "Add Task"}
                  onPress={handleSubmit}
                  isLoading={isLoading}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskForm;
