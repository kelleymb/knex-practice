require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL
})

//one parameter, searchTerm
//query the shopping_list, select rows name that contains the 
//searchTerm using a case insensitive match (ILIKE)
function getAllItemsWithText(searchTerm) {
    knexInstance
        .select('*')
        .from('shopping_list')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log('SEARCH TERM', { searchTerm })
            console.log(result)
        })
}
//invoke the function
getAllItemsWithText('ham')


//one parameter, pageNumber
//query the shopping_list, select rows pageNumber
//paginated to 6 items per page
function getAllItemsPaginated(pageNumber) {
    const productsPerPage = 6
    const offset = productsPerPage * (pageNumber - 1)
    knexInstance
        .select('*')
        .from('shopping_list')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log('PAGINATE ITEMS', { page })
            console.log(result)
        })
}
//invoke the function
getAllItemsPaginated(2)


//one parameter, daysAgo
//query the shopping_list, select rows date_added
//that is greater than daysAgo
function getAllItemsAddedAfterDate(daysAgo) {
    knexInstance
        .select('item_id', 'name', 'price', 'date_added', 'checked', 'category')
        .from('shopping_list')
        .where(
            'date_added',
            '>'
            knexInstance.raw(`now() - '?? days':: INTERVAL`, daysAgo)
        )
        .then(results => {
            console.log('PRODUCTS ADDED DAYS AGO')
            console.log(results)
        })
}
//invoke the function
getAllItemsAddedAfterDate(5)



//no parameters
//query the shopping_list, select rows grouped by category
//showing total price of each category
function getTotalCost() {
    knexInstance
        .select('category')
        .from('shopping_list')
        .sum('price AS total')
        .groupBy('category')
        .then(result => {
            console.log('COST PER CATEGORY')
            console.log(result)
        })
}
//invoke the function
getTotalCost()