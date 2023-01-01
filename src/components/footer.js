import React from 'react'
import { AiFillTwitterSquare} from 'react-icons/ai';
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillInstagram} from 'react-icons/ai';
import { AiFillGithub} from 'react-icons/ai';



function Footer() {
    return (
        <div className='main-footer'>
            <AiFillTwitterSquare fontSize={'2rem'} color={'#918E9B'}/>
            <AiFillFacebook fontSize={'2rem'} color={'#918E9B'}/>
            <AiFillInstagram fontSize={'2rem'} color={'#918E9B'}/>
            <AiFillGithub fontSize={'2rem'} color={'#918E9B'}/>
      </div>
    )
};


export default Footer;