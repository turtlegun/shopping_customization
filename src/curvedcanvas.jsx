import React, { useEffect, useRef, useState } from 'react';

function CanvasDownload() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');
  const [selectedFont, setSelectedFont] = useState('Butterfly Kids, cursive'); // Default font

  const [curver, setCurve] = useState(100);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw text along a curve starting from left to right with an upward arch
    ctx.font = `100px ${selectedFont}`;
    ctx.fillStyle = 'red';
    ctx.textAlign = 'center';

    const startY = canvas.height / 2; // Y-coordinate for the center of the canvas
    const startX = 50; // Starting X-coordinate for the curve
    const endX = canvas.width - 50;
    const totalLength = endX - startX; // Total length of the curve

    // Calculate the angle step for each character along the curve
    const angleStep = Math.PI / (text.length - 1);

    for (let i = 0; i < text.length; i++) {
      const angle = angleStep * i;
      const x = startX + (totalLength * (i / (text.length - 1)));
      const y = startY - Math.abs(Math.sin(angle) * curver); // Adjust the amplitude (50) as needed
      ctx.fillText(text[i], x, y);
    }
  }, [text, curver, selectedFont]);

  const handleDownload = () => {
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'canvas_image.png');
    canvasRef.current.toBlob(function (blob) {
      const url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text" />
      <canvas ref={canvasRef} width="800" height="600" style={{ border: '1px solid black' }}></canvas>
      <br />
      <button onClick={handleDownload}>Download Image</button>
      <input type='number' onChange={(e) => { setCurve(e.target.value) }} />
      <h3>Choose font:</h3>
      <select value={selectedFont} onChange={handleFontChange}>
        <option value="Butterfly Kids, cursive">Butterfly Kids</option>
        <option value="Rubik Scribble, sans-serif">Rubik Scribble</option>
        <option value="Workbench, sans-serif">Workbench</option>
      </select>
    </div>
  );
}

export default CanvasDownload;

