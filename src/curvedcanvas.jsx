import React, { useEffect, useRef, useState } from 'react';

function CanvasDownload() {
  const canvasRef = useRef(null);
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw text along a curve starting from left to right with an upward arch
    ctx.font = '100px serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';

    const startY = canvas.height / 2; // Y-coordinate for the center of the canvas
    const startX = 50; // Starting X-coordinate for the curve
    const endX = canvas.width - 50; // Ending X-coordinate for the curve
    const totalLength = endX - startX; // Total length of the curve

    // Calculate the angle step for each character along the curve
    const angleStep = Math.PI / (text.length - 1);

    for (let i = 0; i < text.length; i++) {
      const angle = angleStep * i;
      const x = startX + (totalLength * (i / (text.length - 1)));
      const y = startY - Math.abs(Math.sin(angle) * 50); // Adjust the amplitude (50) as needed
      ctx.fillText(text[i], x, y);
    }

  }, [text]);

  const handleDownload = () => {
    // Create download link
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'canvas_image.png');
    canvasRef.current.toBlob(function(blob) {
      const url = URL.createObjectURL(blob);
      downloadLink.setAttribute('href', url);
      downloadLink.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text" />
      <canvas ref={canvasRef} width="800" height="500" style={{ border: '1px solid black' }}></canvas><br />
      <button onClick={handleDownload}>Download Image</button>
    </div>
  );
}

export default CanvasDownload;

