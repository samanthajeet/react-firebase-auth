import React from "react";


const Navigation = (props) => {
  return (
    <section>
      <ul>
        <li>
          <button onClick={() => props.history.push('/')} >Home</button>
        </li>
        <li>
        <button onClick={() => props.history.push('/signup')} >Sign Up</button>
        </li>
      </ul>
    </section>
  );
};

export default Navigation;
