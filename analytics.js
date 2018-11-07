import { types, getEnv } from 'mobx-state-tree';

const analyticsModel = {
}

const analyticsViews = self => ({
    get item() {
        return getEnv(self).item;
    }
});

const analyticsActions = self => ({
    triggerChangeName(newName) {
        self.item.changeName(newName);
    }
})

export const AnalyticsStore = types
    .model(
        'AnalyticsStore',
        analyticsModel
    )
    .views(analyticsViews)
    .actions(analyticsActions)
