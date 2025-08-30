import LikedContent from '@/components/LikedContent'
import React, { Suspense} from 'react'

const index = () => {
     
  return (
    <main className='flex-1 p-6 md:ml-56'>
        <div className='max-w-4xl'>
            <h1 className='text-2xl font-bold mb-6'>Liked Videos</h1>
            <Suspense fallback={<div>Loading Liked Videos...</div>}>
                <LikedContent/>
            </Suspense>
        </div>
    </main>
  )
}

export default index