import  React, {Component} from "react";
import axios from '../../../axios';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Post.css';
import FullPost from '../FullPost/FullPost';
class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
   
}

componentDidMount () {
  axios.get('/posts')
      .then(response => {
          const posts = response.data.slice(0,4);
          const updatedPosts = posts.map(post => {
              return {
                  ...post,
                  author: 'Teo'
              }
          })
          this.setState({posts: updatedPosts})
      }).catch(error => {
          console.log(error);
          // this.setState({error: true})
      });
}



clickSelectedPostHandler = (id) => {
  this.props.history.push({pathname: '/posts/' + id});
  // this.props.history.push('/' + id);

  // this.setState({
  //     selectedPostId: id
  // })
}
  render() {
    let posts = <p>Something went wrong!</p>
    console.log(this.props)
    if(!this.state.error) {
        posts = this.state.posts.map(post => {
            return (
                // <Link to={'/' + post.id} key={post.id}>
                  <Post
                      key={post.id}
                      title={post.title}
                      author={post.author}
                      clicked={() => this.clickSelectedPostHandler(post.id)} />
                // </Link>
            )
        })
    }
    return (
      <div>
       
        <section className="Posts">
         {posts}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
      </div>
      
    )
  }
}

export default Posts;