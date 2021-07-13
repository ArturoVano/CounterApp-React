import React from 'react'
import CounterApp from "../CounterApp"
import '@testing-library/jest-dom'
import { shallow } from "enzyme";


describe('Pruebas en <CounterApp />', () => {
    
    let wrapper;

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe de mostrar <CounterApp /> correctamente ', () => {
        
        const defaultCount = wrapper.find('h2').text();

        expect( wrapper ).toMatchSnapshot();
        expect( defaultCount ).toBe( "0" );

    })

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 }/> );

        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe('100');

    })

    test('debe de incrementar con el botón +1', () => {
        
        wrapper.find('button').at(0).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe('1');

    })

    test('debe de decrementar con el botón -1', () => {
        
        wrapper.find('button').at(2).simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        
        expect( counterText ).toBe('-1');

    })

    test('debe de colocar el valor por defecto con btn reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 115 }/> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('115');
    })
    
})
