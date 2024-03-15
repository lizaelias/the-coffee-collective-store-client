

import { Link } from 'react-router-dom';
import error from '../../public/images/404/not404.gif';
import { IoMdArrowRoundBack } from "react-icons/io";

const EorroPages = () => {
    return (
        <div className='relative'>
            <img src={error} alt="" />
            <div className='absolute top-5 left-5 right-0'>
                <Link to='/'><h1 className='text-xl font-medium underline hover:text-green-600 flex gap-x-2 items-center'> <span><IoMdArrowRoundBack></IoMdArrowRoundBack></span>Back to home</h1></Link>
            </div>
        </div>
    );
};

export default EorroPages;