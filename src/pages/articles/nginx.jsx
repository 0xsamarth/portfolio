const Nginx = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        🚀 NGINX Guide for Security Reasearcher's 🛡️
      </h1>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          1. Introduction and Overview 📘
        </h2>
        <p>
          NGINX is a powerful, high-performance web server and reverse proxy
          server that is widely deployed on the internet. Its robust
          architecture, asynchronous event-driven model, and extensive
          configuration capabilities make it the backbone of many high-traffic
          sites. For bug bounty hunters, understanding NGINX in detail is
          crucial, as misconfigurations or overlooked settings may lead to
          exploitable vulnerabilities.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>🔄 Reverse Proxy Functionality</li>
          <li>⚖️ Load Balancing</li>
          <li>📦 Caching</li>
          <li>🧩 Module Architecture</li>
        </ul>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          2. Basic NGINX Configuration 🛠️
        </h2>
        <p>Located typically at <code>/etc/nginx/nginx.conf</code>.</p>
        <ul className="list-disc list-inside mt-2">
          <li><code>http</code> – HTTP configuration</li>
          <li><code>server</code> – Defines virtual hosts</li>
          <li><code>location</code> – Rules for URL paths</li>
        </ul>
        <pre className="bg-gray-100 p-3 mt-4 rounded overflow-x-auto">
          <code>{`server {
  listen 80;
  server_name example.com;
  location / {
    proxy_pass http://localhost:3000;
  }
}`}</code>
        </pre>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          3. Understanding Reverse Proxying 🔁
        </h2>
        <ul className="list-disc list-inside">
          <li>✅ Protect internal services</li>
          <li>🔀 Load balance traffic</li>
          <li>🌐 Serve content from multiple sources</li>
        </ul>
        <p className="mt-2 font-semibold">Tips:</p>
        <ul className="list-disc list-inside">
          <li>Be cautious with <code>proxy_pass</code></li>
          <li>Suppress internal IPs and error leakage</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          4. Common Misconfigurations 🧨
        </h2>
        <ul className="list-disc list-inside">
          <li>⚠️ Directory listing exposed</li>
          <li>📂 Misconfigured root/index paths</li>
          <li>🛑 Unsafe rewrite rules (redirects, traversal)</li>
          <li>🔓 Lack of internal route access control</li>
        </ul>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          5. Useful NGINX Modules 🔌
        </h2>
        <ul className="list-disc list-inside">
          <li><strong>ngx_http_rewrite_module</strong> – URL rewriting</li>
          <li><strong>ngx_http_headers_module</strong> – Manage headers</li>
          <li><strong>ngx_http_proxy_module</strong> – Core proxying</li>
          <li><strong>ngx_http_auth_basic_module</strong> – Basic auth</li>
          <li><strong>ngx_http_limit_req_module</strong> – Rate limiting</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          6. HTTP Headers and Manipulation 📬
        </h2>
        <ul className="list-disc list-inside">
          <li>
            Use <code>proxy_set_header</code> securely:
          </li>
        </ul>
        <pre className="bg-gray-100 p-3 mt-2 rounded overflow-x-auto">
          <code>{`proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`}</code>
        </pre>
        <ul className="list-disc list-inside mt-2">
          <li>Inject headers for cache poisoning</li>
          <li>Try spoofing X-Forwarded-For for logic bypass</li>
        </ul>
      </section>

      {/* Section 7 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          7. Common Vulnerabilities 🐛
        </h2>
        <ul className="list-disc list-inside">
          <li>Open Redirects via improper rewrites</li>
          <li>SSRF via proxy_pass misconfig</li>
          <li>Directory Traversal with unsafe paths</li>
          <li>HTTP Smuggling from parser desync</li>
        </ul>
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>ffuf</code>, <code>dirsearch</code> to discover</li>
          <li>Check <code>access.log</code> and <code>error.log</code></li>
        </ul>
      </section>

      {/* Section 8 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          8. Threat Modeling with NGINX 🧠🔍
        </h2>
        <ul className="list-disc list-inside">
          <li><strong>Assets:</strong> What is exposed?</li>
          <li><strong>Boundaries:</strong> Input/output trust zones</li>
          <li><strong>Surface:</strong> URLs, headers, methods</li>
          <li><strong>Abuse:</strong> Can internal paths be reached?</li>
        </ul>
      </section>

      {/* Section 9 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          9. Conclusion and Resources 🎓
        </h2>
        <p>
          Mastering NGINX gives bug bounty hunters deep insight into how web infrastructure works and where vulnerabilities can hide.
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>
            <a href="https://nginx.org/en/docs/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Official NGINX Docs
            </a>
          </li>
          <li>
            <a href="https://portswigger.net/web-security" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              PortSwigger Academy
            </a>
          </li>
          <li>
            <a href="https://book.hacktricks.xyz" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              HackTricks Book
            </a>
          </li>
          <li>
            <a href="https://owasp.org/www-project-top-ten/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              OWASP Top 10
            </a>
          </li>
        </ul>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500">
        Built with 💻 + 🐧 by <span className="text-blue-600 font-medium">Samarth Aher</span>
      </footer>
    </div>
  );
};

export default Nginx;
