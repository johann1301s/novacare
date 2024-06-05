import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "contentful"
import { schemas } from '@/lib/schemas/schemas'
 
type GetPanelsResponse = {
  panels: Array<{
    id: string
    content: string
    title: string
  }>
} | {
  error?: string
}
 
export default async function getPanels(_req: NextApiRequest, res: NextApiResponse<GetPanelsResponse>) {
  const client = createClient({
    accessToken: process.env.Access_token!,
    space: process.env.Space!,
  })

  const {items} = await client.getEntries({
    content_type: "accordion",
    include: 4,
  })

  const fields = items?.at(0)?.fields

  if (!schemas.panels.validate(fields)) {
    const error = schemas.panels.validate.errors?.map(({message}) => message).join('\n')
    res.status(500).json({error})

    return
  }

  const panels = fields.accordionItems.map(({fields}) => ({
      id: fields.internalName,
      content: fields.text,
      title: fields.internalName
  })) || []

  res.status(200).json({panels})
}
