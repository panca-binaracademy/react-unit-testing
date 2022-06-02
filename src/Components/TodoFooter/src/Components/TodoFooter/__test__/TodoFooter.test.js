import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';

describe('renders todo footer with todo length more than 0', () => {
    test('renders task count', () => {
        render(<TodoFooter todoLength={5} />)
        const footerElement = screen.getByTestId('todo-footer-with-items')
        expect(footerElement).toBeInTheDocument()
    })
    test('not renders free time message', () => {
        render(<TodoFooter todoLength={5} />)
        const footerElement = screen.queryByTestId('todo-footer-no-item')
        expect(footerElement).not.toBeInTheDocument()
    })
})

describe('renders todo footer with todo length equals to 0', () => {
    test('not renders task count', () => {
        render(<TodoFooter todoLength={0} />)
        const footerElement = screen.queryByTestId('todo-footer-with-items')
        expect(footerElement).not.toBeInTheDocument()
    })
    test('renders free time message', () => {
        render(<TodoFooter todoLength={0} />)
        const footerElement = screen.getByTestId('todo-footer-no-item')
        expect(footerElement).toBeInTheDocument()
    })
})


// test('renders todo footer with todo length equals to 0', () => {
//     render(<TodoFooter todoLength={0} />)
//     const footerElement = screen.getByTestId('todo-footer-no-item')
//     expect(footerElement).toBeInTheDocument()
// })