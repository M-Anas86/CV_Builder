import React, { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import TemplateSelector from './components/TemplateSelector';

const objectivesList = [
  "Dedicated and hardworking {POSITION} seeking a challenging role in the Middle East. Aiming to leverage strong technical skills and hands-on experience to ensure the safe, efficient, and successful execution of projects. Committed to maintaining the highest standards of workmanship and safety.",
  "Highly motivated {POSITION} with a proven track record of excellence. Seeking to secure a rewarding position to utilize my extensive Gulf expertise, contribute to organizational growth, and deliver top-quality results while adhering strictly to project timelines and compliance guidelines.",
  "Results-driven {POSITION} looking for a long-term professional opportunity. Dedicated to contributing to team success through hard work, continuous learning, and an unwavering commitment to safe operational practices and collaborative team environments.",
  "Experienced and reliable {POSITION} seeking to deploy my practical skills in a dynamic work environment. Eager to take on challenging responsibilities, optimize workflow efficiency, and prove my dedication as a valuable asset to your esteemed organization.",
  "Proactive {POSITION} with a strong work ethic and deep understanding of industry standards. Looking for an opportunity to apply my practical expertise and Gulf experience to ensure project success, driven by a passion for quality and steadfast reliability."
];

function App() {
  const [step, setStep] = useState(1); // Step 1: Input, Step 2: Template Selection & Preview
  const [computedObjective, setComputedObjective] = useState('');

  const [cvData, setCvData] = useState({
    name: '',
    position: '',
    mobile: '',
    passportNumber: '',
    passportIssueDate: '',
    passportExpiryDate: '',
    passportPlaceOfIssue: '',
    nationality: '',
    religion: '',
    maritalStatus: '',
    dob: '',
    address: '',
    experience: '',
    education: '',
    languages: '',
    skills: '',
    customFields: [] // Array of { id, label, value }
  });

  const [activeTemplate, setActiveTemplate] = useState('template1');

  const handleUpdateData = (newData) => {
    setCvData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleGenerate = () => {
    const pos = cvData.position || 'Professional';
    const nameLen = (cvData.name || '').length;
    const posLen = pos.length;
    
    // Pick an objective stably based on input length
    const hash = nameLen + posLen;
    const template = objectivesList[hash % objectivesList.length];
    
    setComputedObjective(template.replace(/{POSITION}/g, pos));
    setStep(2);
  };

  // View: Step 1 - Form Input Only
  if (step === 1) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div className="glass-panel" style={{ width: '100%', maxWidth: '900px', padding: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '10px' }}>
              CV Generator
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>Fill in your details below to build your professional profile.</p>
          </div>

          <CVForm data={cvData} onUpdate={handleUpdateData} />
          
          <div style={{ marginTop: '40px', textAlign: 'center' }}>
            <button 
              className="btn btn-primary" 
              onClick={handleGenerate} 
              style={{ width: '100%', maxWidth: '300px', padding: '16px', fontSize: '16px' }}
            >
              Generate CV Outline →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // View: Step 2 - Template Selection & Preview
  return (
    <div className="app-container">
      {/* Left Sidebar - Template Selection */}
      <div className="sidebar glass-panel">
        <h1 style={{ marginBottom: '24px', fontSize: '24px', fontWeight: '700', color: 'var(--primary-color)' }}>
          Customize CV
        </h1>
        
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ fontSize: '16px', marginBottom: '16px', color: 'var(--text-dark)' }}>Choose Template</h2>
          <TemplateSelector 
            activeTemplate={activeTemplate} 
            onSelect={setActiveTemplate} 
          />
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.4)', paddingTop: '30px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '15px' }}>Need to correct a mistake or add info?</p>
          <button 
            className="btn btn-secondary" 
            onClick={() => setStep(1)} 
            style={{ width: '100%' }}
          >
            ← Back to Edit Details
          </button>
        </div>
      </div>

      {/* Right Area - Live Preview */}
      <div className="preview-area">
        <CVPreview data={{
          ...cvData, 
          objective: computedObjective
        }} template={activeTemplate} />
      </div>
    </div>
  );
}

export default App;
