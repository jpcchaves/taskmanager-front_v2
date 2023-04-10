import React, { useContext } from "react";
import {
  Button,
  Checkbox,
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
import { useNavigate } from "react-router-dom";
import { TaskCreateAndUpdate } from "../../../../../types/tasks/TaskCreateAndUpdate";

interface IProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const TasksFormModal = ({ id, isOpen, onClose }: IProps) => {
  const {
    isLoading,
    create,
    update,
    task: taskById,
    clearTask,
  } = useContext(TasksContext);
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      task: taskById ? taskById.task : "",
      deadline: taskById
        ? moment(taskById.deadline).format("YYYY-MM-DDTHH:mm")
        : "",
      concluded: taskById ? taskById.concluded : false,
    },
    validationSchema: tasKValidation,
    onSubmit: async (values) => {
      const { task, concluded } = values;
      const formattedDate = moment(values.deadline)
        .utc()
        .format("YYYY-MM-DDTHH:mm")
        .toString();

      const valuesToSubmit: TaskCreateAndUpdate = {
        task,
        deadline: formattedDate,
        concluded,
      };

      if (id) {
        await update({ id, data: valuesToSubmit, onClose, validation });
      } else {
        await create({ data: valuesToSubmit, onClose, validation });
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
    <Modal
      isOpen={isOpen}
      onClose={() => handleCloseModal()}
      isCentered
      size={"2xl"}
    >
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

            {id ? (
              <FormControl ml={1} mt={4}>
                <Checkbox
                  colorScheme="brandScheme"
                  defaultChecked={taskById?.concluded}
                  name="concluded"
                  onChange={(e) => {
                    validation.handleChange(e);
                  }}
                >
                  Marcar como concluida
                </Checkbox>
              </FormControl>
            ) : null}
          </ModalBody>

          <ModalFooter>
            <Button onClick={() => handleCloseModal()} isLoading={isLoading}>
              Cancelar
            </Button>
            <Button variant="brand" ml={3} type="submit" isLoading={isLoading}>
              {id ? "Editar" : "Criar"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default TasksFormModal;
