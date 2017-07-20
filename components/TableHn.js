import React from "react";
import * as Table from "reactabular-table";

const rows = [
  {
    id: 100,
    name: "Ron",
    tools: "Furniture",
    city: "pitt"
  },
  {
    id: 101,
    name: "Iris",
    tools: "Laundry",
    city: "mtl"
  }
];

const columns = [
  {
    property: "name",
    header: {
      label: "Name",
    }
  },
  {
    property: "tools",
    header: {
      label: "Tool",
    }
  },
  {
    property: "city",
    header: {
      label: "City",
    }
  }
];

class TableHn extends React.Component {
  render() {
    return (
      <Table.Provider
        className="pure-table pure-table-striped"
        columns={columns}
      >
        <Table.Header />

        <Table.Body rows={rows} rowKey="id" />
      </Table.Provider>
    );
  }
}

export default TableHn;
