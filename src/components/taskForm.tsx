import { Form, Input, Button } from "antd";

interface Props {
    onAdd: (title: string) => void;
}

const TaskForm: React.FC<Props> = ({ onAdd }) => {
    const [form] = Form.useForm();

    const onFinish = (values: { title: string }) => {
        onAdd(values.title);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={onFinish} layout="inline">
            <Form.Item
                name="title"
                rules={[{ required: true, message: "Enter task" }]}
            >
                <Input placeholder="Enter task..." />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Add Task
                </Button>
            </Form.Item>
        </Form>
    );
};

export default TaskForm;
