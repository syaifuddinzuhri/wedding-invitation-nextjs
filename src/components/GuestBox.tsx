import { Guest } from '@/types/sheet'
import React from 'react'

interface GuestBoxProps {
    guest: Guest
}

const GuestBox = ({ guest }: GuestBoxProps) => {
    return (
        <div className="absolute bottom-20 left-8 right-8">
            <p className='text-center mb-2 text-xs'>Kepada Yth.</p>
            <div className='border border-yellow-300 rounded-lg py-4 px-6 text-center bg-white'>
                <h5 className='font-bold'>{guest?.name}</h5>
                <div className='h-[20]'></div>
                <p>{guest?.address}</p>
            </div>
        </div>
    )
}

export default GuestBox
