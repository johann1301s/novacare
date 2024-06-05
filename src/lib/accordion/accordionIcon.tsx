import React from 'react'
import styled from 'styled-components'

export type TAccordionPanelProps = {
  isCollapsed?: boolean
}

export const AccordionIcon = (props: TAccordionPanelProps) => {
  
  return (
    <Frame isCollapsed={props.isCollapsed}>+</Frame>
  )
}
  
const Frame = styled.div<{isCollapsed?: boolean}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  transform: rotate(${({isCollapsed}) => isCollapsed ? '0deg' : '45deg'});
  transition: 0.2s;
`
