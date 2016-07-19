'use strict';

// src/services/entry/hooks/populateImage.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

import request from 'superagent'
const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return new Promise(function(resolve, reject) {
      request
        .get('https://api.teleport.org/api/urban_areas/')
        .end(function(err, res){
          hook.data.image = ''
          let resp = JSON.parse(res.text)
          let city = resp._links['ua:item'].filter(function(city){
            return ~city.name.toLowerCase().indexOf(hook.data.city.toLowerCase())
          })
          if(city.length > 0) {
            request.get(city[0].href+'images/')
              .end(function(req, res){
                let response = JSON.parse(res.text)
                hook.data.image = response.photos[0].image.web
                resolve()
              })
          } else {
            resolve()
          }
        })
      })
  }
};
