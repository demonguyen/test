import PropTypes from 'prop-types';
import React from 'react';

TableList.propTypes = {
  children: PropTypes.element.isRequired,
};

function TableList({ children }) {
  return (
    <div className="col-sm-12">
      <div className="card">
        <div className="card-block">
          <div className="table-responsive dt-responsive">
            <table
              id="dom-jqry"
              className="table table-striped table-bordered nowrap"
            >
              <thead>
                <tr>
                  <th>
                    <div className="checkbox-zoom zoom-default">
                      <label htmlFor="select">
                        <input id="select" name="select" type="checkbox" />
                        <span className="cr">
                          <i className="cr-icon feather" />
                        </span>
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className="move-icon">
                      <i className="ti-move" style={{ cursor: 'inherit' }} />
                    </div>
                  </th>
                  <th>Tên</th>
                  <th>Loại tour</th>
                  <th>Điểm đến</th>
                  <th>Lịch trình</th>
                  <th>Số chỗ nhận</th>
                  <th>Phương tiện</th>
                  <th>Giá từ</th>
                  <th>Trạng thái</th>
                </tr>
              </thead>
              <tbody>{children}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableList;
