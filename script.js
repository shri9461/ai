document.getElementById('downloadPDF').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
  
    let y = 10; // vertical position
  
    doc.setFontSize(16);
    doc.text(name, 10, y);
    y += 10;
  
    doc.setFontSize(12);
    doc.text(`Email: ${email}`, 10, y);
    y += 7;
    doc.text(`Phone: ${phone}`, 10, y);
    y += 7;
    doc.text(`LinkedIn: ${linkedin}`, 10, y);
    y += 10;
  
    doc.setFontSize(14);
    doc.text('Professional Summary', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(summary, 180), 10, y);
    y += doc.getTextDimensions(doc.splitTextToSize(summary, 180)).h + 5;
  
    doc.setFontSize(14);
    doc.text('Skills', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(skills, 180), 10, y);
    y += doc.getTextDimensions(doc.splitTextToSize(skills, 180)).h + 5;
  
    doc.setFontSize(14);
    doc.text('Work Experience', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(experience, 180), 10, y);
    y += doc.getTextDimensions(doc.splitTextToSize(experience, 180)).h + 5;
  
    doc.setFontSize(14);
    doc.text('Education', 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(education, 180), 10, y);
  
    doc.save('Resume.pdf');
  });
  