import '@testing-library/jest-dom'
import { Accordion } from '@/lib/components/accordion/accordion'
import { render } from '@testing-library/react'
 
describe('Test Accordion component', () => {
  it('renders without crashing', () => {
    render(<Accordion panels={[]}/>)
  })
})
