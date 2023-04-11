'use client'
import Link from 'next/link';
import { useState } from 'react';

function blogjp() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Use os valores de title, subtitle e text aqui
    console.log(title, subtitle, text);
  }
  
  return (
    
    <div>
      <h1>Crie aqui seu texto</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        /><br /><br />

        <label htmlFor="subtitle">Subtitulo:</label>
        <input
          type="text"
          id="subtitle"
          name="subtitle"
          value={subtitle}
          onChange={(event) => setSubtitle(event.target.value)}
          required
        /><br /><br />

        <label htmlFor="text">Texto:</label><br />
        <textarea
          id="text"
          name="text"
          rows="10"
          cols="50"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        ></textarea><br /><br />
        

        <button type="submit">Salvar</button>
        <Link href="/">voltar</Link>
      </form>
    </div>
    
  );
}

export default blogjp;