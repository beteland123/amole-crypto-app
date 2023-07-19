import { render } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import NAVBAR from '../components/navbar';

describe('test navabar', () => {
  test('it should match the snapshoot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/navbar']}>
        <Routes>
          <Route path="/navbar" element={<NAVBAR />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
