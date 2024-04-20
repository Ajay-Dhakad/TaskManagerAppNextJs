import React from 'react'
import NavLinks from './NavLinks'
 function Header({styles}) {
  return (
    <div  className={styles}>
     <h1>Task Master</h1>
     <NavLinks/>

    </div>
  )
}

export default Header;
