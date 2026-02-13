import { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import { getTasks, saveTasks } from "./utils/storage";
import { v4 as uuidv4 } from "uuid";


const { Header, Content } = Layout;

export type TaskStatus = "pending" | "completed";

export interface Task {
    id: string;
    title: string;
    status: TaskStatus;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      status: "pending",
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
        tasks.map((task) =>
            task.id === id
                ? {
                  ...task,
                  status:
                      task.status === "pending" ? "completed" : "pending",
                }
                : task
        )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
      <Layout style={{ minHeight: "100vh", padding: "2rem" }}>
        <Header>
          <Typography.Title style={{ color: "white" }}>
            Task Manager
          </Typography.Title>
        </Header>
        <Content style={{ marginTop: "2rem" }}>
          <TaskForm onAdd={addTask} />
          <br />
          <TaskList
              tasks={tasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
          />
        </Content>
      </Layout>
  );
}

export default App;
