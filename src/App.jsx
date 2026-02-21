import { HashRouter,Routes, Route } from 'react-router-dom';
import { Header } from "./features/layout/components/Header";
import { Footer } from "./features/layout/components/Footer";
import { Content } from "./features/layout/components/Content";
import { Article } from "./features/layout/components/Article";
import { Props } from "./features/layout/components/Props";
import './shared/styles/App.css';

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/props" element={<Props />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
