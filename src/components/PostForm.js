import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state ={
            title: '',
            body: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangebody = this.handleChangebody.bind(this);

    }
    
    handleChange(event) {
        this.setState({title: event.target.value});
      }
    
      handleChangebody(event) {
        this.setState({body: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.title+ this.state.body);
        event.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
           'content-type': 'application/json'
          },
          body: JSON.stringify(post)  
        })
        .then(res => res.json())
        .then(data => console.log(data, 'hello asheesh'))
      }
    
    render() {
         
        return (
            <div>
                <h1>add post</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    title:
                    <input type="text" value={this.state.title} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                    body:
                    <input type="text" value={this.state.body} onChange={this.handleChangebody} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default PostForm