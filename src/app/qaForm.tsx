"use client"

import axios from "axios"
import { Accordion } from "@/lib/accordion/accordion"
import { useEffect, useState } from "react"
import { WidthRestrictedFrame } from "@/lib/widthRestrictedFrame"
import { Loader } from "@/lib/loader"
import { minTime } from "@/lib/minTime"

export const QAForm = () => {
    const [panels, setPanels] = useState<any[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string>()

    useEffect(() => {
        if (panels) return
        minTime(axios.get('/api/getPanels'), 500)
            .then(({data}) => setPanels(data.panels))
            .catch(() => setError('An unknown error occurred.'))
            .finally(() => setIsLoading(false))
    }, [panels])

    return (
        <div>
            <WidthRestrictedFrame>
                {isLoading ? <Loader/> : <Accordion title={'Novacare QA'} panels={panels || []}/>}
                {error && <div>Error: {error}</div>}
            </WidthRestrictedFrame>
        </div>
    )
}