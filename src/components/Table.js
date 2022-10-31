import React, { forwardRef, useState, useRef } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import MaterialTable from "@material-table/core";
import Modal from "./UI/Modal";
import Filter from "./Filter";
import Box from "@mui/material/Box";
import Card from "./UI/Card";

const Table = (props, tableRef) => {
  const { onDeleteScore, dataList, filterRef, getScoreByFilter } = props;
  const [modalOpenId, setModalOpenId] = useState(null);
  const handleConfirmDelete = () => {
    onDeleteScore(modalOpenId);
    setModalOpenId(null);
  };
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Filter onFilterChange={getScoreByFilter} ref={filterRef} />

        <MaterialTable
          style={{ width: "100%", boxShadow: "0 0 0 " }}
          tableRef={tableRef}
          title="Exam Score Sheet"
          columns={[
            { title: "Student Name", field: "name", sorting: false },
            { title: "Score", field: "score", sorting: false },
            { title: "Class", field: "class", sorting: false },
          ]}
          data={dataList ? dataList : []}
          actions={[
            {
              icon: forwardRef((props, ref) => (
                <DeleteOutline {...props} ref={ref} />
              )),
              tooltip: "Delete this record",
              onClick: (event, rowData) => setModalOpenId(rowData.id),
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            search: false,
            emptyValue: "No Record",
            toolbar: false,
            showTitle: false,
            pageSizeOptions: [],
            actionsCellStyle: {
              paddingRight: 10,
              paddingLeft: 10,
            },
          }}
        />
        <Modal
          open={!!modalOpenId}
          title="Are you sure about deleting this record?"
          content="You can not undo this."
          handleConfirm={handleConfirmDelete}
          handleCancel={() => setModalOpenId(null)}
        />
      </Box>
    </Card>
  );
};

export default forwardRef(Table);
