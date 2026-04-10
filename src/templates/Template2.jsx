import React from 'react';

function Template2({ data }) {
  return (
    <div style={{ display: 'flex', minHeight: '297mm', fontFamily: "'Inter', sans-serif", width: '100%' }}>
      {/* Left Column */}
      <div style={{ width: '40%', background: '#475569', color: '#ffffff', padding: '40px 30px', display: 'flex', flexDirection: 'column' }}>
        
        {data.photo ? (
          <div style={{ width: '140px', height: '140px', borderRadius: '50%', background: `url(${data.photo}) center/cover`, border: '4px solid #64748b', margin: '0 auto 30px' }}></div>
        ) : (
          <div style={{ width: '140px', height: '140px', borderRadius: '50%', background: '#cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#e2e8f0', margin: '0 auto 30px' }}></div>
        )}
        
        <h2 style={{ fontSize: '20px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #64748b', paddingBottom: '10px' }}>Contact</h2>
        <div style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          {data.mobile && <div><strong>Mobile</strong><br/><span style={{ color: '#cbd5e1' }}>{data.mobile}</span></div>}
          {data.address && <div><strong>Address</strong><br/><span style={{ color: '#cbd5e1' }}>{data.address}</span></div>}
        </div>

        <h2 style={{ fontSize: '20px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #64748b', paddingBottom: '10px' }}>Personal Specs</h2>
        <div style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
          {data.nationality && <div><strong>Nationality</strong><br/><span style={{ color: '#cbd5e1' }}>{data.nationality}</span></div>}
          {data.religion && <div><strong>Religion</strong><br/><span style={{ color: '#cbd5e1' }}>{data.religion}</span></div>}
          {data.maritalStatus && <div><strong>Marital Status</strong><br/><span style={{ color: '#cbd5e1' }}>{data.maritalStatus}</span></div>}
          {data.dob && <div><strong>Date of Birth</strong><br/><span style={{ color: '#cbd5e1' }}>{data.dob}</span></div>}
          
          {data.customFields.map((field) => (
            field.label && field.value && (
              <div key={field.id}>
                <strong>{field.label}</strong><br/>
                <span style={{ color: '#cbd5e1' }}>{field.value}</span>
              </div>
            )
          ))}
        </div>

        <h2 style={{ fontSize: '20px', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #64748b', paddingBottom: '10px' }}>Passport Details</h2>
        <div style={{ fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
          {data.passportNumber && <div><strong>Passport No</strong><br/><span style={{ color: '#cbd5e1' }}>{data.passportNumber}</span></div>}
          {data.passportIssueDate && <div><strong>Date of Issue</strong><br/><span style={{ color: '#cbd5e1' }}>{data.passportIssueDate}</span></div>}
          {data.passportExpiryDate && <div><strong>Date of Expiry</strong><br/><span style={{ color: '#cbd5e1' }}>{data.passportExpiryDate}</span></div>}
          {data.passportPlaceOfIssue && <div><strong>Place of Issue</strong><br/><span style={{ color: '#cbd5e1' }}>{data.passportPlaceOfIssue}</span></div>}
        </div>
      </div>
      
      {/* Right Column */}
      <div style={{ width: '60%', padding: '40px 40px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', marginBottom: '5px' }}>{data.name || 'Your Name'}</h1>
          <h3 style={{ fontSize: '22px', color: '#6366f1', fontWeight: '700', marginBottom: '30px', textTransform: 'uppercase' }}>{data.position || 'Position Applied For'}</h3>
          
          {data.objective && (
            <div style={{ marginBottom: '35px' }}>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
                Career Objective
              </h2>
              <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', margin: 0 }}>
                {data.objective}
              </p>
            </div>
          )}
          
          {data.education && (
            <>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
                Education & Qualifications
              </h2>
              <div style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '35px' }}>
                {data.education}
              </div>
            </>
          )}

          {data.languages && (
            <>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
                Languages
              </h2>
              <div style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '35px' }}>
                {data.languages}
              </div>
            </>
          )}

          {data.skills && (
            <>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
                Key Skills
              </h2>
              <div style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', whiteSpace: 'pre-wrap', marginBottom: '35px' }}>
                {data.skills}
              </div>
            </>
          )}
          
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1e293b', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px', marginBottom: '15px' }}>
            Experience
          </h2>
          <div style={{ fontSize: '16px', color: '#334155', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
            {data.experience || 'Add your experience here...'}
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '40px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>Declaration</h3>
          <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>
            I hereby declare that the information above is true to the best of my knowledge and belief.
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', fontSize: '15px', fontWeight: '600', color: '#334155' }}>
            <span>Date: _________________</span>
            <span>Signature: _______________</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Template2;
