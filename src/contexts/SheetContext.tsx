"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { SHEET_ID, SHEET_NAME } from "@/config/sheet";
import { Guest, SheetContextType } from "@/types/sheet";


const SheetContext = createContext<SheetContextType>({ data: [] });

export function SheetProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<Guest[]>([]);

    useEffect(() => {
        const url = `/api/sheet?sheetId=${SHEET_ID}&sheetName=${SHEET_NAME}`;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                const values: string[][] = res.data || [];
                const mapped = values.slice(1).map((row) => ({
                    name: row[0] || "",
                    address: row[1] || "",
                }));
                setData(mapped);
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
