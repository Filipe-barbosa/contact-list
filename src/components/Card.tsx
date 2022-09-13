import React, { useState } from 'react'
import StartOutlined from '../icons/StartIconOutlined'
import StarIcon from '../icons/StartIcon'

function Card () {
  const [clickStart, setClickStar] = useState <boolean>(false)
  return (
        <div className="w-52 rounded-lg shadow-md bg-white p-1 border-gray-200">
            <button className='p-2' onClick={() => setClickStar(!clickStart)}>
            { clickStart
              ? (
                <StarIcon/>
                )
              : (<StartOutlined/>) }

            </button>

            <div className="flex flex-col items-center pb-10 pt-4">
                <div className="mb-3 w-24 h-24 rounded-full shadow-lg bg-blue-400" />
                <div className="grid gap-1 text-center">
                    <div className="text-xl font-medium text-gray-900">Name</div>
                    <div>Cargo</div>
                </div>
            </div>
        </div>
  )
}

export default Card
