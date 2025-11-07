import {
  TaskListResponse,
  TaskPayload,
  TaskResponse,
  TaskUpdatePayload,
} from "@/interfaces/task";
import api from "@/lib/axios";
import { Task } from "@/types/tasks";

export const getTasks = async (): Promise<TaskResponse<TaskListResponse>> => {
  const response = await api.get<TaskResponse<TaskListResponse>>("/tasks");
  return response.data;
};

export const createTask = async (task: TaskPayload) => {
  const response = await api.post<{ data: TaskResponse<Task> }>("/tasks", task);
  return response;
};

export const updateTask = async (task: TaskUpdatePayload) => {
  const response = await api.put<{ data: TaskResponse<Task> }>(
    `/tasks/${task.id}`,
    task
  );
  return response;
};

export const deleteTask = async (task: TaskUpdatePayload) => {
  const response = await api.delete<{ data: TaskResponse<Task> }>(
    `/tasks/${task.id}`
  );
  return response.data;
};
