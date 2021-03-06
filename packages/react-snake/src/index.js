import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index'
import store from './stores/index'
import './assets/index.css'


function render(){
  ReactDOM.render(<Index store={store} />, document.getElementById('root'))
}


store.subscribe(render)

render()