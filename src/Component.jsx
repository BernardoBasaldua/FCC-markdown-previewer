import React, {useState} from 'react';
import './component.css';
import ReactMarkdown from 'react-markdown';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

export default function Component() {
    const[text, setText] = useState(defaultMarkdown);

    const textOnChange = (event) => {
        setText(event.target.value);
    }

    //const textareaContent = React.createElement("div", "# Esto es un titulo h1");

    return (
        <div id='component-container' className="row justify-content-center align-items-center" >
            <div id="editor-container" className="col-md-4">
                <div className="title">
                    <img src="https://icones.pro/wp-content/uploads/2022/07/icone-crayon-noir.png" alt="editor" id="editor-img" />
                    <span>Editor</span>
                </div>
                <textarea id="editor"  name="Editor" rows="23" value={text} onChange={textOnChange}></textarea>
            </div>
            <div id="preview-container" className="col-md-8">
                <div className="title">
                    <img src="https://icones.pro/wp-content/uploads/2021/05/symbole-de-l-oeil-noir.png" alt="preview" id="preview-img" />
                    <span>Preview</span>
                </div>
                <div id="preview">
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
