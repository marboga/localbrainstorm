/**
 * Action.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	
  	title : {
      type: 'text'
    },

    description : {
      type: 'text'
    },

  	created_at : {
  		type: 'datetime'
  	},

  	updated_at : {
  		type: 'datetime'
  	},

    organization : {
      model: 'organization'
    }

  }
};

