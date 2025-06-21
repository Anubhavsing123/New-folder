function customRender(reactElement,container){
/*const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.chlidren
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)
container.appendChild(domElement)*/
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.children
for ( const props in reactElement.props){
  if (props==='children') continue;
  domElement.setAttribute(props,reactElement.props[props])

}
container.appendChild(domElement)
}
const mainContainer=document.querySelector('#root');
const reactElement={
  type:'a',
  props:{
    href:'https://react.dev',
    target:'_blank',
   
  },
   children:'click me to google',
}
customRender(reactElement,mainContainer)