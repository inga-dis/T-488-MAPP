import React from 'react'

function popUp(props){
    return (props.trigger) ? (
      <div className="popup">
        <div className="popup-inner">
        <button className="close-btn">close</button> 
        { props.children }
        </div>  
      </div>
    ) : "";
}

export default popUp




// import popUp from './components/popup'
// import { useState } from 'react'; 
// function App(){
//     return (
//         <div className="App">
//         <main>
//             <h1>React popups</h1>  >>> það sem þarf að koma inná boards til að opna popup
//             <button>Open popup</button>
//             <popUp trigger={false}>
               //<h3>Delete<h3/> 
//             </popUp>
//vantar close button (x, save, confirm)
//         </main>
//     </div>

//     );
// }

// export default App; 