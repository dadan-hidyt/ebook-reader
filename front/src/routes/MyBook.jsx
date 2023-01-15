import { Link } from "react-router-dom";
function MyBook(){
    return (
       <div className="mybook">
          <h1>MY BOOK</h1>
          <div className="flex">
                <div className="box-item">
                    <div className="box-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="box-title">
                        <h3><Link to={'read/1/dasar programming'} >Dasar Programming</Link></h3>
                    </div>
                </div>


                <div className="box-item">
                    <div className="box-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="box-title">
                        <h3>Programming</h3>
                    </div>
                </div>


                <div className="box-item">
                    <div className="box-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="box-title">
                        <h3>Programming</h3>
                    </div>
                </div>


                <div className="box-item">
                    <div className="box-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="box-title">
                        <h3>Programming</h3>
                    </div>
                </div>

          </div>
       </div>
    );
}

export default MyBook;