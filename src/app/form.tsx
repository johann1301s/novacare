"use client"

import { Accordion } from "@/lib/accordion/accordion"
import axios from "axios"
import { useEffect, useState } from "react"
import { WidthRestrictedFrame } from "@/lib/widthRestrictedFrame"

export const Form = () => {
    const [panels, setPanels] = useState<any[]>()

    useEffect(() => {
        if (!panels) {
            axios.get('/api/getPanels').then(({data}) => setPanels(data.panels))
        }
    }, [panels])

    return (
        <div>
            <WidthRestrictedFrame>
                <Accordion panels={panels || []}/>
            </WidthRestrictedFrame>
        </div>
    )
}
