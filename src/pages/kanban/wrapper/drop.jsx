import React from "react";
import styles from "./wrapper.module.scss";
import Typography from "@/components/Typography";
import { Droppable } from "react-beautiful-dnd";
import DraggableContainer from "./drag";
import BackLog from "@/icons/task/backlog";
import Todo from "@/icons/task/todo";
import InProgress from "@/icons/task/inprogress";
import Test from "@/icons/task/test";

const Icons = {
  backlog: BackLog,
  todo: Todo,
  inprogress: InProgress,
  test: Test,
};

export default function DroppableContainer({ task }) {
  const Icon = Icons[task.slug] ?? Icons["backlog"];
  return (
    <div className={styles.task}>
      <div className={styles.taskHead}>
        <div className={styles.taskLogo}>
          <Icon size="16" />
        </div>
        <Typography variant="medium" color="darkPrimary" fontWeight="600">
          {task.name}
        </Typography>
        <div className={styles.taskCount}>
          <Typography color="blue" fontWeight="500">
            {task.items.length}
          </Typography>
        </div>
      </div>
      <Droppable droppableId={task.slug}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.taskLogs}
          >
            {task.items.map((item, index) => (
              <DraggableContainer
                prefix={task.slug}
                key={index}
                log={item}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
