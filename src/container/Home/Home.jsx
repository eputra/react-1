import React, {Component} from 'react';
// import YoutubeComponent from '../../component/YoutubeComponent/YoutubeComponent';
import BlogPost from '../BlogPost/BlogPost';
// import Product from '../Product/Product'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <p>Youtube Component</p>
        <hr/>
        <YoutubeComponent time="1.2" title="Test 1" desc="Desc 1" />
        <YoutubeComponent time="3.4" title="Test 2" desc="Desc 2" />
        <YoutubeComponent time="5.6" title="Test 3" desc="Desc 3" />
        <YoutubeComponent time="7.8" title="Test 4" desc="Desc 4" />
        <YoutubeComponent /> */}
        {/* <p>Counter</p>
        <hr/>
        <Product /> */}
        <p>Blog Post</p>
        <hr/>
        <BlogPost/>
      </div>
    )
  }
}

export default Home;