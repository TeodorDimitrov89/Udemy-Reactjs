import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
  import './Courses.css';
  import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    // loadCourseHandler = (id, title) => {
    //     //pathname: '/posts/' + id
    //     this.props.history.push({pathname: `/courses/${id}`, id, title})
    // }

    render () {
        let courses = this.state.courses.map( course => {
            return (
                // <article 
                //   key={course.id} className="Course"
                //   onClick={() => this.loadCourseHandler(course.id, course.title)}>{course.title}
                // </article>
                <Link key={course.id}
                    to={
                        {
                            pathname: `${this.props.match.url}/course/${course.id}`,
                            search: `?title=${course.title}`
                        }
                    }>
                    <article className="Course">{course.title}</article>
                </Link>
            );
        } )
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses"> 
                    {courses}
                </section>
                <Route path="/courses/course/:id" component={Course}></Route>
            </div>
        );
    }
}

export default Courses;