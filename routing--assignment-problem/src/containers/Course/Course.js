import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: ''
    }
    // componentDidMount(){ 
    //     this.setState({
    //         title: this.props.location.search.split('=')[1].replaceAll(/%20/gi, ' ')
    //     })
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     let title =  this.props.location.search.split('=')[1].replaceAll(/%20/gi, ' ');
    //     if (prevState.title !== title) {
    //         this.setState({
    //             title: title
    //         })
    //       }
    // }

    componentDidMount(){ 
        // let title = this.props.location.search.split('=')[1].replaceAll(/%20/gi, ' ');
        const query = new URLSearchParams(this.props.location.search)
        for (const param of query.entries()) {
            this.setState({
                title: param[1]
            })
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        const query = new URLSearchParams(this.props.location.search)
        for (const param of query.entries()) {
            if (prevState.title !== param[1]) {
                this.setState({
                    title: param[1]
                })
              }
        }
        
    }
    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;