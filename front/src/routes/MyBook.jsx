import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import getBookData from '../bookData';

function MyBook(){
    const [bookList, setBookList] = useState(null);
    useEffect(function(){
        getBookData().then(function(e){
            setBookList(e.data);
        }).catch(function(e){
            console.error(e);
        })
    });
    return (
     <div className="mybook">
     <h1>MY BOOK</h1>
     {
        bookList == null ? (<b>Loading...</b>) :(
            <div className="flex">
            {bookList.map(function(e){
                return (
                    <div key={e.id} className="box-item">
                    <div className="box-img">
                    <img src="" alt=""/>
                    </div>
                    <div className="box-title">
                    <h3><Link to={`read/${e.id}/${e.book_url}`} >{e.book_title}</Link></h3>
                    </div>
                    </div>

                    )
            })}    
            </div>
            )
    }
    </div>
    );
}

export default MyBook;