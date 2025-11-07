import { Task } from "@/types/tasks";

export interface TaskPayload {
  title: string;
  description: string;
}

export interface TaskResponse<T> {
  data?: T;
  success: boolean;
  message: string;
}

export interface TaskUpdatePayload {
  id: string;
  title?: string;
  description?: string;
  is_completed?: boolean;
}

export interface TaskListResponse {
  tasks: Task[];
  completedCount: number;
  uncompletedCount: number;
}

export interface CountCard {
  title: string;
  count: number;
}
