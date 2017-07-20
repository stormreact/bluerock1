import React from "react";
import * as Table from "reactabular-table";

const rows = [
  {
    id: 100,
    rank: "1",
    threadId: "14000123",
    by: "pitt",
    score: "50",
    title: "Hola"
  },
  {
    id: 101,
    rank: "2",
    threadId: "14000124",
    by: "mtl",
    score: "40",
    title: "Ciao"
  }
];

const columns = [
  {
    property: "rank",
    header: {
      label: "Rank",
    }
  },
  {
    property: "threadId",
    header: {
      label: "ThreadId",
    }
  },
  {
    property: "by",
    header: {
      label: "By",
    }
  },
  {
    property: "score",
    header: {
      label: "Score",
    }
  },
  {
    property: "title",
    header: {
      label: "Title",
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
