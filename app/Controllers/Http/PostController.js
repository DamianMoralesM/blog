'use strict'
const Post = use('App/Models/Post')  
const User = use('App/Models/User')
const database = use('Database')
class PostController {

  async  store({request}) {
        const newPost = new Post()
    

        const body = request.all()
        
        newPost.titulo = body.titulo
        newPost.text = body.text
        newPost.parrafos = body.parrafos
       // await newPost.save()
       // p.split('\n')

        
       
       // Post.fecha = Date.now()
        
        return 'Guardado en la base datos: ' + newPost

    }
    
    /** Dont forget async, if not doesnt works! */
    async index() {
        //const unPost = await Post.findBy('titulo','hola')
        //const unPosts = await Post.all()
        // u = await User.all()
        const otroPost =  await Post.findBy('titulo','El gran libro')
          return otroPost.toJSON()
       // return 'Un post :'
    }


    getPost({params}){
       
        // :nombrePost in Route
        return `Publicación: ${params.nombrePost}`
    }


    update({request}){


    }

}

module.exports = PostController
