import React, { Component } from 'react';
import HeaderComponent from '../../module/header/header-component';

class Header extends Component {
  render() {
     return (
      <HeaderComponent
         data={this.props.data}
      />
     )
  }
}

export default Header;
