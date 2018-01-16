import _ from 'lodash';

function component(){
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

function test(){
  console.log(_.join(['test1', 'test2', 'rest3'], ' '));
  console.log('Coucou');
}

document.body.appendChild(component());
test();