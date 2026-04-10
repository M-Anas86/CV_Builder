import React from 'react';

function Template1({ data }) {
  return (
    <div style={{ padding: '40px', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column', minHeight: '297mm' }}>
      
      <div style={{ flex: 1 }}>
        <div style={{ borderBottom: '2px solid #1e293b', paddingBottom: '20px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '30px' }}>
          
          {data.photo && (
            <div style={{ 
              width: '120px', height: '120px', borderRadius: '8px', 
              background: `url(${data.photo}) center/cover`, 
              border: '2px solid #e5e7eb', flexShrink: 0
            }} />
          )}

          <div style={{ flex: 1, textAlign: data.photo ? 'left' : 'center' }}>
            <h1 style={{ fontSize: '40px', fontWeight: '800', letterSpacing: '-1px', margin: '0 0 5px', color: '#0f172a' }}>{data.name || 'Your Name'}</h1>
            <h2 style={{ fontSize: '22px', color: '#4f46e5', fontWeight: '700', margin: '0 0 15px', textTransform: 'uppercase' }}>{data.position || 'Position Applied For'}</h2>
            
            <div style={{ fontSize: '15px', color: '#475569', display: 'flex', gap: '20px', justifyContent: data.photo ? 'flex-start' : 'center', flexWrap: 'wrap' }}>
              {data.mobile && <span>📱 {data.mobile}</span>}
              {data.address && <span>📍 {data.address}</span>}
            </div>
          </div>
        </div>

        {data.objective && (
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>Career Objective</h3>
            <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', margin: 0 }}>
              {data.objective}
            </p>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '35px' }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>Personal Profile</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', lineHeight: '2', color: '#334155' }}>
              {data.nationality && <li><strong>Nationality:</strong> {data.nationality}</li>}
              {data.religion && <li><strong>Religion:</strong> {data.religion}</li>}
              {data.maritalStatus && <li><strong>Marital Status:</strong> {data.maritalStatus}</li>}
              {data.dob && <li><strong>Date of Birth:</strong> {data.dob}</li>}
              {data.customFields.map((field) => (
                field.label && field.value && <li key={field.id}><strong>{field.label}:</strong> {field.value}</li>
              ))}
            </ul>
            
            <h3 style={{ marginTop: '20px', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>Passport Details</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', lineHeight: '2', color: '#334155' }}>
              {data.passportNumber && <li><strong>Passport No:</strong> {data.passportNumber}</li>}
              {data.passportIssueDate && <li><strong>Date of Issue:</strong> {data.passportIssueDate}</li>}
              {data.passportExpiryDate && <li><strong>Date of Expiry:</strong> {data.passportExpiryDate}</li>}
              {data.passportPlaceOfIssue && <li><strong>Place of Issue:</strong> {data.passportPlaceOfIssue}</li>}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>Education & Info</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '15px', lineHeight: '2', color: '#334155' }}>
               {data.languages && <li><strong>Languages:</strong> {data.languages}</li>}
               {data.education && <li><strong>Education:</strong> {data.education}</li>}
            </ul>
            
            {data.skills && (
              <>
                <h3 style={{ marginTop: '20px', fontSize: '18px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>Key Skills</h3>
                <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', whiteSpace: 'pre-wrap' }}>
                  {data.skills}
                </div>
              </>
            )}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '20px', fontWeight: '700', textTransform: 'uppercase', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '15px' }}>
            Professional Experience
          </h2>
          <div style={{ fontSize: '15px', lineHeight: '1.8', color: '#334155', whiteSpace: 'pre-wrap' }}>
            {data.experience || 'Add your experience here...'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
        <div style={{ borderTop: '2px solid #e2e8f0', paddingTop: '20px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>Declaration</h3>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
            I hereby declare that the information furnished above is true, complete, and correct to the best of my knowledge and belief.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '15px', fontWeight: '600', color: '#334155' }}>
            <span>Date: _________________</span>
            <span>Signature: _________________</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Template1;
