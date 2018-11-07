import { AnalyticsStore } from './analytics';
import { ItemStore } from './list';

import sinon from 'sinon';

describe('AnalyticsStore', () => {
    const item = ItemStore.create({
            name: 'Parking',
            lastName: 'lastName',
    })
    const analytics = AnalyticsStore.create(
        {},
        { item }
    );

    it('should exist analyticsStore', () => {
        expect(analytics).toEqual({});
    })

    it('should access ListStore env', () => {
        expect(analytics.item).toEqual({
            name: 'Parking',
            lastName: 'lastName',
            done: false,
            number: 0
        });
        expect(analytics.item.fullName).toBe('Parking lastName');
        analytics.item.changeName('Adrian');
        expect(analytics.item.fullName).toBe('Adrian lastName');
        expect(item.name).toBe('Adrian');
    })
})

describe('Mocking AnalyticsStore', () => {
    it('should have called changeName', () => {
        const fakeItemStore = {
            name: 'testName',
            changeName: sinon.stub()
        }
        const AS = AnalyticsStore.create({}, {
            item: fakeItemStore,
        })
        AS.triggerChangeName('new name');
        expect(fakeItemStore.changeName.calledOnce).toBe(true);
    })
});
