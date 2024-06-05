import React from 'react'
import styled from 'styled-components'
import {AccordionPanel} from './accordionPanel'

export type TAccordionProps = {
  title?: string
  panels: Array<{
    id: string
    content: string
    title: string
  }>
}

export const Accordion = (props: TAccordionProps) => {
  if (!props.panels.length) return null

  return (
    <Frame>
      <Title>
        {props.title}
      </Title>
      <Panels>
        {props.panels.map((panel) => (
          <AccordionPanel
            key={panel.id}
            title={panel.title}
            content={panel.content}/>
        ))}
      </Panels>
    </Frame>
  )
}

const Frame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const Panels = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
`