import React from 'react'
import { useState, useEffect } from 'react';
// import { renderIntoDocument } from 'react-dom/test-utils';
import './Todolist.css';

const getlocalData = () => {
    const list = localStorage.getItem("mytodolist");
    if (list) {
        return JSON.parse(list);

    } else {
        return ([])

    }
}

const Todolist = () => {
    const [changeitem, setchangeitem] = useState('');
    const [item, setItem] = useState(getlocalData());
    const [editeditem, setediteditem] = useState("");
    const [toggalbtn, settoggalbtn] = useState(false);

    const itemchange = (event) => {
        setchangeitem(event.target.value)
        // console.log(event.target.value);

    }
    const additem = () => {
        if (!changeitem) {
            alert("please fill item")
        } else if (changeitem && toggalbtn) {
            setItem(
                item.map((curelem) => {
                    if (curelem.id === editeditem) {
                        return { ...curelem, name: changeitem }
                    } else {
                        return curelem;
                    }
                }))
            setchangeitem([]);
            setediteditem("");
            settoggalbtn(false);

        }
        else {
            const newinputdata = {
                id: Math.random(),
                name: changeitem
            }
            setItem([...item, newinputdata])
            setchangeitem("")
            console.log([...item, newinputdata])
        }
    }
    const edititem = (index) => {
        const edit_item = item.find((curelem) => {
            return curelem.id === index;

        });
        setchangeitem(edit_item.name);
        setediteditem(index);
        settoggalbtn(true);


    }
    const deleteelement = (index) => {
        const upadatedata = item.filter((curelem) => {
            return curelem.id !== index

        })
        setItem(upadatedata);

    }
    const removeall = () => {
        setItem([]);
    }
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(item))
    }, [item])

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo" />
                        <figcaption>Add Your List Hear ✌</figcaption>
                    </figure>
                    <div className="addItem">
                        <input
                            type="text"
                            placeholder='✍ Add Item'
                            className='form-control'
                            value={changeitem}
                            onChange={itemchange}
                        />
                        {
                            toggalbtn ?
                                (<i class="far fa-edit add-btn" onClick={additem}></i>)
                                : (
                                    <i class="fa fa-plus add-btn" onClick={additem}></i>
                                )
                        }

                    </div>

                    <div className="showItems">
                        {
                            item.map((element) => {
                                console.log(element)
                                return (

                                    <div className="eachItem" key={element.id}>
                                        <h3>{element.name}</h3>
                                        <div className="todo-btn">
                                            <i class="far fa-edit add-btn" onClick={() => edititem(element.id)}></i>
                                            <i class="far fa-trash-alt add-btn" onClick={() => deleteelement(element.id)}></i>
                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeall} >
                            <span>Chack List</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Todolist

