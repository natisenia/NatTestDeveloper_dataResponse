import { render } from '@testing-library/react';
import {InfoPanel} from './InfoPanel';

it('renders correct content', () => {
    const {getByText} = render(<InfoPanel />);
    // getByText(/block info/i);
});