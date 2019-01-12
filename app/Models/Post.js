'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Post extends Model {

    static get table(){
        return 'posts'
    }

    static get primaryKey(){
        return 'post_id'
    }

    Comentarios(){

        return this.hasMany('App/Models/Comentarios')
    }

}


module.exports = Post
