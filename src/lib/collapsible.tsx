import React, {ReactNode, useRef, useMemo, useEffect} from 'react'
import styled from 'styled-components'

export type TCollapsibleProps = {
  collapsed: boolean
  children: ReactNode
  duration?: number
}

/**
 * Component that can be collapsed by setting the `collapsed` prop to `true`.
 * 
 * Example:
 * 
 * ```
 * const Example = () => {
 *   const [isCollapsed, setIsCollapsed] = useState(false)
 * 
 *   return (
 *     <div>
 *       <button
 *         onClick={() => setIsCollapsed((prev) => !prev)}>
 *         Toggle collapsed
 *       </button>
 *       <Collapsible collapsed={isCollapsed}>
 *         This text will be hidden if collapsed!
 *       </Collapsible>
 *     </div>
 *   )
 * }
 * ```
 */

export const Collapsible = (props: TCollapsibleProps) => {
  const frameRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const isCollapsedRef = useRef(props.collapsed)
  const inert = props.collapsed ? {inert: ''} : {}

  isCollapsedRef.current = props.collapsed

  const initalOverflow = useMemo(() => {
    return props.collapsed ? 'hidden' : 'visible'
  }, [props.collapsed])
  
  useEffect(() => {
    frameRef.current?.addEventListener('transitionstart', () => {
      if (!innerRef.current) return
      innerRef.current.style.overflow = 'hidden'
    })

    frameRef.current?.addEventListener('transitionend', () => {
      if (!isCollapsedRef.current) {
        if (!innerRef.current) return
        innerRef.current.style.overflow = 'visible'
      }
    })
  }, [])

  return (
    <Frame
      duration={props.duration ?? 300}
      ref={frameRef}
      initalOverflow={initalOverflow}
      collapsed={props.collapsed}>
         {/* @ts-ignore*/}
      <div ref={innerRef} {...inert}>
        {props.children}
      </div>
    </Frame>
  )
}

const Frame = styled.div<{collapsed: boolean, initalOverflow: string, duration: number}>`
  display: grid;
  transition: grid-template-rows ${({duration}) => duration}ms ease-in-out;
  grid-template-rows: ${({collapsed}) => collapsed ? 0 : 1}fr;
  > div {
    overflow: ${({initalOverflow}) => initalOverflow};
  }
`
