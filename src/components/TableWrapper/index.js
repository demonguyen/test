import classnames from 'classnames';
import React from 'react';
import TableList from '../TableList';
import TableItem from '../TableItem';

function TableWrapper({ showFullPage, children }) {
  return (
    <div
      className={classnames('pcoded-content', {
        'pcoded-content-fluid': showFullPage,
      })}
    >
      <div className="pcoded-inner-content">
        <div className="main-body">
          <div className="page-wrapper">
            {children}
            <div className="page-body">
              <div className="row">
                <TableList>
                  <TableItem />
                  <TableItem />
                </TableList>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableWrapper;
