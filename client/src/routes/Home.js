import React, { Component } from "react";
import User from '../auth/profile';
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>HOME - ORANGE</h2>
        <p>This is for all users with role orange including Stuff and Contact.</p>
        <User />
      </div>
    );
  }
}
 
export default Home;