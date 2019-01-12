'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Comentario extends Model {
    /*
    This defines the table which links the model
    */
    static get table(){
        return 'Comentarios'
    }

    static get primaryKey(){
        return 'comentario_id'
    }

    Post(){

        return this.belongsTo('App/Models/Post')
    }

}

module.exports = Comentario
