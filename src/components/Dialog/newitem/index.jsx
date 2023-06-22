import React from "react";
import styles from "./style.module.scss";
import Typography from "@/components/Typography";
import { Input, Select, Textarea } from "@/components/Form";
import Button from "@/components/Button";
import { getFormData } from "@/helpers";
import { useTaskStore } from "@/stores";
export default function NewItemDialog({ close }) {
  const push = useTaskStore((state) => state.pushIntoGroup);

  const handleSubmit = (e) => {
    const data = getFormData(e);
    push("backlog", data);
    close();
  };

  return (
    <div className={styles.newItem}>
      <Typography variant="large" fontWeight="500">
        Add New Task
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Textarea
          label="Task"
          name="text"
          required
          placeholder="What planning for today?"
        />
        <Select
          name="level"
          required
          label="Priority"
          options={[
            { value: "1", label: "Low" },
            { value: "2", label: "Medium" },
            { value: "3", label: "High" },
          ]}
        />
        <Select
          required
          name="type"
          label="Task Type"
          options={[
            { value: "epic", label: "Epic" },
            { value: "task", label: "Task" },
          ]}
        />
        <Input label="Point" name="hour" required type="number" min="0" />
        <Input label="Give code" name="code" required placeholder="TSK-00" />
        <Button type="submit" padding="10px 25px" color="lightBlue">
          <Typography variant="medium" fontWeight="500">
            Create
          </Typography>
        </Button>
      </form>
    </div>
  );
}
