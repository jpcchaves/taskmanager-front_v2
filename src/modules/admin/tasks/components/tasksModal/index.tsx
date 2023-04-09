import React, { useContext } from "react";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { TasksContext } from "../../../../../contexts/tasks/context/TasksContext";
import { tasKValidation } from "../../utils/validation/taskValidationSchema";
import moment from "moment";
import { TaskCreate } from "../../../../../types/tasks/TaskCreate";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const TasksFormModal = ({ id, isOpen, onClose }: IProps) => {
  const { isLoading, create, task, clearTask } = useContext(TasksContext);
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      task: task ? task.task : "",
      deadline: task
        ? moment(task.deadline).utc().format("YYYY-MM-DDThh:mm")
        : "",
      concluded: task ? task.concluded : false,
    },
    validationSchema: tasKValidation,
    onSubmit: async (values) => {
      const { task, concluded } = values;
      const formattedDate = moment(values.deadline)
        .utc()
        .format("YYYY-MM-DDTHH:mm")
        .toString();

      const valuesToSubmit: TaskCreate = {
        task,
        deadline: formattedDate,
        concluded,
      };

      if (id) {
        //
      } else {
        try {
          await create(valuesToSubmit, onClose, validation);
        } catch (e) {
          // console.log(e);
        }
      }
    },
  });

  const handleCloseModal = () => {
    clearTask();
    navigate("/tarefas");
    validation.resetForm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
      <ModalOverlay />
      <ModalContent>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <ModalHeader>{id ? "Editar Tarefa" : "Criar Tarefa"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl
              isInvalid={!!(validation.touched.task && validation.errors.task)}
            >
              <FormLabel>Tarefa</FormLabel>
              <Input
                variant="auth"
                placeholder="Tarefa"
                name="task"
                onChange={(e) => {
                  validation.handleChange(e);
                }}
                value={validation.values.task || ""}
                isInvalid={
                  !!(validation.touched.task && validation.errors.task)
                }
              />
              <FormErrorMessage ml={2}>
                {validation.errors.task}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              mt={4}
              isInvalid={
                !!(validation.touched.deadline && validation.errors.deadline)
              }
            >
              <FormLabel>Prazo</FormLabel>
              <Input
                variant="auth"
                type="datetime-local"
                name="deadline"
                onChange={(e) => {
                  validation.handleChange(e);
                }}
                value={validation.values.deadline || ""}
                isInvalid={
                  !!(validation.touched.deadline && validation.errors.deadline)
                }
              />
              <FormErrorMessage ml={2}>
                {validation.errors.deadline}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              type="submit"
              isLoading={isLoading}
            >
              {id ? "Editar" : "Criar"}
            </Button>
            <Button onClick={() => handleCloseModal()} isLoading={isLoading}>
              Cancelar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default TasksFormModal;
