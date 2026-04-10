import React from 'react';

function Template3({ data }) {
  return (
    <div style={{ padding: '50px', fontFamily: "'Georgia', serif", background: '#fdfbf7', minHeight: '297mm', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: '35px', textAlign: 'center' }}>
          
          {data.photo && (
            <div style={{ 
              width: '130px', height: '150px', 
              background: `url(${data.photo}) center/cover`, 
              border: '3px solid #bdc3c7', marginBottom: '20px'
            }} />
          )}
          
          <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0 0 10px', color: '#2c3e50', textTransform: 'uppercase', letterSpacing: '1px' }}>{data.name || 'Your Name'}</h1>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 20px', color: '#c0392b', letterSpacing: '1px' }}>{data.position || 'Position Applied For'}</h2>
          
          <div style={{ fontSize: '15px', color: '#34495e', display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap' }}>
            {data.mobile && <span>📞 {data.mobile}</span>}
            {data.address && <span>🏠 {data.address}</span>}
          </div>
        </div>

        {data.objective && (
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #c0392b', paddingBottom: '10px', marginBottom: '15px', textTransform: 'uppercase' }}>
              Career Objective
            </h2>
            <p style={{ fontSize: '16px', color: '#34495e', lineHeight: '1.8', margin: 0 }}>
              {data.objective}
            </p>
          </div>
        )}

        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #c0392b', paddingBottom: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            Passport Details
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '16px', lineHeight: '1.8', color: '#34495e' }}>
            {data.passportNumber && <div><strong>Passport No:</strong> {data.passportNumber}</div>}
            {data.passportIssueDate && <div><strong>Date of Issue:</strong> {data.passportIssueDate}</div>}
            {data.passportExpiryDate && <div><strong>Date of Expiry:</strong> {data.passportExpiryDate}</div>}
            {data.passportPlaceOfIssue && <div><strong>Place of Issue:</strong> {data.passportPlaceOfIssue}</div>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px', padding: '25px', border: '2px solid #bdc3c7', background: '#ecf0f1', borderRadius: '4px' }}>
          <div style={{ fontSize: '15px', lineHeight: '2', color: '#2c3e50' }}>
            {data.nationality && <div><strong>Nationality:</strong> {data.nationality}</div>}
            {data.religion && <div><strong>Religion:</strong> {data.religion}</div>}
            {data.maritalStatus && <div><strong>Marital Status:</strong> {data.maritalStatus}</div>}
          </div>
          <div style={{ fontSize: '15px', lineHeight: '2', color: '#2c3e50' }}>
            {data.dob && <div><strong>Date of Birth:</strong> {data.dob}</div>}
            {data.languages && <div><strong>Languages:</strong> {data.languages}</div>}
            {data.customFields.map((field) => (
              field.label && field.value && <div key={field.id}><strong>{field.label}:</strong> {field.value}</div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #c0392b', paddingBottom: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            Education Details
          </h2>
          <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#34495e', whiteSpace: 'pre-wrap' }}>
            {data.education || 'Add your qualifications...'}
          </div>
        </div>

        {data.skills && (
          <div style={{ marginBottom: '35px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #c0392b', paddingBottom: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
              Key Skills
            </h2>
            <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#34495e', whiteSpace: 'pre-wrap' }}>
              {data.skills}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '35px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #c0392b', paddingBottom: '10px', marginBottom: '20px', textTransform: 'uppercase' }}>
            Work Experience
          </h2>
          <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#34495e', whiteSpace: 'pre-wrap' }}>
            {data.experience || 'Add your work experience...'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '30px', borderTop: '2px dashed #bdc3c7' }}>
        <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#2c3e50', marginBottom: '10px' }}>Declaration</h3>
        <p style={{ fontSize: '15px', color: '#7f8c8d', lineHeight: '1.6' }}>
          I hereby declare that the information furnished above is true, complete, and correct to the best of my knowledge and belief.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px', fontSize: '16px', fontWeight: 'bold', color: '#2c3e50' }}>
          <span>Date: _________________</span>
          <span>Signature: _________________</span>
        </div>
      </div>

    </div>
  );
}

export default Template3;
