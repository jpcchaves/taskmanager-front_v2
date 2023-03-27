import * as React from "react";
import {ITasks} from "../../variables/tableDataTasks";
import {TableColumn} from "react-data-table-component";
import {Link} from "react-router-dom";

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
                    <div className='w-25 d-flex justify-content-center align-items-center'>
                        <i className={row.concluded ? 'bi bi-check-circle' : 'bi bi-x-circle'}/>
                    </div>
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
                    <div className='actions-hidden'>
                        <div onClick={() => console.log('editar')}>
                            <Link
                                color='success'
                                to='/'
                            >
                                Editar{' '}
                            </Link>
                        </div>
                        <div onClick={() => console.log("editar")}>
                            <Link to='/' color='danger'>
                                excluir
                            </Link>
                        </div>
                    </div>
                );
            },
        },
    ];
}