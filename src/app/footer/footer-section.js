import React, { Component } from 'react';
import FooterComponent from '../../module/footer/footer-component';

class Footer extends Component {
  render() {
    return (
      <FooterComponent
        data={this.props.data}
      />
    )
  }
}
export default Footer;
