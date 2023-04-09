import { TaskCreateAndUpdate } from "../../../types/tasks/TaskCreateAndUpdate";
import { FormikValues } from "formik";

export interface IArgsUpdate {
  id: string;
  data: TaskCreateAndUpdate;
  onClose: () => void;
  validation: FormikValues;
}
