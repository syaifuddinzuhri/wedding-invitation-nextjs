'use client'

import GuestBox from '@/components/GuestBox';
import LoadingPage from '@/components/LoadingPage';
import { useSheet } from '@/contexts/SheetContext'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const OpeningPage = () => {
    const { data } = useSheet()

    const searchParams = useSearchParams();
    const guest = searchParams?.get("guest");

    const guestData = data.find(
        (g) => g.name.toLowerCase() === guest?.toLowerCase()
    );

    if (!data || data.length === 0) {
        return <LoadingPage />
    }

    return (
        <div className='min-h-screen relative bg-yellow-50'>
            <h1>Hello</h1>
            <h1 className="font-cookie text-4xl">Wedding Invitation</h1>
            <h1 className="font-imperial text-4xl">Save the Date</h1>
            <h1 className="font-lobster text-4xl">Roikhatul Jannah</h1>
            <h1 className="font-lobster text-4xl">Muhammad Solihin</h1>

            {
                guestData && <GuestBox guest={guestData} />
            }
        </div>
    )
}

export default OpeningPage
