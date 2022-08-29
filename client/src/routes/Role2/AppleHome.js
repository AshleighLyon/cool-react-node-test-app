import React, { Component } from "react";
import User from '../../auth/profile';
 
class AppleHome extends Component {
  render() {
    return (
      <div>
        <h2>APPLE HOME</h2>
        <p>This screen is visible only to Users with Role Apple. <br></br>
            Role apple users cannot see any other screens (home, stuff, contact) except this one.</p>
        <User />
      </div>
    );
  }
}
 
export default AppleHome;