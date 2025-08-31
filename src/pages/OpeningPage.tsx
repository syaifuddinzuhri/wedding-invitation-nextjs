import { useSheet } from '@/contexts/SheetContext'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const OpeningPage = () => {
    const { data } = useSheet()

    const searchParams = useSearchParams();
    const guest = searchParams.get("guest");

    const guestData = data.find((row) => row[0]?.toLowerCase() === guest?.toLowerCase());

    return (
        <div>
            <h2 className="font-bold mb-2">Guest List</h2>
            <ul>
                {data.map((row, i) => (
                    <li key={i}>{row.join(" | ")}</li>
                ))}
            </ul>
        </div>
    )
}

export default OpeningPage
