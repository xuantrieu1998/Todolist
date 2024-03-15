import { Card, Space, Button, Input, Form } from "antd";
import { useState } from "react";

function TaskItem({
  item,
  handleUpdateTask,
  handleDeleteTask,
}) {
  const [Update, setUpdate] = useState(false);
  if (Update) {
    return (
      <Card title="Edit Task">
        <Form
          name="updatetasklisk"
          layout="vertical"
          initialValues={{
            tittle: item.tittle,
            content: item.content,
            year: item.year,
          }}
          onFinish={(values) => {
            setUpdate(false);
            handleUpdateTask(item.id, values);
          }}
        >
          <Form.Item
            label="Tittle"
            name="tittle"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Tittle" />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Tittle" />
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Year" />
          </Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form>
      </Card>
    );
  }
  return (
    <tr>
      <td style={{ padding: "5px" }}>{item.tittle}</td>
      <td style={{ padding: "5px" }}>{item.content}</td>
      <td style={{ padding: "5px" }}>{item.year}</td>
      <td style={{ padding: "5px" }}>
        <Space style={{ marginTop: 10 }}>
          <Button
            type="primary"
            onClick={() => {
              setUpdate(true);
            }}
          >
            Edit
          </Button>
          <Button
            danger
            onClick={() => {
              handleDeleteTask(item.id);
            }}
          >
            Delete
          </Button>
        </Space>
      </td>
    </tr>
  );
}
export default TaskItem;
