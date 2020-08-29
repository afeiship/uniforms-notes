import 'antd/dist/antd.css';
import React from 'react';
import { AutoForm } from 'uniforms-antd';
import { bridge as schema } from './GuestSchema';

function App() {
  return (
    <div className="App">
      <AutoForm
        showInlineError
        schema={schema}
        onSubmit={(model) => {
          console.log('model::', model);
        }}
      />
    </div>
  );
}

export default App;
