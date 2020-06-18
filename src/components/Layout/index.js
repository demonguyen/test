import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';
import { UserContext } from '../../contexts/UserProvider';

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

function Layout({ children }) {
  const {
    user: { refreshToken },
  } = useContext(UserContext);
  const [showFullPage, setShowFullPage] = useState(false);
  return refreshToken ? (
    <main>
      <div className="page-wrapper">
        <div id="pcoded" className="pcoded">
          <div className="pcoded-container navbar-wrapper">
            <Navbar
              showFullPage={showFullPage}
              setShowFullPage={setShowFullPage}
            />
            <div className="pcoded-main-container">
              <div className="pcoded-wrapper">
                <SideBar showFullPage={showFullPage} />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : null;
}

export default Layout;
