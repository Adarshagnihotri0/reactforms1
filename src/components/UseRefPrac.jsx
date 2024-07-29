import React, { useRef } from "react";
import styles from "./style.module.css";

const UseRefPrac = () => {
  const name = useRef(null);
  const email = useRef(null);
  const age = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(age.current.value);
  };

  return (
    <div>
      <form
        className="w-80 h-44 p-4 border-black flex flex-col border-solid border-2 gap-4 rounded-md"
        onSubmit={handleClick}
      >
        <input className={`${styles.border}`} ref={name} type="text" placeholder="name" />
        <input className={`${styles.border}`} ref={email} type="email" placeholder="email" />
        <input className={`${styles.border}`} ref={age} type="number" name="age" placeholder="age" />
        <input type="submit"/>
      </form>
    </div>
  );
};

export default UseRefPrac;
