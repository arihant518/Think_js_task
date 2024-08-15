import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
    {
      name: "date",
      label: "Magna",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category1",
      label: "Ultrices",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category2",
      label: "Ornare",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "category3",
      label: "Erat",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "value",
      label: "Nisi",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "count",
      label: "Facilisis",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "status",
      label: "Elit",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "detail",
      label: "Senectus",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "country",
      label: "Felis",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "remark",
      label: "Cursus",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];
  

  const data = [
    { date: "23/08/30", category1: "Consectetur", category2: "Vestibulum", category3: "Egestas", value: "154.181", count: 3, status: "N/A", detail: "Pretium", country: "Turkey", remark: "Nulla" },
    { date: "14/08/70", category1: "Consectetur", category2: "Vestibulum", category3: "Egestas", value: "154.181", count: 1, status: "N/A", detail: "Pretium", country: "Australia", remark: "Nulla" },
    { date: "11/06/55", category1: "Consectetur", category2: "Vestibulum", category3: "Egestas", value: "154.181", count: 5, status: "N/A", detail: "Pretium", country: "India", remark: "Nulla" },
    { date: "20.07.28", category1: "Consectetur", category2: "Vestibulum", category3: "Egestas", value: "154.181", count: 51, status: "N/A", detail: "Pretium", country: "Nigeria", remark: "Nulla" },
    { date: "25/11/27", category1: "Consectetur", category2: "Vestibulum", category3: "Egestas", value: "154.181", count: 32, status: "N/A", detail: "Pretium", country: "Switzerland", remark: "Nulla" },
  ];
  

export const tableOptions = {
    elevation: 0,
    filterType: 'multiselect',
    selectableRows: 'none',
    selectableRowsHeader: false,
    download: true,
    print: true,
    scrollY: '300px',
    responsive: 'standard',
    searchPlaceholder: 'Enter search key',
    searchAlwaysOpen: true,
    rowsPerPageOptions: [10, 20, 30],
}


export const MuiDataTable = () => {
  return (
    <div>
      <MUIDataTable
        title={"Data List"}
        data={data}
        columns={columns}
        options={tableOptions}
      />
    </div>
  );
};
