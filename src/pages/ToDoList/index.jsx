import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Input, Card, Space, Collapse } from "antd";
import { v4 as uuidv4 } from "uuid";

import TaskItem from "./TaskItem";
import { addTaskList, updateTaskList, deleteTaskList } from "../../redux/slicers/task.slice";

function ToDoList() {
  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.task);
  const handleAddTask = (values) => {
    dispatch(addTaskList({ data: values }));
  };
  const handleUpdateTask = (id, values) => {
    dispatch(
      updateTaskList({
        id: id,
        data: values,
      })
    );
  };
  const handleDeleteTask = (id) => {
    dispatch(deleteTaskList({ id: id }));
  };

  const renderTaskList = taskList.map((item, index) => {
    return (
      <TaskItem
        key={index}
        item={item}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
    );
  });
  return (
    <>
      <Card title="Book Management">
        <Form
          name="tasklisk"
          layout="vertical"
          onFinish={(values) => {
            handleAddTask(values);
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
            label="Author"
            name="content"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Content" />
          </Form.Item>
          <Form.Item
            label="Year"
            name="year"
            rules={[
              {
                required: true,
                // type: "number",
              },
            ]}
          >
            <Input placeholder="Year" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add Book
          </Button>
        </Form>
      </Card>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "fixed",
        }}
        border={1}
      >
        <tr
          style={{
            background: "gray",
            width: "100%",
          }}
        >
          <td style={{ padding: "5px", fontWeight: "bold" }}>Title</td>
          <td style={{ padding: "5px", fontWeight: "bold" }}>Author</td>
          <td style={{ padding: "5px", fontWeight: "bold" }}>Year</td>
          <td style={{ padding: "5px", fontWeight: "bold" }}>Action</td>
        </tr>
        {renderTaskList}
      </table>
    </>
  );
}
export default ToDoList;
