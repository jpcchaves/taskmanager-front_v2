import * as React from "react";
import {ITasks} from "../../variables/tableDataTasks";
import {TableColumn} from "react-data-table-component";

import {MdCheckCircleOutline, MdDelete, MdEditSquare, MdOutlineCancel} from 'react-icons/md'
import {Box, Icon} from "@chakra-ui/react";

interface IProps {
}

export const makeColumnsTasksList = (): TableColumn<ITasks>[] => {
    return [
        {
            name: 'Tarefa',
            selector: (row) => row.task,
            sortable: true,
        },
        {
            name: 'Data de Criação',
            selector: (row) => row.createdAt,
            sortable: true,
        },
        {
            name: 'Prazo',
            selector: (row) => row.deadline,
            sortable: true,
        },
        {
            name: 'Situação',
            cell: (row) => {
                return (
                    <Box display='flex' alignItems='center' justifyContent='center'>
                        {row.concluded ? <MdCheckCircleOutline size={'22px'}/> : <MdOutlineCancel size={"22px"}/>}
                    </Box>
                );
            },
        },
        {
            name: '',
            style: {
                justifyContent: 'end',
            },
            cell: (cell) => {
                return (
                    <Box className='actions-hidden' px='2' py='1' justifyContent='center' alignItems='center' gap='2'>
                        <Box onClick={() => console.log('editar')}>
                            <Icon
                                cursor='pointer'
                                as={MdEditSquare}
                                color='green.300'
                                _hover={{
                                    transitionDuration: '0.2s',
                                    transitionTimingFunction: "ease-in-out",
                                    transform: "scale(1.1)",
                                    color: 'green.500'
                                }}
                                boxSize={5}>
                                Editar{' '}
                            </Icon>
                        </Box>
                        <Box onClick={() => console.log("editar")}>
                            <Icon
                                cursor='pointer'
                                as={MdDelete}
                                boxSize={5}
                                color='red.300'
                                _hover={{
                                    transitionDuration: '0.2s',
                                    transitionTimingFunction: "ease-in-out",
                                    transform: "scale(1.1)",
                                    color: 'red.500'
                                }}>
                                excluir
                            </Icon>
                        </Box>
                    </Box>
                );
            },
        },
    ];
}