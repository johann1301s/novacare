import Image from 'next/image'
import styled from 'styled-components'
import { WidthRestrictedFrame } from "@/lib/components/widthRestrictedFrame"

export const Header = () => {

  return (
    <Frame>
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
    </Frame>
  )
}

const Frame = styled.header`
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
