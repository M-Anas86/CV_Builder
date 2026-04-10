import React from 'react';

const templates = [
  { id: 'template1', name: 'Minimalist' },
  { id: 'template2', name: 'Modern Split' },
  { id: 'template3', name: 'Classic' },
  { id: 'template4', name: 'Elegant' },
];

function TemplateSelector({ activeTemplate, onSelect }) {
  return (
    <div className="template-grid">
      {templates.map((tpl) => (
        <div
          key={tpl.id}
          className={`template-card ${activeTemplate === tpl.id ? 'active' : ''}`}
          onClick={() => onSelect(tpl.id)}
        >
          {tpl.name}
        </div>
      ))}
    </div>
  );
}

export default TemplateSelector;
