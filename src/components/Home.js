import React from 'react'
import logo from '../Images/logo.png';


const Home =() =>{

    return(
        <>
        <div className='Header'>
        
            <table>
                <tr>
                    
                    <td className="logo" style={{paddingLeft:"50px"}}><img src={logo} alt="logo" width="50" height="50"/></td>
                    <td className='name'>Google Keep</td>
                </tr>
            </table>

        </div>
        </>
    )
}

export default Home;