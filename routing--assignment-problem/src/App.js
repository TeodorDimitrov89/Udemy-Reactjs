import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import './App.css';
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";
class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li style={{backgroundColor: '#a2cba2'}}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li style={{backgroundColor: '#a2cba2'}}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li style={{backgroundColor: '#a2cba2'}}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li>Load the "Course" component as a nested component of "Courses"</li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          {/* <Courses /> */}
          <nav>
              <ul>
                  <li style={{display:"inline-block", listStyle:"none", margin:"0"}}>
                      <NavLink style={{textDecoration:'none', margin: '10px'}}
                      to="/courses" exact >Courses
                      </NavLink>
                  </li>
                  <li style={{display:"inline-block", listStyle:"none", margin:"0"}}>
                    <NavLink style={{textDecoration:'none'}} to="/users">Users</NavLink>
                  </li>
              </ul>
            </nav>
          <Switch>
              
              {/* <Route path="/courses/:id" exact  component={Course}></Route> */}
              <Route path="/users" component={Users}></Route>
              {/* <Route path="/courses/course/:id" component={Course}></Route> */}
              <Route path="/courses"  component={Courses}></Route>
              <Redirect from="/all-courses" to="/courses" />
              <Route render={() => <h1>404 Page not Found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
