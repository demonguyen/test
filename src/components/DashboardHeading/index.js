import React from 'react';

function DashboardHeading() {
  return (
    <div className="col-lg-6">
      <h2 className="page-header-title">Danh sách tour</h2>
      <div className="page-header-btn-group">
        <button
          style={{ marginRight: '4px' }}
          type="button"
          className="btn btn-primary waves-effect waves-light"
        >
          Tạo
        </button>
        <button type="button" className="btn btn-white">
          Nhập file
        </button>
      </div>
    </div>
  );
}

export default DashboardHeading;
