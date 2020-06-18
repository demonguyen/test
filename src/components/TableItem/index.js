import React from 'react';

function TableItem() {
  return (
    <tr>
      <td>
        <div className="checkbox-zoom zoom-default">
          <label>
            <input type="checkbox" defaultValue />
            <span className="cr">
              <i className="cr-icon feather" />
            </span>
          </label>
        </div>
      </td>
      <td>
        <div className="move-icon">
          <i className="ti-move" />
        </div>
      </td>
      <td>Lorem ipsum dolor sit amet consectetur.</td>
      <td>Lorem, ipsum.</td>
      <td>Lorem, ipsum.</td>
      <td>Lorem, ipsum.</td>
      <td>Lorem, ipsum.</td>
      <td>System Architect</td>
      <td>60.000.000 đ</td>
      <td>Lorem, ipsum</td>
    </tr>
  );
}

export default TableItem;
