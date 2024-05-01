import React, { Suspense } from 'react'
import NavLinks from './NavLinks'
 function Header({styles}) {
  return (
    <div  className={styles}>
     <h1>Task Master</h1>
    <Suspense fallback={<div>Loading...</div>}>
     <NavLinks/>
     </Suspense>

    </div>
  )
}

export default Header;
