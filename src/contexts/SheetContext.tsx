"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SHEET_ID, SHEET_NAME } from "@/config/sheet";

type SheetContextType = {
    data: string[][];
};

const SheetContext = createContext<SheetContextType>({ data: [] });

export function SheetProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<string[][]>([]);

    useEffect(() => {
        const url = `/api/sheet?sheetId=${SHEET_ID}&sheetName=${SHEET_NAME}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                const values = res.data || [];
                setData(values.slice(1));
            });
    }, []);

    return (
        <SheetContext.Provider value={{ data }}>
            {children}
        </SheetContext.Provider>
    );
}

export function useSheet() {
    return useContext(SheetContext);
}
