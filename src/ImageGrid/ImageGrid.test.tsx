import { render, fireEvent } from '@testing-library/react';
import {ImageGrid} from './ImageGrid';

it('renders correct content', () => {
    const {getByTestId} = render(<ImageGrid />);
    getByTestId('imgGrid')
});

it('clicking any image passes details', () => {
    const {getByTestId} = render(<ImageGrid />);
    // fireEvent.click(getByTestId('selectedImg'));
});