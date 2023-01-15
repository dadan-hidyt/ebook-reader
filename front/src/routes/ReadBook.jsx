import { useParams } from "react-router-dom"

function ReadBook({params}){
    const {id,title} = useParams();
    return (
        <>
            <div className="book-reader">
                <div className="bok-title"><h1>{ title }</h1></div>
                <div className="book-show">
                     <h1>dadan</h1>
                </div>
            </div>
        </>
    );
}

export default ReadBook;