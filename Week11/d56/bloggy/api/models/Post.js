/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title: {
      type: 'string',
      required:true
    },
    body:{
      type:'text',
      required:true
    },

    //////// ASSOCIATIONS //////

    // Comment is the other model
    // Via is the association

    // has many comment
    comments: {
      collection: 'Comment',
      via: 'post'
    }

  }
};

