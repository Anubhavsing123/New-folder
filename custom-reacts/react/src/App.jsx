

function Render(create,container){
const document=document.createElement(create)
document.innerHTML=create.children
container.appendChild(document)
}
 const create={
  type:'a',
  props:{
    className: "App",},
  children: [
    {
      type: "h1",
      props: {},
      children: ["Hello World"]
    }]
 }
 const  mainContainer=document.getElementById('#root')
 Render(create,mainContainer)