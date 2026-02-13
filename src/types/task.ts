export type TaskStatus = "pending" | "completed";

export interface taskInterface {
    id: string;
    title: string;
    status: TaskStatus;
}
