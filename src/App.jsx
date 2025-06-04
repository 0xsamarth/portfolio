import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Resume from './pages/Resume';
import SearchResults from './pages/SearchResults';

/* Articles */
import Articles from './pages/Articles';
import ArticleOne from "./pages/articles/article-one";
import Nginx from "./pages/articles/nginx";
import Linux from "./pages/articles/linux-cheatsheet";
import Authentication from './pages/articles/authentication';
import AccessControl1 from './pages/articles/access-control-1';

/* Tools */
import Tools from './pages/Tools';
import JSBeautifier from "./tools/beautifier";
import GitHubFinder from './tools/git';

/* Resources */
import Resources from "./pages/Resources";
import Notes from "./pages/resources/Notes";
import Cheatsheets from "./pages/resources/Cheatsheets";
import Payloads from "./pages/resources/Payloads";
import AuthNotes from "./pages/resources/notes/AuthNotes";
import LinuxFundamentals from './pages/resources/cheatsheets/Linux';
import XSSPayloads from "./pages/resources/payloads/XSSPayloads";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/search" element={<SearchResults />} />

      {/* Articles */}
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/article-one" element={<ArticleOne />} />
      <Route path="/articles/nginx" element={<Nginx />} />
      <Route path="/articles/access-control-1" element={<AccessControl1 />} />
      <Route path="/articles/linux-cheatsheet" element={<Linux />} />
      <Route path="/articles/authentication" element={<Authentication />} />

      {/* Tools */}
      <Route path="/tools" element={<Tools />} />
      <Route path="/tools/beautifier" element={<JSBeautifier />} />
      <Route path="/tools/git" element={<GitHubFinder />} />

      {/* Resources */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/notes" element={<Notes />} />
      <Route path="/resources/cheatsheets" element={<Cheatsheets />} />
      <Route path="/resources/payloads" element={<Payloads />} />
      <Route path="/resources/notes/auth" element={<AuthNotes />} />
      <Route path="/resources/payloads/xss" element={<XSSPayloads />} />
      <Route path="/resources/cheatsheets/linux" element={<LinuxFundamentals />} />
    </Routes>
  );
}

export default App;

