import React from "react";
import styles from "./wrapper.module.scss";

import { DragDropContext } from "react-beautiful-dnd";
import DroppableContainer from "./drop";
import { useTaskStore } from "@/stores";
import { removeFromList, addToList } from "@/helpers";

export default function Wrapper() {
  const set = useTaskStore((state) => state.setItems);
  const items = useTaskStore((state) => state.items);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (
      result.destination.droppableId === result.source.droppableId &&
      result.destination.index === result.source.index
    ) {
      console.log("same position");
      return;
    }

    const tempItems = [...items];

    const sourceKey = tempItems.findIndex(
      (l) => l.slug === result.source.droppableId
    );
    const destinationKey = tempItems.findIndex(
      (l) => l.slug === result.destination.droppableId
    );

    const sourceList = tempItems[sourceKey].items;

    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    tempItems[sourceKey].items = newSourceList;

    const destinationList = tempItems[destinationKey].items;

    tempItems[destinationKey].items = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    set([...tempItems]);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.contentWrapper}>
        <div className={styles.tasksWrapper}>
          {items.map((task, i) => (
            <DroppableContainer task={task} key={i} />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}
