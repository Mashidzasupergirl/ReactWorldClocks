import React from 'react';
import { render } from '@testing-library/react';
import Clock from './Clock.js';

describe('<Clock />', () => {
    const date = new Date()
    const mockDate = date.toLocaleTimeString('it-IT', {timeZone: 'Europe/Stockholm'});
    const mockZone = "Stockholm"

   
test('StockholmTime', () => {
    const { getByText, container } = render(
    <Clock zone={mockZone} date={mockDate}/>
    );
    expect(getByText(mockDate)).toBeInTheDocument();
    expect(getByText(mockZone)).toBeInTheDocument();
  
    });

test('formats date correctly', () => {
    const time = new Date(2000, 1, 1, 13, 0, 0);
    const tz = "Europe/Stockholm";
    const formattedDateString = time.toLocaleTimeString('it-IT', {timeZone: tz});
    expect(formattedDateString).toBe("13:00:00")
      });
});


