import React, { useState } from 'react';

const ContactMeModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const [context, setContext] = useState('');
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a backend or email service)
    console.log({ email, subject: subject === 'other' ? customSubject : subject, context, attachments });
    onClose(); // Close modal after submission
  };

  const handleAttachmentChange = (e) => {
    setAttachments([...e.target.files]);
  };

  if (!isOpen) return null;

  return (
    <>
    <div className="modal-backdrop show">
        <div className="modal modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Contact Me</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)} required>
            <option value="">Select a subject</option>
            <option value="Hire Me">Hire Me</option>
            <option value="Freelance Project">Freelance Project</option>
            <option value="Invitation to collaborate on project">Invitation to collaborate on project</option>
            <option value="other">Other</option>
          </select>
        </label>
        {subject === 'other' && (
          <label>Custom Subject:
            <input type="text" value={customSubject} onChange={(e) => setCustomSubject(e.target.value)} required />
          </label>
        )}
        <label>Context:
          <textarea value={context} onChange={(e) => setContext(e.target.value)} required />
        </label>
        <label>Attachments:
          <input type="file" multiple onChange={handleAttachmentChange} />
        </label>
        <button type="submit" className="btn btn-primary">Send</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMeModal;