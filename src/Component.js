import lizard from './images/lizard.jpeg';let name='Lizards'
let name1='SHARE'
let name2='LEARNMORE'
function Component(){
    
    return (
        <div class='mydiv'>
         <img src={lizard} />
        <h1>{name}</h1>
        <p> Lizards are a widespread group of aquamate</p>
        <p>   reptiles,with over 6,000 species,ranging across </p>
        <p>  all continents except Antarctica</p>
        
        <h4 >{name1 + '   '+ name2}</h4>
      </div>
    )
}
export default Component;