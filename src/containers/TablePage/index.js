import React, { useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import Layout from '../../components/Layout';
import TableWrapper from '../../components/TableWrapper';

function TablePage() {
  const [searchValue, setSearchValue] = useState('');

  const [indexOfList, setIndexOfList] = useState({
    indexOfFirstList: 0,
    indexOfLastList: 19,
  });

  const totalList = 120;
  const handleSetIndexOfList = (action) => {
    const { indexOfFirstList, indexOfLastList } = indexOfList;
    if (action === 'next') {
      setIndexOfList({
        indexOfFirstList: indexOfFirstList + 20,
        indexOfLastList: indexOfLastList + 20,
      });
    } else {
      setIndexOfList({
        indexOfFirstList: indexOfFirstList - 20,
        indexOfLastList: indexOfLastList - 20,
      });
    }
  };

  /* const items = []; // items equal data
  const filterItems = () => {
    items.filter((item) => {
      return Object.keys(item).some(
        (key) => item[key].toString().search(searchValue) !== -1,
      );
    });
  }; */

  return (
    <Layout>
      <TableWrapper>
        <DashboardHeader
          {...indexOfList}
          totalList={totalList}
          handleSetIndexOfList={handleSetIndexOfList}
          setSearchValue={setSearchValue}
        />
      </TableWrapper>
    </Layout>
  );
}

export default TablePage;
