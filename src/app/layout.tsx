"use client"

import StyledComponentsRegistry from '../lib/components/registry'
import { WidthRestrictedFrame } from "@/lib/components/widthRestrictedFrame"
import { Work_Sans } from 'next/font/google'
import { Header } from './header'

const roboto = Work_Sans({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout(props: Props) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Header/>
          <br/>
          <br/>
          <br/>
          <WidthRestrictedFrame>
            {props.children}
          </WidthRestrictedFrame>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
