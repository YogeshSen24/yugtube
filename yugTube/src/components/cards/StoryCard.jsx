import React from 'react'

function StoryCard({storyImg , profileImg}) {
  return (
    <div className={`rounded-xl relative overflow-hidden w-64 h-96`}>
      <img className='w-full h-full' src={storyImg} alt="" />
        <div className=' absolute inset-x-1/3  inset-y-2/3 '>
            <img className='rounded-full border border-white size-20 ' src={profileImg} alt="" />
        </div>
    </div>
  )
}

export default StoryCard
