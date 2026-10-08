import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
    it('renders its label and responds to clicks', () => {
        const onClick = vi.fn();
        render(<Button onClick={onClick}>Buy now</Button>);

        const button = screen.getByRole('button', { name: 'Buy now' });
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire onClick when disabled', () => {
        const onClick = vi.fn();
        render(
            <Button onClick={onClick} disabled>
                Buy now
            </Button>
        );

        fireEvent.click(screen.getByRole('button', { name: 'Buy now' }));

        expect(onClick).not.toHaveBeenCalled();
    });
});
