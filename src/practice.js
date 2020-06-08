require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL
})

//function that accesses the database
function searchByProduceName(searchTerm) {
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .where('name', 'ILIKE', `%${searchTerm}%`)
        .then(result => {
            console.log(result)
        })
}

//invoke that function with the search term 'holo'
searchByProduceName('holo')


//use of LIMIT and OFFSET operator
function paginateProducts(page) {
    const productsPerPage = 10
    const offset = productsPerPage * (page - 1)
    knexInstance
        .select('product_id', 'name', 'price', 'category')
        .from('amazong_products')
        .limit(productsPerPage)
        .offset(offset)
        .then(result => {
            console.log(result)
        })
}
  
paginateProducts(2)

//use of whereNotNull()
//filter products that have images
function getProductsWithImages() {
    knexInstance
        .select('product_id', 'name', 'price', 'category', 'image')
        .from('amazong_products')
        .whereNotNull('image')
        .then(result => {
            console.log(result)
        })
}
  
getProductsWithImages()

//count the number of views for each combo of region and video game
//rename date_viewed with AS operator, needed .count mehtod for this
//fallback method --> raw(), used to pass in 'raw' SQL as a string
// used ?? to tell knex that thi sis the position in the raw SQL that will
// contain user input, the specify the value for the user input as the
// second argument to .raw()
// ^^ this is called a prepared statement
function mostPopularVideosForDays(days) {
    knexInstance
      .select('video_name', 'region')
      .count('date_viewed AS views')
      .where(
        'date_viewed',
        '>',
        knexInstance.raw(`now() - '?? days'::INTERVAL`, days)
      )
      .from('whopipe_video_views')
      .groupBy('video_name', 'region')
      .orderBy([
        { column: 'region', order: 'ASC' },
        { column: 'views', order: 'DESC' },
      ])
      .then(result => {
        console.log(result)
      })
}
  
mostPopularVideosForDays(30)

console.log('knex and driver installed correctly');