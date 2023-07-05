import { ReactNode } from "react";
import FinishedCheckbox from "../../atoms/checkboxes/FinishedCheckbox/FinishedCheckbox";
import TaskLabel from "../../atoms/labels/TaskLabel/TaskLabel";
import DeleteTaskButton from "../../atoms/buttons/DeleteTaskButton/DeleteTaskButton";
import style from "./index.module.scss";

interface Task {
  children: ReactNode;
  id: string;
}
export default function Task(props: Task): React.ReactElement<Task> {
  return (
    <div className={style.task}>
      <FinishedCheckbox />
      <TaskLabel htmlFor={`task_label_${props.id}`}>{props.children}</TaskLabel>
      <DeleteTaskButton />
    </div>
  );
}
