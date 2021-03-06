import React, { useState } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../Store/actions'
import {Link} from 'react-router-dom'

import classes from './birthdayPerson.module.css'

const BirthdayPerson = (props) =>{
    const [input, setInputState] = useState('')

    const onChangeHandler = (event) =>{
        setInputState(event.target.value)
    }

    const onClickHandler =() =>{
        props.onSubmitUserName(input)
    }
    let buttonDisabled = true
    let bgColor = "grey"
    if(input){
        buttonDisabled = false
        bgColor = "white"
    }
    return (
        <div>
            <Link to ={`/vishwall/about`} ><h3 className ={classes.About}>How to use?</h3></Link>
            <label className= {classes.Label}>Whose Birthday? <br />Enter their name</label>
            <input 
                type = "input" 
                placeholder = "Name" 
                className = {classes.Name} 
                name = "submit"
                onChange = {event => onChangeHandler(event)}
                ></input>
            <br></br>
            
            <Link to ={`/vishwall/${input}/write-wish`} >
                <button 
                    className={classes.Button} 
                    type="button" 
                    onClick ={onClickHandler} 
                    disabled = {buttonDisabled}
                    style = {{backgroundColor : bgColor}}
                    >Enter</button></Link>
            <Link to ={`/vishwall/${input}/wishes`} >
                <button 
                    className={classes.ButtonWishes} 
                    type="button" 
                    onClick ={onClickHandler} 
                    disabled = {buttonDisabled}
                    style = {{backgroundColor : bgColor}}
                    >See Wishes</button></Link>
        </div>
    )
}

// const mapStateToProps = state =>{}
const mapDispatchToProps = dispatch =>{
    return {
        onSubmitUserName : (userName)=>dispatch(actions.addUsername(userName))
    }
}

export default connect(null,mapDispatchToProps)(BirthdayPerson)