import React from 'react';
import { Plus, Trash2, Upload } from 'lucide-react';

function CVForm({ data, onUpdate }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({ photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    onUpdate({ photo: null });
  };

  const handleCustomFieldChange = (id, fieldName, value) => {
    const updatedFields = data.customFields.map((f) => 
      f.id === id ? { ...f, [fieldName]: value } : f
    );
    onUpdate({ customFields: updatedFields });
  };

  const addCustomField = () => {
    const newField = { id: Date.now().toString(), label: '', value: '' };
    onUpdate({ customFields: [...data.customFields, newField] });
  };

  const removeCustomField = (id) => {
    const updatedFields = data.customFields.filter((f) => f.id !== id);
    onUpdate({ customFields: updatedFields });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Photo Upload Section */}
      <div className="form-group" style={{ 
        display: 'flex', alignItems: 'center', gap: '20px', 
        padding: '20px', background: 'rgba(255,255,255,0.4)', 
        borderRadius: '10px', border: '1px dashed rgba(99, 102, 241, 0.4)' 
      }}>
        <div style={{ 
          width: '80px', height: '80px', borderRadius: '50%', 
          background: data.photo ? `url(${data.photo}) center/cover` : '#e2e8f0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', flexShrink: 0,
          border: '3px solid #ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          {!data.photo && <span style={{ fontSize: '10px', color: '#64748b' }}>No Photo</span>}
        </div>
        
        <div style={{ flex: 1 }}>
          <label style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--primary-color)' }}>Profile Photo</label>
          <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
            <label className="btn btn-primary" style={{ fontSize: '12px', padding: '6px 12px', cursor: 'pointer', margin: 0 }}>
              <Upload size={14} style={{ marginRight: '6px' }} /> Upload Image
              <input type="file" accept="image/*" onChange={handlePhotoUpload} style={{ display: 'none' }} />
            </label>
            {data.photo && (
              <button type="button" onClick={removePhoto} className="btn btn-secondary" style={{ fontSize: '12px', padding: '6px 12px', color: '#ef4444' }}>
                Remove
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div>
          <label>Full Name</label>
          <input type="text" name="name" value={data.name || ''} onChange={handleChange} placeholder="e.g. Muhammad Ali" />
        </div>
        <div>
          <label>Position Applied For</label>
          <input type="text" name="position" value={data.position || ''} onChange={handleChange} placeholder="e.g. Electrician, Mason" />
        </div>
        <div>
          <label>Mobile Number</label>
          <input type="text" name="mobile" value={data.mobile || ''} onChange={handleChange} placeholder="e.g. +971 50..." />
        </div>
        <div>
          <label>Nationality</label>
          <input type="text" name="nationality" value={data.nationality || ''} onChange={handleChange} placeholder="e.g. India" />
        </div>
        <div>
          <label>Religion</label>
          <input type="text" name="religion" value={data.religion || ''} onChange={handleChange} placeholder="e.g. Islam" />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="text" name="dob" value={data.dob || ''} onChange={handleChange} placeholder="e.g. 01-Jan-1990" />
        </div>
        <div>
          <label>Marital Status</label>
          <input type="text" name="maritalStatus" value={data.maritalStatus || ''} onChange={handleChange} placeholder="e.g. Married, Single" />
        </div>
        
        <div style={{ gridColumn: '1 / -1', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginTop: '10px' }}>
          <h3 style={{ fontSize: '16px', color: 'var(--text-dark)' }}>Passport Details</h3>
        </div>
        <div>
          <label>Passport Number</label>
          <input type="text" name="passportNumber" value={data.passportNumber || ''} onChange={handleChange} placeholder="e.g. A1234..." />
        </div>
        <div>
          <label>Date of Issue</label>
          <input type="text" name="passportIssueDate" value={data.passportIssueDate || ''} onChange={handleChange} placeholder="e.g. 10-May-2018" />
        </div>
        <div>
          <label>Date of Expiry</label>
          <input type="text" name="passportExpiryDate" value={data.passportExpiryDate || ''} onChange={handleChange} placeholder="e.g. 09-May-2028" />
        </div>
        <div>
          <label>Place of Issue</label>
          <input type="text" name="passportPlaceOfIssue" value={data.passportPlaceOfIssue || ''} onChange={handleChange} placeholder="e.g. Lucknow" />
        </div>
      </div>

      <div className="form-group">
        <label>Current Address</label>
        <input type="text" name="address" value={data.address || ''} onChange={handleChange} placeholder="e.g. Dubai, UAE" />
      </div>

      <div className="form-group">
        <label>Languages Known</label>
        <input type="text" name="languages" value={data.languages || ''} onChange={handleChange} placeholder="e.g. English, Arabic, Hindi" />
      </div>

      <div className="form-group">
        <label>Education / Qualifications</label>
        <textarea name="education" value={data.education || ''} onChange={handleChange} rows="2" placeholder="e.g. High School Diploma..." />
      </div>

      <div className="form-group">
        <label>Skills</label>
        <textarea name="skills" value={data.skills || ''} onChange={handleChange} rows="4" placeholder="e.g. Electrical Wiring, Maintenance, Quality Check..." />
      </div>

      <div className="form-group">
        <label>Professional Experience</label>
        <textarea name="experience" value={data.experience || ''} onChange={handleChange} rows="5" placeholder="Detail your work experience..." />
      </div>

      <div style={{ marginTop: '10px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '12px', color: 'var(--text-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Additional Fields</span>
          <button type="button" onClick={addCustomField} className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: '12px' }}>
            <Plus size={14} /> Add Info
          </button>
        </h3>
        
        {data.customFields.length === 0 && (
          <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>You can add other details like IQAMA Expiry, Visa Status etc.</p>
        )}

        {data.customFields.map((field) => (
          <div key={field.id} className="dynamic-field-row">
            <div>
              <label>Label</label>
              <input type="text" value={field.label} onChange={(e) => handleCustomFieldChange(field.id, 'label', e.target.value)} placeholder="e.g. IQAMA Status" />
            </div>
            <div>
              <label>Value</label>
              <input type="text" value={field.value} onChange={(e) => handleCustomFieldChange(field.id, 'value', e.target.value)} placeholder="e.g. Valid" />
            </div>
            <button type="button" onClick={() => removeCustomField(field.id)} style={{ background: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', paddingBottom: '12px' }}>
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVForm;
