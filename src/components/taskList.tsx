import { List, Button, Tag } from "antd";
export type TaskStatus = "pending" | "completed";

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

interface Props {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TaskList: React.FC<Props> = ({ tasks, onToggle, onDelete }) => {
    return (
        <List
            bordered
            dataSource={tasks}
            renderItem={(task) => (
                <List.Item
                    actions={[
                        <Button onClick={() => onToggle(task.id)}>
                            {task.status === "pending" ? "Complete" : "Undo"}
                        </Button>,
                        <Button danger onClick={() => onDelete(task.id)}>
                            Delete
                        </Button>,
                    ]}
                >
                    {task.title}
                    <Tag color={task.status === "completed" ? "green" : "orange"}>
                        {task.status}
                    </Tag>
                </List.Item>
            )}
        />
    );
};

export default TaskList;
