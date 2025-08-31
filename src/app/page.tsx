'use client'

import { SHEET_ID, SHEET_NAME } from '@/config/sheet';
import OpeningPage from '@/pages/OpeningPage';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const url = `/api/sheet?sheetId=${SHEET_ID}&sheetName=${SHEET_NAME}`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res.data || []));
    }, []);

    return (
        <div>
            <OpeningPage />
        </div>
    )
}

export default page
