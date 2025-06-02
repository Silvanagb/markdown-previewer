import React, { useState } from "react";
import { marked } from "marked";
import "./App.css";

const defaultMarkdown = \`# Encabezado H1
## Subencabezado H2

Este es un [enlace](https://www.freecodecamp.org)

Aquí hay \`código en línea\`

\`\`\`
Bloque de código
con varias líneas
\`\`\`

- Elemento de lista 1
- Elemento de lista 2

> Cita en bloque

![Imagen FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Texto en negrita**
\`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown, { breaks: true }),
        }}
      />
    </div>
  );
}

export default App;