import { insertTask, listTasks, patchTask, removeTask } from "@/api/mockClient";

export function getTasks() {
  return listTasks();
}

export function createTask(payload) {
  return insertTask(payload);
}

export function updateTask(id, payload) {
  return patchTask(id, payload);
}

export function deleteTask(id) {
  return removeTask(id);
}
