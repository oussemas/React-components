import React from 'react';
import img from "./img.jpg";
import imge from "./imge.jpg"

function ProfilePhoto() {
  return <div className='leader' >
      <img className='img' src={img} alt='' ></img>
      <br></br>
      <img className='imge' src={imge} alt='' ></img>

  </div>;
}

export default ProfilePhoto;
