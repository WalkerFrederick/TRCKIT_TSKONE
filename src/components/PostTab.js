import React from 'react';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CircularProgress from '@material-ui/core/CircularProgress';


import '../App.css';
class PostTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasLoaded: false,
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
            res.json().then(data => {
                this.setState({hasLoaded: true, posts: data})
            })
        })
    }


    render() {
        if(this.state.hasLoaded === false) {
            return (
                  <div className="loader-container">
                    <CircularProgress  />
                  </div>
              );
        } else {
        return (
            <div className="PostTab">
              <List>
                  {this.state.posts.map((post) => {
                     return(<Card className="PostCard">
                         <h1>{post.title}</h1>
                         <p>{post.body}</p>
                         <h2>USER: {post.userId}</h2>
                     </Card>)
                  })}
              </List>
            </div>
          );
    }}
}
  

export default PostTab;
