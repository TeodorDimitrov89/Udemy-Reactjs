import React, { Component } from 'react';
import { 
    Route,
    NavLink,
    Switch,
} from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import './Blog.css';

const asyncNewPost = asyncComponent(() => {
    return import(/* webpackChunkName: "asyncNewPost" */'./NewPost/NewPost');
})




// import NewPost from './NewPost/NewPost';

// import Post from '../../components/Post/Post';


class Blog extends Component {
   
    state = {
        auth: true
    }

   
    render () {
        return (
            <div  className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink 
                                    to="/posts" 
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                    }}
                                    >Posts
                                </NavLink>
                                </li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?search=1'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    { this.state.auth? <Route path="/new-post"  component={asyncNewPost}/>: null }
                    <Route path="/posts" component={Posts}/>
                    {/* <Redirect from="/" to="/posts" /> */}
                    <Route render={()=> <h1>Not Found</h1>} />
                </Switch>
               
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost  />
                </section> */}
            </div>
        );
    }
}

export default Blog;