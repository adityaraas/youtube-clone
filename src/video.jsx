import './video.css'
function Video({id,title,views,channel,time,verified}){

  return (
    <div className='container'> 
      <div className='pic'> <img src= 
            {`https://picsum.photos/id/${id}/160/90`}
       alt="the real image " />
     </div>
     

      <div className="title">{title} Tutorial </div>
       <div className="channel">{channel} channel {verified ? '🔵✔' : null } </div>: 
       

      <div className="views">{views} views <span> . </span>{time} </div>
      
     
  
      
      <div>
      </div>
    </div>
  )
  
}



export default  Video;

