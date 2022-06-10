
let myModule = (function() {
  let guns = ['rifles', 'machine guns', 'pistols'];
    
  let getGuns = function() {
         return guns;
  };
  return {
    getGuns: getGuns
  };
})();
console.log(myModule.getGuns());
console.log(myModule.guns);