import React from 'react';
import { render } from '@testing-library/react';
import Board from './Board.js';
jest.mock("./Clock", () =>
    () => <div data-testid="clock"></div>
)
describe('<Board />', () => {
    const date = new Date()
    const mockDate = date.toLocaleTimeString('it-IT', {timeZone: 'Europe/Stockholm'});

    const mockArray = [
        {title: 'Stockholm', zone: 'Europe/Stockholm'}, 
        {title: 'London', zone: 'Europe/London'},
        {title: 'Paris', zone: 'Europe/Paris'},
        {title: 'Moscow', zone: 'Europe/Moscow'},
        {title: 'Tokyo', zone: 'Asia/Tokyo'},
        {title: 'New York', zone: 'America/New_York'},
        {title: 'Los Angeles', zone: 'America/Los_Angeles'},
        {title: 'Sao Paulo', zone: 'America/Sao_Paulo'},
        {title: 'Damascus', zone: 'Asia/Damascus'},
    ]
   
test.only('AmounOfChildren', () => {
    const { getAllByTestId } = render( <Board zones={mockArray} date={date}/> );
    
    const elements = getAllByTestId('clock');
    expect(elements.length).toBe(mockArray.length)
    });
});
// import '@testing-library/jest-dom';
// import React from 'react';
// import { render } from '@testing-library/react';
// import Clock from './Clock.js';
// describe('<Clock />', () => {
// const mockDate = Date.now()
// .toLocaleString('se', { timeZone: 'Europe/Stockholm' });
// test('time', () => {
// const { getByText, asFragment } = render(
// <Clock tz='Europe/Stockholm' date={mockDate}/>
// );
// expect(getByText(mockDate)).toBeInTheDocument();
// });
// });