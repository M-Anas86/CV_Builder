import React from 'react';

function Template4({ data }) {
  return (
    <div style={{ padding: '40px', fontFamily: "'Outfit', sans-serif", display: 'flex', flexDirection: 'column', minHeight: '297mm' }}>
      
      <div style={{ flex: 1 }}>
        <div style={{ background: '#f0fdf4', padding: '35px', borderRadius: '15px', border: '2px solid #bbf7d0', marginBottom: '35px', position: 'relative' }}>
          
          {data.photo && (
            <div style={{ 
              position: 'absolute', top: '35px', right: '35px',
              width: '120px', height: '120px', borderRadius: '15px', 
              background: `url(${data.photo}) center/cover`, 
              border: '4px solid #22c55e', boxShadow: '0 6px 12px rgba(0,0,0,0.1)'
            }} />
          )}

          <div style={{ borderBottom: '2px solid #22c55e', paddingBottom: '20px', marginBottom: '20px', paddingRight: data.photo ? '150px' : '0' }}>
            <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#166534', margin: '0 0 10px', textTransform: 'uppercase' }}>{data.name || 'Your Name'}</h1>
            <h2 style={{ fontSize: '24px', color: '#15803d', margin: '0', fontWeight: '700' }}>{data.position || 'Position Applied For'}</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '15px', color: '#166534', lineHeight: '1.6' }}>
            {data.mobile && <div><strong>Mobile:</strong> {data.mobile}</div>}
            {data.nationality && <div><strong>Nationality:</strong> {data.nationality}</div>}
            {data.religion && <div><strong>Religion:</strong> {data.religion}</div>}
            {data.maritalStatus && <div><strong>Marital Status:</strong> {data.maritalStatus}</div>}
            {data.dob && <div><strong>DOB:</strong> {data.dob}</div>}
            {data.customFields.map((field) => (
              field.label && field.value && (
                <div key={field.id}><strong>{field.label}:</strong> {field.value}</div>
              )
            ))}
          </div>
        </div>

        {data.objective && (
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#166534', margin: 0, textTransform: 'uppercase' }}>Career Objective</h2>
              <div style={{ height: '3px', flex: 1, background: '#bbf7d0', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '16px', color: '#14532d', lineHeight: '1.8', whiteSpace: 'pre-wrap', padding: '0 10px' }}>
              {data.objective}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#166534', margin: 0, textTransform: 'uppercase' }}>Passport Details</h2>
            <div style={{ height: '3px', flex: 1, background: '#bbf7d0', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '16px', color: '#14532d', padding: '0 10px' }}>
            {data.passportNumber && <div><strong>Passport No:</strong> {data.passportNumber}</div>}
            {data.passportIssueDate && <div><strong>Date of Issue:</strong> {data.passportIssueDate}</div>}
            {data.passportExpiryDate && <div><strong>Date of Expiry:</strong> {data.passportExpiryDate}</div>}
            {data.passportPlaceOfIssue && <div><strong>Place of Issue:</strong> {data.passportPlaceOfIssue}</div>}
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#166534', margin: 0, textTransform: 'uppercase' }}>Education</h2>
            <div style={{ height: '3px', flex: 1, background: '#bbf7d0', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ fontSize: '16px', color: '#14532d', marginBottom: '15px', padding: '0 10px' }}>
             <strong>Languages:</strong> {data.languages}
          </div>
          <div style={{ fontSize: '16px', color: '#14532d', lineHeight: '1.8', whiteSpace: 'pre-wrap', padding: '0 10px' }}>
            {data.education || 'Add your education here...'}
          </div>
        </div>

        {data.skills && (
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#166534', margin: 0, textTransform: 'uppercase' }}>Key Skills</h2>
              <div style={{ height: '3px', flex: 1, background: '#bbf7d0', borderRadius: '2px' }}></div>
            </div>
            
            <div style={{ fontSize: '16px', color: '#14532d', lineHeight: '1.8', whiteSpace: 'pre-wrap', padding: '0 10px' }}>
              {data.skills}
            </div>
          </div>
        )}

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#166534', margin: 0, textTransform: 'uppercase' }}>Professional Experience</h2>
            <div style={{ height: '3px', flex: 1, background: '#bbf7d0', borderRadius: '2px' }}></div>
          </div>
          
          <div style={{ fontSize: '16px', color: '#14532d', lineHeight: '1.8', whiteSpace: 'pre-wrap', padding: '0 10px' }}>
            {data.experience || 'Add your experience here...'}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
        <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#166534', marginBottom: '10px' }}>Declaration</h3>
          <p style={{ fontSize: '15px', color: '#14532d', lineHeight: '1.6' }}>
            I hereby declare that the information furnished above is true, complete, and correct to the best of my knowledge and belief.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '16px', fontWeight: '800', color: '#166534' }}>
            <span>Date: _________________</span>
            <span>Signature: _________________</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Template4;
