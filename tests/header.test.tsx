import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Header } from '@/app/header'
 
describe('Test RootLayout component', () => {
  it('Icon has alt attrubute', () => {
    render(<Header/>)

    const imgElement = screen.getByRole('img')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('alt')
    expect(imgElement.getAttribute('alt')).not.toBe('')
  })
})
