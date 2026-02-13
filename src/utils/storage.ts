export type TaskStatus = "pending" | "completed";

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

const KEY = "tasks";

export const getTasks = (): Task[] => {
    const data = localStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
};
