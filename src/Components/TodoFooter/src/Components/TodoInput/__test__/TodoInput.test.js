import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from '../TodoInput';

const mockSetTodoFnc = jest.fn()

describe('renders todo input component', () => {
    test('renders todo input field', () => {
        render(<TodoInput setTodo={mockSetTodoFnc} />);
        const inputElement = screen.getByTestId('todo-input')
        expect(inputElement).toBeInTheDocument();
      });
      
      test('renders todo input button', () => {
          render(<TodoInput setTodo={mockSetTodoFnc} />);
          const buttonElement = screen.getByTestId('todo-input-button')
          expect(buttonElement).toBeInTheDocument();
      });
})

test('input todo item', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />);
    const inputElement = screen.getByTestId('todo-input')
    fireEvent.change(inputElement, {
        target: {
            value: 'beli bakso'
        }
    })
    expect(inputElement.value).toBe('beli bakso')
})

test('input button hit', () => {
    render(<TodoInput setTodo={mockSetTodoFnc} />);
    const inputElement = screen.getByTestId('todo-input')
    const buttonElement = screen.getByTestId('todo-input-button')
    fireEvent.change(inputElement, {
        target: {
            value: 'beli bakso'
        }
    })
    fireEvent.click(buttonElement)
    expect(inputElement.value).toBeFalsy()
})

