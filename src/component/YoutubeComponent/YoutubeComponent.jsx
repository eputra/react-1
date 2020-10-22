import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://i.ytimg.com/vi/5qpCckcXFOU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAKi-kfuPz2Pz_qqmQYIUgZN2BBJw" alt=""/>
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  )
}

YoutubeComponent.defaultProps = {
  time: '00.00',
  title: 'Test',
  desc: 'Desc'
}

export default YoutubeComponent;