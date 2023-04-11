import React, { useContext } from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import { useFormik } from "formik";
import { TasksContext } from "../../../../../contexts/tasks/context/TasksContext";

const FiltersBar = () => {
  const { getTasksByFilter, clearFilter, isLoading } = useContext(TasksContext);

  const validation = useFormik({
    enableReinitialize: false,
    initialValues: {
      situation: "1",
    },
    onSubmit: async (values) => {
      await getTasksByFilter(values.situation);
    },
  });

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        validation.handleSubmit();
        return false;
      }}
    >
      <Flex gap={2}>
        <Select
          name="situation"
          colorScheme="brandScheme"
          onChange={validation.handleChange}
        >
          <option disabled value="" hidden>
            Selecione para Filtrar
          </option>
          <option value="1">Concluidas</option>
          <option value="2">Não Concluídas</option>
        </Select>
        <Button variant="brand" px={7} type="submit" isLoading={isLoading}>
          Filtrar
        </Button>
        <Button
          variant="ghost"
          px={10}
          type="button"
          onClick={() => clearFilter()}
        >
          Limpar Filtro
        </Button>
      </Flex>
    </form>
  );
};

export default FiltersBar;
