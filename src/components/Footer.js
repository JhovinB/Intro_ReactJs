//imr & imcr
import React from 'react';

//sfc
const Footer = ({fecha}) => {
    return (  
        <footer>
            <p>Todos los derechos reservados &copy;
                {fecha}
            </p>
        </footer>
    );
}
 
export default Footer;