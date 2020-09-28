import _ from 'Lodash';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

/*
When installing a package that will be bundled into 
your production bundle, you should use npm 
install --save. If you're installing a package for 
development purposes (e.g. a linter, testing libraries, 
etc.) then you should use npm install --save-dev.
*/