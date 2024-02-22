import './AddVideo.css'
import {useState} from 'react'
import video from './data/data.js'

function AddVideo(){
  const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [videos,setVideos] = useState(video)

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  };
 
  

  return (
    <> <form>
          <input
              type="text"
              placeholder="Enter Title here"
              value={inputValue}
              onChange={handleInputChange} />
          <p>You entered: {inputValue}</p>
          <input
              type="text"
              placeholder="Enter channel Name here"
              value={inputValue1}
              onChange={handleInputChange1} />
          <p>You entered: {inputValue1}</p>





      </form>
      <div> <button onClick={() => {
          setVideos([...videos, {
              id: videos.length + 1,
              title: inputValue,
              views: "10M",
              channel: inputValue1,
              time: '1 year ago',
              verified: true,
          }]);
      } }>Add video</button>
          </div>
    </>
  
)}

export default AddVideo;