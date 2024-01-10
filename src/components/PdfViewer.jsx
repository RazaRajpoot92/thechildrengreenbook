import {Document, Page} from "react-pdf"
import samplePdf from "../assets/sample.pdf"

import { useState } from 'react';

const PDFViewer = () => {

    const [numPage ,setnumPage] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    function onDucLoadSucc({numPage}){
        setnumPage(numPage)
        setPageNumber(1)
    }
    return (
        <div>
            <Document file={samplePdf} onLoadSuccess={onDucLoadSucc}>
                <Page height="600" pageNumber={pageNumber} />
            </Document>
        </div>
    )
}

export default PDFViewer