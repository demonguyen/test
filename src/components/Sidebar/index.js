import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

SideBar.propTypes = {
  showFullPage: PropTypes.bool.isRequired,
};

function SideBar({ showFullPage }) {
  const [tabIndex, setTabIndex] = useState(null);
  /* Mock data */
  const SIDEBAR_TABS = [
    {
      main: 'Tour',
      sub: [
        'Danh sách Tour',
        'Quản lý đánh giá về Tour',
        'Quản lý giới thiệu nhóm Tour',
      ],
    },
    {
      main: 'Combo / Voucher',
      sub: [
        'Danh sách Tour',
        'Quản lý đánh giá về Tour',
        'Quản lý giới thiệu nhóm Tour',
      ],
    },
    {
      main: 'Khách Sạn',
      sub: [
        'Danh sách Tour',
        'Quản lý đánh giá về Tour',
        'Quản lý giới thiệu nhóm Tour',
      ],
    },
  ];

  const handleSetCurrentTab = (index) => {
    console.log(tabIndex, index);
    if (tabIndex === index) {
      setTabIndex(null);
    } else {
      setTabIndex(index);
    }
  };

  const renderSidebarTabs = () =>
    _.map(SIDEBAR_TABS, ({ main, sub }, index) => (
      <li
        key={main}
        className={classnames('pcoded-hasmenu', { active: index === tabIndex })}
      >
        <div
          onClick={() => handleSetCurrentTab(index)}
          className="waves-effect waves-dark"
        >
          <span className="pcoded-mtext">{main}</span>
          <i
            className={index === tabIndex ? 'ti-angle-down' : 'ti-angle-right'}
          />
        </div>
        <ul className="pcoded-submenu">
          {_.map(sub, (item) => (
            <li key={item}>
              <a href="/" className="waves-effect waves-dark">
                <span className="pcoded-mtext">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </li>
    ));

  return (
    <nav
      className={classnames('pcoded-navbar', {
        hide: showFullPage,
      })}
    >
      <div className="nav-list">
        <div className="pcoded-inner-navbar main-menu">
          <ul className="pcoded-item pcoded-left-item">
            {renderSidebarTabs()}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default SideBar;
