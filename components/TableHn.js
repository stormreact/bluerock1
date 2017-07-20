import React from "react";
import * as Table from "reactabular-table";
import { connect } from 'react-redux';
import TableThread from './TableThread';
import { MAX_THREAD_NUMBER } from '../constants';
import { fetchItemThreadsIfNeeded } from '../actions';

const rows = [
  {
    id: 100,
    rank: "1",
    threadId: "14000123",
    by: "pitt",
    score: "50",
    title: "Hola Mike"
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

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchItemThreadsIfNeeded());
    }

    render() {

        const { ids, selectedPath, page, isLoading } = this.props;
        let iThread = [],
            rank = 1 + MAX_THREAD_NUMBER * (page - 1)

        for (let [ key, value ] of ids) {
            iThread = [...iThread, (
                <TableThread key={rank} selectedPath={selectedPath} rank={rank++} threadId={key} context={value} />
            )];
        }

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

export default connect(state => ({
    ids: state.thread.ids || new Map(),
    isLoading: state.thread.isLoading === true,
    selectedPath: state.router.location.pathname.replace('/',''),
    page: parseInt(state.router.location.query.p) || 1
}))(TableHn);
