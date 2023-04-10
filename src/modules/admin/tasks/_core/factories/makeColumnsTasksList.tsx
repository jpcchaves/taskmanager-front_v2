import * as React from "react";
// import {ITasks} from "../../variables/tableDataTasks";
import { TableColumn } from "react-data-table-component";
import moment from "moment";

import {
  MdCheckCircleOutline,
  MdDelete,
  MdEditSquare,
  MdOutlineCancel,
} from "react-icons/md";
import { Box, Icon, Text } from "@chakra-ui/react";

interface IProps {
  handleEdit: (id: string) => void;
  toggleOpenDeleteModal: (id: string) => void;
}

export const makeColumnsTasksList = ({
  handleEdit,
  toggleOpenDeleteModal,
}: IProps): TableColumn<any>[] => {
  return [
    {
      name: "Tarefa",
      cell: (row) => {
        return row.concluded ? (
          <Text textDecoration="line-through">{row.task}</Text>
        ) : (
          <>{row.task}</>
        );
      },
      sortable: true,
    },
    {
      name: "Data de Criação",
      selector: (row) => moment(row.createdAt).format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: "Prazo",
      selector: (row) => moment(row.deadline).utc().format("DD/MM/YYYY"),
      sortable: true,
    },
    {
      name: "Situação",
      cell: (row) => {
        return (
          <Box display="flex" alignItems="center" justifyContent="center">
            {row.concluded ? (
              <MdCheckCircleOutline size={"22px"} />
            ) : (
              <MdOutlineCancel size={"22px"} />
            )}
          </Box>
        );
      },
    },
    {
      name: "",
      style: {
        justifyContent: "end",
      },
      cell: (cell) => {
        return (
          <Box
            className="actions-hidden"
            px="2"
            py="1"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Box onClick={() => handleEdit(cell.id)}>
              <Icon
                cursor="pointer"
                as={MdEditSquare}
                color="green.300"
                _hover={{
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                  transform: "scale(1.1)",
                  color: "green.500",
                }}
                boxSize={5}
              />
            </Box>
            <Box onClick={() => toggleOpenDeleteModal(cell.id)}>
              <Icon
                cursor="pointer"
                as={MdDelete}
                boxSize={5}
                color="red.300"
                _hover={{
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                  transform: "scale(1.1)",
                  color: "red.500",
                }}
              />
            </Box>
          </Box>
        );
      },
    },
  ];
};
