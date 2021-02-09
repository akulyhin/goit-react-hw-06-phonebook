import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

import styles from "./App.module.css";
import logoAppear from "./Animation/LogoAppear.module.css";
import Alert from "./Alert/Alert";
import AlertAnimation from "./Animation/Alert.module.css";

class App extends Component {



  // getVisiblecontacts = () => {
  //   const { contacts, filter } = this.state;

  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  

    // if (name === "" || number === "") {
    //   return;
    // }

    // if (contacts.findIndex((contact) => contact.name === name) !== -1) {
    //   // alert(`${name} is already in contacts`);
    //   this.setState({ alert: true, nameAlert: name });
    //   return;
    // }

    

  render() {
 

    return (
      <div className={styles.formBlock}>
   
        <CSSTransition
          in={true}
          appear={true}
          classNames={logoAppear}
          timeout={500}
          unmountOnExit
        >
          <h1 className={styles.logo}>Phonebook</h1>
        </CSSTransition>
        <ContactForm />
          <Filter />
        <ContactList/>
      </div>
    );
  }
}

export default App;
