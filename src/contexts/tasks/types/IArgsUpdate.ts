import { TaskCreateAndUpdate } from "../../../types/tasks/TaskCreateAndUpdate";
import { FormikValues } from "formik";
import { NavigateFunction } from "react-router-dom";

export interface IArgsUpdate {
  id: string;
  data: TaskCreateAndUpdate;
  onClose: () => void;
  validation: FormikValues;
  navigate: NavigateFunction;
}
