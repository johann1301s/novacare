"use client"

import StyledComponentsRegistry from '../lib/components/registry'
import Image from 'next/image'
import { WidthRestrictedFrame } from "@/lib/components/widthRestrictedFrame"
import styled from 'styled-components'
import { Work_Sans } from 'next/font/google'

const roboto = Work_Sans({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Header>
              <WidthRestrictedFrame>
                  <Image
                      width={70}
                      height={70}
                      src="/novacarelogo.svg"
                      alt="logo"/>
                  <span>
                      NOVACARE
                  </span>
              </WidthRestrictedFrame>
          </Header>
          <br/>
          <br/>
          <br/>
          <WidthRestrictedFrame>
            {children}
          </WidthRestrictedFrame>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

const Header = styled.header`
    background: #041f35;
    div {
        padding: 20px;
        color: white;
        font-size: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
    }
`
