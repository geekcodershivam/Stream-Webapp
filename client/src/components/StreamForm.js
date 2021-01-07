import React from 'react'
import {Field,reduxForm} from 'redux-form';

const renderInput=({input,label,meta})=>{
    const classname=`field ${(meta.touched && meta.error)? 'error' :''}`
    return(<div className={classname}>
        <label>{label}</label>
        <input {...input}/>
        {renderError(meta)}
    </div>);
}

const renderError=meta=>{
    if(meta.error && meta.touched){
        return (
        <div className="ui error message">
            <div className="header">{meta.error}</div>
        </div>)
    }
}

const validate=formValue=>{
    const errors={}
    if(!formValue.title){
        errors.title="You must enter a title";
    }
    if(!formValue.description){
        errors.description="You must enter a description";
    }
    return errors;
}

const StreamForm=(props)=> {
    const onSubmit=(formValue)=>{
        props.onSubmit(formValue)
    }
    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className="ui form" >
            <Field name='title' component={renderInput} label="Enter the Title"/>
            <Field name='description' component={renderInput}  label="Enter the Description"/>
            <button className="ui button primary">Submit</button>
        </form>
    )
}

export default reduxForm({
    form:'StreamForm',
    validate
}) (StreamForm) 
