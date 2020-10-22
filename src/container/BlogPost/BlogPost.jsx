import React, {Component, Fragment} from 'react';
import Post from '../../component/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: '',
      body: '',
      userId: 1
    },
    isUpdate: false
  }

  getPostAPI = () => {
    axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
    .then(res => {
      this.setState({
        post: res.data
      })
    })
  }

  postDataToAPI = () => {
    axios.post('http://localhost:3001/posts', this.state.formBlogPost)
      .then(() => {
        this.getPostAPI();
        this.setState({
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
          }
        })
      })
      .catch(err => console.log(err));
  }

  handleRemove = (data) => {
    axios.delete(`http://localhost:3001/posts/${data}`)
      .then(() => {
       this.getPostAPI()
      })
  }
  
  componentDidMount() {
   this.getPostAPI();
  }

  handleFormChange = (event) => {
    let timestamp = new Date().getTime();
    let formBlogPostNew = {...this.state.formBlogPost}

    if (!this.state.isUpdate) {
      formBlogPostNew.id = timestamp;
    }
    formBlogPostNew[event.target.name] = event.target.value

    this.setState({
      formBlogPost: formBlogPostNew
    })
  }

  putDataToApi = () => {
    axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
      .then(() => {
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
          }
        })
      })
  }

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToApi();
    } else {
      this.postDataToAPI();
    }
  }

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true
    })
  }

  render() {
    return(
      <Fragment>
        <p>Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input value={this.state.formBlogPost.title} type="text" name="title" placeholder="add title" onChange={this.handleFormChange}/>
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
        </div>
        {
          this.state.post.map(post => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
            )
          })
        }
      </Fragment>
    )
  }
}

export default BlogPost;