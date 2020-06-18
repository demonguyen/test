import classnames from 'classnames';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useContext, useRef, useState } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserProvider';
import useClickOutside from '../../utils/useClickOutside';
import useEscKeydown from '../../utils/useEscKeydown';
import ManagerAccount from '../ManagerAccount';

Navbar.propTypes = {
  showFullPage: PropTypes.bool.isRequired,
  setShowFullPage: PropTypes.func.isRequired,
};

function Navbar({ showFullPage, setShowFullPage }) {
  const {
    user: { email, photoURL, displayName },
  } = useContext(UserContext);
  const [indexTab, setIndexTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const refSub = useRef();
  const refMain = useRef();

  const renderPhoto = () => {
    const defaultImage = (
      <Avatar name={email && email[0].toUpperCase()} size="35" />
    );
    return photoURL ? (
      <img src={photoURL} height={40} className="rounded-circle" alt="" />
    ) : (
      defaultImage
    );
  };
  const handleTogglePopover = () => {
    setIsOpen(!isOpen);
  };

  useEscKeydown(() => {
    setIsOpen(false);
  });

  useClickOutside(refSub, refMain, () => {
    setIsOpen(false);
  });

  /* Mock menu data */
  const MENUS = [
    {
      name: 'Sản phẩm',
      slug: '/',
    },
    {
      name: 'Bài viết',
      slug: '/',
    },
    {
      name: 'Lịch',
      slug: '/',
    },
    {
      name: 'Liên hệ',
      slug: '/',
    },
    {
      name: 'Kế toán',
      slug: '/',
    },
    {
      name: 'Sales',
      slug: '/',
    },
    {
      name: 'Thiết lập',
      slug: '/',
    },
    {
      name: 'Profile',
      slug: '/profile',
    },
  ];
  const renderMenus = () =>
    _.map(MENUS, ({ name, slug }, index) => (
      <li
        key={name}
        className={classnames('nav-item', { active: index === indexTab })}
      >
        <Link className="nav-link" to={slug}>
          {name}
        </Link>
      </li>
    ));

  return (
    <nav className="navbar header-navbar pcoded-header">
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <a href="/">
            <img
              className="img-fluid"
              src={require('../../assets/images/logo.png')}
              alt="Theme-Logo"
            />
          </a>
          <span
            onClick={() => setShowFullPage(!showFullPage)}
            className="mobile-menu"
            id="mobile-collapse"
          >
            <i
              className={`feather icon-menu icon-toggle-${
                showFullPage ? 'left' : 'right'
              }`}
            />
          </span>
          <a href="/" className="mobile-options waves-effect waves-light">
            <i className="feather icon-more-horizontal" />
          </a>
        </div>
        <div className="navbar-container container-fluid">
          <ul className="nav-left">{renderMenus()}</ul>
          <ul className="nav-right">
            <li
              ref={refMain}
              onClick={handleTogglePopover}
              className="user-profile header-notification"
            >
              <div className="dropdown-primary dropdown">
                <div className="dropdown-toggle" data-toggle="dropdown">
                  {renderPhoto()}
                  <span>{displayName || email}</span>
                  <i className="feather icon-chevron-down" />
                </div>
                {isOpen && <ManagerAccount refSub={refSub} />}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
