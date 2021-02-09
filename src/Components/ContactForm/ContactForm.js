import React, { useState } from "react";
import styles from "./ContactForm.module.css";

import {connect} from 'react-redux';
import { addTask } from "../../redux/actions/todoActions";
import Alert from "../Alert/Alert";
import { CSSTransition } from "react-transition-group";
import AlertAnimation from "../Animation/Alert.module.css";

// class ContactForm extends Component {
  // state = {
  //   name: "",
  //   number: "",
  // };

  const initialState = {
    name: '',
    number: '',
    alert: false
  }


  const ContactForm = ({contacts, addTask}) => {
const [state, setState] = useState({ ...initialState})

 const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contacts.some(item=>item.name === state.name))
  if(contacts.some(item=>item.name.toLowerCase() === state.name.toLowerCase())){
    setState(prev=>({...prev, alert: true }))
    setTimeout(()=> setState(prev=>({...prev, alert: false })), 3000)
  } else{
    addTask({name: state.name, number: state.number});
    setState({...initialState})
  }
  

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState(prev =>({...prev, [name]: value }));
  };

    // const { name, number } = this.state;
    return (
      <>
           <CSSTransition
          in={state.alert}
          timeout={250}
          classNames={AlertAnimation}
          unmountOnExit
        >
          <Alert nameAlert={state.name} />
        </CSSTransition>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleInputChange}
            id="name"
          />
          <br />
          <p></p>
          <label htmlFor="number">Number</label>
          <br />
          <input
            type="tel"
            name="number"
            id="number"
            value={state.number}
            onChange={handleInputChange}
          />
          <br />
          <p></p>
          <button className={styles.btnAdd} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
}
const mapStateToProps = (state, ownProps) => ({
  contacts: state.contacts.items
})

export default connect(mapStateToProps, {addTask})(ContactForm);
