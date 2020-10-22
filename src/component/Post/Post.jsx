import React from 'react';

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://av-uploads.s3.amazonaws.com/merchant_oot_icon/img-20200512051642.jpg" alt=""/>
      </div>
      <div className="content">
        <p className="title">{props.data.title}</p>
        <p className="desc">{props.data.body}</p>
        <button onClick={() => props.remove(props.data.id)}>Remove</button>
        <button onClick={() => props.update(props.data)}>Update</button>
      </div>
    </div>
  )
}

export default Post;