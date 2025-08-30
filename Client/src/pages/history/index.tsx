import React, { Suspense } from 'react'
import HistoryContent from '@/components/HistoryContent'

const index = () => {
     
  return (
    <main className='flex-1 p-6 md:ml-56'>
        <div className='max-w-4xl'>
            <h1 className='text-2xl font-bold mb-6'>History</h1>
            <p className='text-sm'>This is the history page where you can view your watched videos.</p>
            <Suspense fallback={<div>Loading...</div>}>
                <HistoryContent/>
            </Suspense>
        </div>
    </main>
  )
}

export default index