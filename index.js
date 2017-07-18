import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ItemThreadList from './containers/ItemThreadList';
import configureStore from './store/configureStore';

/* Table Imports */

import TableFriends from "./components/TableFriends";
import TableFamily from "./components/TableFamily";
import TableCrud from "./components/TableCrud";
import { Flex, Box } from "grid-styled";

/* Tab Imports */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './public/stylesheets/react-tabs.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Tabs>
    <TabList>
      <Tab>Hn</Tab>
      <Tab>TableBasic</Tab>
      <Tab>TableCrud</Tab>
    </TabList>
  <TabPanel>
    <ItemThreadList />
  </TabPanel>
  <TabPanel>
  <Flex>
    <Box width={1 / 2} px={2}>
      <TableFriends />
    </Box>
    <Box width={1 / 2} px={2}>
      <TableFamily />
    </Box>
  </Flex>
  </TabPanel>
  <TabPanel>
    <TableCrud />
  </TabPanel>
  </Tabs>
  </Provider>,
  document.getElementById('root')
);
