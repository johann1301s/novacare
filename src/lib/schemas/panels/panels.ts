import SchemaClass from "@/lib/schema"

type Panels = {
    accordionItems: Array<{
        fields: {
            text: string
            internalName: string
        }
    }>
}

export const schema = new SchemaClass<Panels>({
    type: 'object',
    required: ['accordionItems'],
    properties: {
        accordionItems: {
            type: 'array',
            items: {
                type: 'object',
                required: ['fields'],
                properties: {
                    fields: {
                        type: 'object',
                        required: ['text', 'internalName'],
                        properties: {
                            text: {type: 'string'},
                            internalName: {type: 'string'}
                        }   
                    }
                }   
            }
        }
    }
})
