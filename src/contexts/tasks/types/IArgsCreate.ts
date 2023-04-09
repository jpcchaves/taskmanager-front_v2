import { TaskCreateAndUpdate } from "../../../types/tasks/TaskCreateAndUpdate";
import { FormikValues } from "formik";

export interface IArgsCreate {
  data: TaskCreateAndUpdate;
  onClose: () => void;
  validation: FormikValues;
}
