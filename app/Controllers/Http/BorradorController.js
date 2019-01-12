'use strict'

class BorradorController {

    index({request, response}){

    }

    store({request}){
        const all = request.all() 
        let aux =  all.bloque[0].split('\r\n')

      /*  aux = (all.bloque).map(p => {
            p.split('\n')
        }) */

        return aux 
    
    }

    delete(){

        
    }
}

module.exports = BorradorController
