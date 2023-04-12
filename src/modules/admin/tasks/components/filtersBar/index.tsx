import React, { useContext } from "react";
import { Box, Button, Select, SimpleGrid } from "@chakra-ui/react";
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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        justifyItems={{ sm: "center", md: "normal", lg: "normal" }}
        gap="10px"
        mb={"30px"}
      >
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
        <Box>
          <Button mr="2" variant="brand" type="submit" isLoading={isLoading}>
            Filtrar
          </Button>
          <Button variant="ghost" type="button" onClick={() => clearFilter()}>
            Limpar Filtro
          </Button>
        </Box>
      </SimpleGrid>
    </form>
  );
};

export default FiltersBar;
