"use client"

import { Accordion } from "@/accordion/accordion"
import axios from "axios"
import { useEffect, useState } from "react"

type State = undefined | {
    items: Array<{
        fields: {
            accordionItems: any[]
        }
    }>
}

export const Form = () => {

    const [rawData, setRawData] = useState<State>(undefined)

    useEffect(() => {
        if (!rawData) {
            axios.get('/api/getData').then(({data}) => setRawData(data))
        }
    }, [rawData])

    const panels = rawData?.items[0].fields.accordionItems.map(({fields}) => ({
        id: fields.internalName,
        content: fields.text,
        title: fields.internalName
    })) || []


    return (
        <div>
            <Accordion panels={panels}/>
        </div>
    )
}
