import React from "react";
import defaultUser from "@/assets/user.png";
import Level1 from "@/icons/levels/level1";
import Level2 from "@/icons/levels/level2";
import Level3 from "@/icons/levels/level3";
import Task from "@/icons/task";
import styles from "./wrapper.module.scss";

import Epic from "@/icons/epic";
import Typography from "@/components/Typography";
import { Draggable } from "react-beautiful-dnd";

const Levels = {
  1: Level1,
  2: Level2,
  3: Level3,
};

const Types = {
  task: Task,
  epic: Epic,
};

const getItemStyle = (isDragging, draggableStyle) => ({
  zIndex: isDragging ? "100" : "0",
  backgroundColor: isDragging ? "white" : "transparent",
  ...draggableStyle,
});

export default function DraggableContainer({ log, index, prefix }) {
  return (
    <Draggable draggableId={`${prefix}-${index}`} index={index}>
      {(provided, snapshot) => {
        const Level = Levels[+log.level < 4 ? log.level : 1];
        const Type = Types[log.type];

        return (
          <div
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={styles.log}
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Typography color="primary" fontWeight="600">
              {log.text}
            </Typography>
            <div className={styles.action}>
              <div className={styles.taskType}>
                <div
                  className={`${styles.taskTypeIcon} ${
                    styles[log.type + "Color"]
                  }`}
                >
                  <Type />
                </div>
                <Typography color="gray" fontWeight="300">
                  {log.code}
                </Typography>
              </div>
              <div className={styles.taskAuthor}>
                <Level />
                <div className={styles.hours}>
                  <Typography color="darkPrimary">{log.hour}</Typography>
                </div>
                <img className={styles.author} src={defaultUser} />
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
