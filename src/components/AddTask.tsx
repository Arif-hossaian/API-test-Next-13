import Link from 'next/link'
import React from 'react'

const AddTask = () => {
  return (
    <div className='flex justify-center align-center mt-5'>
        <Link href='/todos/create'><button className='bg-blue-500 text-center rounded-md px-3 py-2 text-white'>Create Todo</button></Link>
    </div>
  )
}

export default AddTask