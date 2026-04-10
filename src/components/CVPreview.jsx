import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download } from 'lucide-react';
import Template1 from '../templates/Template1';
import Template2 from '../templates/Template2';
import Template3 from '../templates/Template3';
import Template4 from '../templates/Template4';

function CVPreview({ data, template }) {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data.name || 'CV'}_Resume`,
  });

  const renderTemplate = () => {
    switch (template) {
      case 'template1': return <Template1 data={data} />;
      case 'template2': return <Template2 data={data} />;
      case 'template3': return <Template3 data={data} />;
      case 'template4': return <Template4 data={data} />;
      default: return <Template1 data={data} />;
    }
  };

  return (
    <div style={{ width: '100%', maxWidth: '210mm', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button 
        onClick={handlePrint} 
        className="btn btn-primary" 
        style={{ marginBottom: '20px', alignSelf: 'flex-end', zIndex: 10 }}
      >
        <Download size={18} /> Download PDF
      </button>

      <div 
        className="cv-document" 
        ref={componentRef}
      >
        {renderTemplate()}
      </div>
    </div>
  );
}

export default CVPreview;
