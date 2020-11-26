import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }
    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }
    loadData() {
        if(this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
                axios.get('/posts/' + this.props.match.params.id)
                    .then(response => {
                        const post = response.data;
                        this.setState({loadedPost: post})
                    })
                    
            }
        }
    }

    deletePostHandler = () =>{
        if(this.props.match.params.id) {
            axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
               console.log(response)
            });
        }
    }
    render () {
        let post = <p>Please select a Post!</p>;
        
        if(this.props.match.params.id) {
            post = <p>Loading ...</p>
        }
        
        if(this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );  
        }
        
        
        return post;
    }
}

export default FullPost;