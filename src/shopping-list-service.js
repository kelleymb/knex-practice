const ShoppingService = {
//methods for CRUD -- Create, Read, Update, Delete
    getAllItems(knex) {
        return knex.select('*').from('shopping_list')
    },
    insertItem(knex, newItem){
        return knex
            .insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, id) {
        return knex.select('*').from('shopping_list').where('id', id).first()
    },
    updateItem(knex, id, newItemFields) {
        return knex('shopping_list')
            .where({ id })
            .update(newItemFields)

    },
    deleteItem(knex, id) {
        return knex('shopping_list')
            .where({ id })
            .delete()
    }
}

module.exports = ShoppingService