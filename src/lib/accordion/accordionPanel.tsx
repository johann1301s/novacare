import React, {useState} from 'react'
import styled from 'styled-components'
import { Collapsible } from '@/lib/collapsible'
import { AccordionIcon } from './accordionIcon'

export type TAccordionPanelProps = {
  content: string
  title: string
}

export const AccordionPanel = (props: TAccordionPanelProps) => {
  const [collapsed, setCollapsed] = useState(true)
  
  return (
    <Frame>
      <Header
        collapsed={collapsed}
        onClick={() => setCollapsed((prev) => !prev)}>
        <AccordionIcon isCollapsed={collapsed}/>
        <span>
          {props.title}
        </span>
      </Header>
      <Collapsible
        duration={200}
        collapsed={collapsed}>
        <Content>
          {props.content}
        </Content>
      </Collapsible>
    </Frame>
  )
}
  
const Frame = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.button<{collapsed: boolean}>`
  display: flex;
  gap: 8px;
  all: unset;
  cursor: pointer;
  display: flex;
  padding: 16px 0;
  font-weight: 500;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
  gap: 8px;
  border-bottom: 2px solid #9fadb8;
  transition: border-bottom-color .5s linear;
  font-size: 18px;
  @media (hover: hover) {
    &:hover {
      border-bottom-color: black;
    }
  }
  &:focus-visible {
    outline: 4px solid #041f35;
    border-bottom-color: transparent;
  }
`

const Content = styled.div`
  padding: 16px;
`
