import React,{useState} from 'react';
import index from './index.css';
import ToDoList from './ToDoList';



const App = () => {
    const[inputList, setinputList]= useState();
    const[Items,setItems]= useState([]);

    const itemEvent= (event) => {
        setinputList(event.target.value);
    };
    const listOfItems= () => {
          setItems((olditems) => {
              return[...olditems,inputList]
          });
          setinputList('');
    };
      
    const deleteItems = (id) =>{
        console.log('deleted');


        setItems((olditems) => {
            return olditems.filter((arrElem,index) => {
                 return index !== id;
            } );
        });
    };
    

    return (
        <>
        <div className="main_div">
            <div className="center_div">
                <br/>
                <h1> ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add an Item" 
                value={inputList} onChange={itemEvent}/>
            <button onClick={listOfItems}> + </button>
            
        
        
            <ol>
                 {/*<li>{inputList}</li>*/}
                 {Items.map((itemval, index) => {
                   return (<ToDoList 
                   key={index}
                   id={index}
                   text={itemval}
                   onSelect={deleteItems}
                   />          
                                                                   
                   );     
                    
                 })}
                </ol>
            </div>
        </div>
   </>
        
    );
    
};


    
export default App;