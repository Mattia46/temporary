import { types } from 'mobx-state-tree';
import { autorun } from 'mobx';

const ItemModel = {
    name: types.string,
    lastName: types.string,
    done: types.optional(types.boolean, false),
    number: types.optional(types.number, 0),
}


const ItemViews = self => ({
    get fullName() {
        return `${self.name} ${self.lastName}`;
    }
})

const ItemActions = self => ({
    afterCreate() {
        autorun(() => {
            if (self.name) {
            //console.log(`the new name is ${self.name}`)
        }})
    },
    changeName(newName) {
        self.name = newName;
    }
})

export const ItemStore = types
    .model('Item', ItemModel)
    .views(ItemViews)
    .actions(ItemActions)
