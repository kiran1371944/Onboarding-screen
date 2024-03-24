import { HashRouter, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import NotFound from './pages/NotFound';
import Buttons from './pages/Buttons';
// import Colours from './pages/Colors';
import Inputs from './pages/Inputs';
// import Tables from './components/ui/Tables/Tables';
// import ImageUpload from './components/ui/commonUpload/ImageUpload';
import Onboard from './pages/Onboarding';
import Accordion from './pages/testing';

export function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/colours" element={<Colours />} />
      <Route path="/table" element={<Tables />} />
      <Route
        path="/imageUpload"
        element={
          <ImageUpload
            onUpload={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        }
      /> */}
      <Route path="/buttons" element={<Buttons />} />

      <Route path="/inputs" element={<Inputs />} />

      <Route path="/" element={<Onboard />} />
      <Route path="/Accordion" element={<Accordion />} />
      {/* <Route path="/Accordion" element={<Accordion title={'test'} content={'data'} />} /> */}
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
