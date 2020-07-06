import React, { Component } from 'react';
import ContactComponent from '../../module/contact/contact-component';

class Contact extends Component {
  render() {
      return (
         <ContactComponent
            data={this.props.data}
         />
      )
   }
}

export default Contact;
