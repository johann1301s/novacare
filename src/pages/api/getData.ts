import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient } from "contentful"
 
type ResponseData = any
 
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const client = createClient({
        accessToken: process.env.Access_token!,
        space: process.env.Space!,
    })
    const response = await client.getEntries({
      content_type: "accordion",
      include: 2,
    })

    console.log(response)


  res.status(200).json(response)
}


export type ContentfulResponse = {
  sys: {
    type: 'Array'
  }
  total: number
  skip: number
  limit: number
  items: [ { metadata: [Object], sys: [Object], fields: [Object] } ],
  includes: { Entry: [ [Object], [Object], [Object], [Object], [Object] ] }
}