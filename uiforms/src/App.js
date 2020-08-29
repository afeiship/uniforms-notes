import React from 'react';
import { AutoForm } from 'uniforms-semantic';
import { bridge as schema } from './GuestSchema';


export function GuestFormBasic() {
  return <AutoForm schema={schema} onSubmit={console.log} />;
}
function App() {
  return (
    <div className="App">
      <GuestFormBasic />
    </div>
  );
}

export default App;
