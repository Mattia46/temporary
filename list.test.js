import { ItemStore } from './list';
import { reaction } from 'mobx';

describe('ItemStore', () => {
    const item = ItemStore.create({
        name: 'Mattia',
        lastName: 'Assogna',
    })

    it('should have a first and last name', () => {
        expect(item.name).toBe('Mattia');
        expect(item).toEqual({
            name: 'Mattia',
            lastName: 'Assogna',
            done: false,
            number: 0,
        })
    })

    it('should init the obj with Done as false', () => {
        const item = ItemStore.create({
            name: 'Mattia',
            lastName: 'Assogna',
        });
        expect(item.done).toBe(false);
    });

    it('should has a fullName', () => {
        expect(item.fullName).toBe('Mattia Assogna');
    });

    it('should change the name', () => {
        expect(item.name).toBe('Mattia');
        item.changeName('Adrian');
        expect(item.name).toBe('Adrian');
    })

    it('should autoincrease a number if changeName()', () => {
        expect(item.number).toBe(0);
        reaction(
            () => item.name,
            () => {
                console.log('in here')
                item.number++
            }
        );
        item.changeName('Parking');
        expect(item.number).toBe(1);
    });
})
