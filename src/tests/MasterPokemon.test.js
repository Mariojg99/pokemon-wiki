// import React from "react";
// // import { shallow } from '@wojtekmaj/enzyme-adapter-react-17';
// import {shallow} from 'enzyme';
// import '@testing-library/jest-dom'
// import CardPokemon from '../components/CardPokemon';
// import expectExport from 'expect';
// import Home from '../components/Home'

// describe('Test en <Home />', () => {

//     test('Renderización correcta', () => {
//         const wrapper = shallow(<Home />)
//         expect(wrapper).toMatchSnapshot();
//     })
// })

import {render, screen} from '@testing-library/react';
// import CardPokemon from '../components/CardPokemon';
import MasterPokemon from '../components/MasterPokemon';

test('renders MasterPokemon', () => {
    render(<MasterPokemon />);
    const title = screen.getByText(/Registra aquí a los Maestros Pokemon/i);
    expect(title).toBeInTheDocument();
})
