import React from 'react';

export default function Map(){
    const fruit = ["Apple","Banana","Cherry"]
    const coffee = ["Americano","Lattee","Matcha"]
    const jsxTry = <h1>Try JSX</h1> //JSX allows to writing HTML-like syntax inside JavaScript.
    //Function Component
    //Must be use Capital when create component in react
    //Component return only one JSX element. 
    function MyComponent(){
        const element = "I am element of myComponent" //element of myComponent(function component)
        const elementStyle = {color:"white",backgroundColor:"Orange"} 
        return <h3 style ={elementStyle}>element</h3>
    }
    return(
        <div>
            <MyComponent style={{color:"red"}}></MyComponent>
            {jsxTry} {/**React convert JSX to React.createElement() -> Create Element*/}
            <ul>
                {fruit.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <ol>
                {fruit.map((fruit,index)=>(
                    <li key={index}>{fruit}</li>
                ))}
            </ol>
            <ol style={{color:"blue"}}>
                {coffee.map((coffeeValue,index)=>(
                    <li key={index}>{coffeeValue}</li>
                ))}
            </ol>

        </div>
    )
}