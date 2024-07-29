import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';

export default function Header(props) {

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand"
        to={props.isLoggedIn ? (props.isAdmin ? "/admin-dashboard" : "/student-dashboard") : "/"}>
        <h3>Online Exam Portal</h3>
      </Link>
      <ul className="navbar-nav mr-auto">

      </ul>
      {props.isLoggedIn ?
        <Row className='vertical-center'>
          <Col className='text-center pt-1 text-white text-nowrap'>
            {props.isAdmin ? "Admin" : props.studentName}
          </Col>
          <Col>
            <form className="form-inline my-2 my-lg-0" onSubmit={logout}>
              <button className="btn btn-primary my-2 my-sm-0" type="submit">
                Logout
              </button>
            </form>
          </Col>
        </Row> : ""}
    </nav>
  )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}