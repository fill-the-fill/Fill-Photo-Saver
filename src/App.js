import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/imageGrid";
import Modal from "./comps/Modal";
import SignIn from "./comps/auth/SignIn";
import SignUp from "./comps/auth/SignUp";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/test" component={Title}/>
        </Switch>
      </BrowserRouter>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
