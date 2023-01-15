import { useEffect} from "react";
import { useParams } from "react-router-dom"
import ViewSDKClient from "../SDK/ViewSDKClient";
function ReadBook({ params }) {
    const { id, title } = useParams();

    useEffect(()=>{
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            /* By default the embed mode will be Full Window */
            viewSDKClient.previewFile("pdf-div", {},{
                pdfFile : 'https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf',
                filename : 'MyEbook'
            });
        });
    });

    return (
        <>
            <div className="book-reader">
                <div className="bok-title"><h1>{title}</h1></div>
                <div className="book-show">
                  <div id="pdf-div" className="full-window-div">Loading...</div>
                </div>
            </div>
        </>
    );
}

export default ReadBook;