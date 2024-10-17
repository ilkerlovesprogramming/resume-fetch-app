import React from 'react';

const Header = ({ user, noEditButton }) => {
  return (
    <div className="header">
      <div className="brand">
        <div className="logo-area">
          <div className="logo">
            <img className="vector-0" src="/ProfileView/vector-00.svg" alt="Logo" />
            <div className="depth-6-frame-0"></div>
          </div>
        </div>
        <div className="text-area">
          <div className="re-folio">ReFolio</div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="link-area">
          <div className="explore">
            <div className="explore2">Explore</div>
          </div>
        </div>
        <div className="auth-area">
          {!user.isAuthenticated ? (
            <>
              <button className="login-button">Log in</button>
              <button className="signup-button">Sign up</button>
            </>
          ) : (
            <>
              <div className="welcome">Welcome, {user.name}</div>
              <div className="logout-area">
                <div className="logout-button">
                  <div className="log-out">Log out</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;