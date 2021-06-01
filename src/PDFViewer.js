import React, { useState } from 'react';
//import { Document, Page } from 'react-pdf';
import { Document, Page, pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import './PDFViewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// import pdfjs from 'pdfjs-dist'
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;



function PDFViewer(){

const [numPages, setNumPages] = useState(null);
const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {

    setNumPages(numPages);
  }



return (
    <div>
      <Document
       	file={{url: 'https://www.pdf995.com/samples/pdf.pdf'}}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );

}

export default PDFViewer;