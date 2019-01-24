'use strict'
const Helpers = use('Helpers')

class BorradorController {

    index({request, response}){

    }

async  store({request}){
       const all = request.all()
      
     //   let aux =  all.bloque[0].split('\r\n')

      /*  aux = (all.bloque).map(p => {
            p.split('\n')
        }) */

        // return aux

        /**
         This creates file, needs a name a validations rules as parameters
         */
        const profilePic = request.file('profile_pic', {
            types: ['image'],
            size: '2mb'
          })
        
          /** creates de path */
         
          await profilePic.move(Helpers.tmpPath('uploads'), {
            name: `${new Date().getTime()}.${profilePic.subtype}`,
            overwrite: true
          })
        
          /** finally moves to directory */
          if (!profilePic.moved()) {
            return profilePic.error()
          }
          return  all

    
    }

    delete(){

        
    }
}

module.exports = BorradorController
