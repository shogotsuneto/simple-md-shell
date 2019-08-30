import React from 'react'
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import styles from '../../styles/Contents.module.css'

const Code = ({language, codeString}) => {
  return (
    <div className={styles['codeblock-container']} >
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;