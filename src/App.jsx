import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Resume from './pages/Resume';



{/* Articles */}

import Articles from './pages/Articles';
import ArticleOne from "./pages/articles/article-one";
import Nginx from "./pages/articles/nginx";
import Linux from "./pages/articles/linux-cheatsheet"
import GitHubFinder from "./pages/articles/github-finder"
import Authentication from './pages/articles/authentication';
import AccessControl1 from './pages/articles/access-control-1';

{/* Resources */}
import Resources from "./pages/Resources";
import Notes from "./pages/resources/Notes";
import Cheatsheets from "./pages/resources/Cheatsheets";
import Payloads from "./pages/resources/Payloads";
import AuthNotes from "./pages/resources/notes/AuthNotes";
import LinuxFundamentals from './pages/resources/cheatsheets/Linux';
import XSSPayloads from "./pages/resources/payloads/XSSPayloads";

// import NginxCheat from "./pages/resources/cheatsheets/NginxCheat";
// import BashCheat from "./pages/resources/cheatsheets/BashCheat";
// import SQLiPayloads from "./pages/resources/payloads/SQLiPayloads";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />


        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/article-one" element={<ArticleOne />} />
        <Route path="/articles/nginx" element={<Nginx />} />
        <Route path="/articles/access-control-1" element={<AccessControl1 />} />

        <Route path="/articles/linux-cheatsheet" element={<Linux />} />
        <Route path="/articles/github-finder" element={<GitHubFinder />} />
        <Route path="/articles/authentication" element={<Authentication />} />    
  
        {/* Add more routes as needed */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/notes" element={<Notes />} />
      <Route path="/resources/cheatsheets" element={<Cheatsheets />} />
      <Route path="/resources/payloads" element={<Payloads />} />
      
      {/* Nested Resource Pages */}
     <Route path="/resources/notes/auth" element={<AuthNotes />} />
     <Route path="/resources/payloads/xss" element={<XSSPayloads />} />

      <Route path="/resources/cheatsheets/linux" element={<LinuxFundamentals />} />

  {/*
      <Route path="/resources/notes/linux" element={<LinuxNotes />} />
      <Route path="/resources/cheatsheets/nginx" element={<NginxCheat />} />
      <Route path="/resources/cheatsheets/bash" element={<BashCheat />} />
      <Route path="/resources/payloads/sqli" element={<SQLiPayloads />} /> */}


      </Routes>
    </Router>
  );
}

export default App;
