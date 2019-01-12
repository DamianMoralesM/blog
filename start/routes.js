'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
const database = use('Database')

Route.on('/').render('welcome')

Route.get('/test', async () => {

return await database.table('posts').select('*').paginate(1,20)

})



Route.get('make/:drink?/:id?', ({params}) => {

    const drink = params.drink || 'Coffee'
    return ` ${params.id} for you`

})

Route.get('/products','ProductsController.index').as('products.index')

//////////////////////////////////////////Routes

//Route.get('/','BlogController.index')
// Render sobre mi
// Render contacto

//////////Post Resourse

Route.get('/publicaciones','PostController.index')
Route.get('/publicaciones/:nombrePublicacion?','PostController.getPost')
Route.post('/publicaciones','PostController.store')


//////// Borrador Resourse

Route.on('/borrador').render('borrador')
Route.post('/borrador','BorradorController.store')

/// Test

const users = [
    {
      username: 'virk'
    },
    {
      username: 'joe'
    },
    {
      username: 'nikk'
    }
  ]

  const veggies = {
    tomato: '18',
    potato: '77',
    carrot: '41'
  }

Route.on('/testPost').render('trypost',{users,veggies})
