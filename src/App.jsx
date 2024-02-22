import React, { useState } from 'react';
import './App.css';
import Video from './video'; // Make sure the component names match your actual component names
import Playbutton from './play'; // Make sure the component names match your actual component names
import videoData from './data/data.js';

export default function App() {
  const [videos, setVideos] = useState(videoData);
  const [inputTitle, setInputTitle] = useState('');
  const [inputChannel, setInputChannel] = useState('');

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleChannelChange = (event) => {
    setInputChannel(event.target.value);
  };

  const handleAddVideo = () => {
    if (inputTitle && inputChannel) {
      setVideos((prevVideos) => [
        ...prevVideos,
        {
          id: prevVideos.length + 1,
          title: inputTitle,
          views: '10M',
          channel: inputChannel,
          time: '1 year ago',
          verified: true,
        },
      ]);

      setInputTitle('');
      setInputChannel('');
    }
  };

  return (
    <div className='app-container'>
      <div className='header'>
        <h1>YouTube</h1>
        <form>
          <input
            type='text'
            placeholder='Search'
            className='search-input'
          />
          <button type='submit' className='search-button'>
            Search
          </button>
        </form>
      </div>

      <div className='content'>
        <div className='video-form'>
          <input
            type='text'
            placeholder='Enter Title here'
            value={inputTitle}
            onChange={handleTitleChange}
            className='video-input'
          />
          <input
            type='text'
            placeholder='Enter Channel Name here'
            value={inputChannel}
            onChange={handleChannelChange}
            className='video-input'
          />
          <button onClick={handleAddVideo} className='add-button'>
            Add video
          </button>
        </div>

        <div className='video-list'>
          {videos.map((video) => (
            <div key={video.id} className='video-item'>
              <Video
                title={video.title}
                views={video.views}
                channel={video.channel}
                time={video.time}
                verified={video.verified}
                id={video.id}
              />
              <Playbutton
                key={video.id}
                message='play'
                OnPlay={() => console.log('start playing')}
                OnStop={() => console.log('stop playing')}
              >
                {video.title}
              </Playbutton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
