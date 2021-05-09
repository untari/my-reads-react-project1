import React from 'react'
import Shelf from './Shelf';
import BooksAdd from './BooksAdd';
import TitleBooks from './TitleBooks';
import './App.css'

function Main = (props) => {
    return (
        <div>
            <TitleBooks />
            <Shelf />
            <BooksAdd />
        </div>
    )
}
export default Main;
