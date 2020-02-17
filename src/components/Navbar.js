import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  state = {
    brandTitle: `Agency Site`,
    navLinks: [
      {
        id: 1,
        to: `/`,
        text: `Home`
      },
      {
        id: 2,
        to: `/products`,
        text: `Products`
      },
      {
        id: 3,
        to: `/services`,
        text: `Services`
      },
      {
        id: 4,
        to: `/blog`,
        text: `Blog`
      },
      {
        id: 5,
        to: `/about`,
        text: `About`
      },
      {
        id: 6,
        to: `/contact`,
        text: `Contact`
      },
    ]
  }
  render() {
    const { brandTitle, navLinks } = this.state;
    const listItems = navLinks.length ? (
      navLinks.map(link => {
        return (
          <li className="nav-item">
            <NavLink className="nav-link" exact to={link.to}>{link.text}</NavLink>
          </li>
        )
      })
    ) : (
      <span>Loading...</span>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">{ brandTitle }</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {listItems}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default Navbar;