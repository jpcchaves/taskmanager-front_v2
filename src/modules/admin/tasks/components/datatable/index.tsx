import React from "react";
import DatatableComponent, {
  IDataTableProps,
} from "react-data-table-component";
import "./styles/_datatable.scss";
import NoDataComponent from "./components/noDataComponent";

interface IProps extends IDataTableProps<any> {}

export const Datatable = ({ columns, data, ...rest }: IProps) => {
  return (
    <div className="table-container">
      <DatatableComponent
        columns={columns}
        data={data}
        pagination
        {...rest}
        noDataComponent={null}
      />
      {data.length === 0 && <NoDataComponent />}{" "}
      {/*TODO: Make component of no Data */}
    </div>
  );
};
