import React from 'react'
import Facebook from "../../assets/Facebook.svg"
import Twitter from "../../assets/Twitter.svg"
import Pinterest from "../../assets/pinterest.svg"

const Share = () => {
  return (
    <div className='flex flex-row gap-5 mt-5'>
      <p className='font-bold'>Share:</p>
        <img src={Facebook.src} alt="" />
        <img src={Twitter.src} alt="" />
        <img src={Pinterest.src} alt="" />
    </div>
  )
}

export default Share
