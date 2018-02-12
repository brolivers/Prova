var order =[{
  name:"Pippo",
  id:1,
  quantity:5
{
  name:"Caio",
  id:2,
  quantity:3
},
{
  name:"Sempronio",
  id:3,
  quantity:7
}]

var backup = JSON.parse(JSON.stringify(order));
var sales=[];

exports.getall = function(){
  return order;
}

exports.getbyid = function(id){
  for(var i=0;i<order.length;i++){
    if(id==order[i].id){
    return order[i];
    }
  }
  return null;
}

exports.insertOrder = function(neworder){
  var lastid = order[order.length-1].id;
  order.push(
    {
    name:neworder.name,
    quantity: neworder.quantity,
    id:lastid+1
    }
  )
  return order[order.length-1];
}

exports.deleteOrder = function(id){
  for(var i=0;i<order.length;i++){
    if(id==order[i].id){
    return order.splice(i,1);
    }
  }
  return null;
}
exports.buyOrder = function(id,token){
  for(var i=0;i<order.length;i++){
    var order = order[i];
    if(order.id == id && order.quantity>0){
      order.quantity--;
      var buyer= token;
      sales.push({
        buyer: token,
        id: order,
        date: Date.now()
      })
    return order;
    }
}
}

exports.update = function(id,neworder){
  for(var i=0;i<order.length;i++){
    var order = order[i];
    if(order.id == id){
      order.name = neworder.name;
      order.quantity= neworder.quantity;
      return order;
    }
  }
    return null;
}

exports.reset = function(){
  products = JSON.parse(JSON.stringify(backup));
  return products;
}



/* console.log('products', this.all());
console.log(this.getByid(2));
console.log('products', this.add({name: "Pizza", price: 6.6}));
console.log(this.delete(4));
console.log(this.buy(3,'pippo'));
console.log(this.reset()); /*
