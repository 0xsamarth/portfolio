import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Load Feather icons after component mounts
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-100 text-black min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 relative">
          <h1 className="text-4xl font-bold text-black">Samarth Aher</h1>
          <p className="text-lg text-gray-700">
            Security Researcher | Penetration Tester |{' '}
            <span className="text-red-600">Red Teamer</span>
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-2 text-sm text-gray-700">
            <a href="tel:+917755945515" className="flex items-center gap-1 text-gray-700 hover:underline">
              <i data-feather="phone" className="w-4 h-4" /> +91 7755945515
            </a>
            <a href="mailto:0xsamarth@gmail.com" className="flex items-center gap-1 text-gray-700 hover:underline">
              <i data-feather="mail" className="w-4 h-4" /> 0xsamarth@gmail.com
            </a>
            <a href="https://samarthaher.github.io/blogs/" className="flex items-center gap-1 text-gray-700 hover:underline">
              <i data-feather="globe" className="w-4 h-4" /> samarthaher.github.io/blogs
            </a>
          </div>
          <div className="absolute top-0 right-0">
            <button onClick={() => window.print()} className="text-sm text-blue-700 hover:underline">
              Download as PDF
            </button>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Professional Summary</h2>
          <p className="mt-3 leading-relaxed text-gray-800">
            Security Researcher with hands-on experience in discovering and reporting vulnerabilities across web
            applications, APIs, and networks. Skilled in penetration testing, scripting, and red teaming with a strong
            foundation in OWASP Top 10. Adept at using advanced security tools and methodologies for offensive security
            testing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Work Experience</h2>
          <div className="mt-3">
            <p className="font-semibold text-gray-900">Freelance Security Researcher / Penetration Tester</p>
            <p className="text-sm text-gray-600">Remote | 2022 – Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-800 text-sm">
              <li>Performed manual and automated testing across live environments.</li>
              <li>Reported security issues through bug bounty platforms such as HackerOne and Bugcrowd.</li>
              <li>Generated professional security reports with remediation recommendations.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Skills</h2>
          <ul className="mt-3 text-sm text-gray-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li><strong>OWASP Top 10:</strong> Practical knowledge of exploiting and mitigating XSS, SQLi, CSRF, and IDOR.</li>
            <li><strong>Scripting:</strong> Automating tasks with Bash, Python, and PowerShell in both Linux and Windows.</li>
            <li><strong>Manual Testing:</strong> Proficient in Burp Suite Pro and OWASP ZAP for deep web/API testing.</li>
            <li><strong>Automated Scanning:</strong> Scanning infrastructure vulnerabilities with Nessus and similar tools.</li>
            <li><strong>OS Environments:</strong> Kali Linux and Windows Server used for testing and simulations.</li>
            <li><strong>Red Teaming:</strong> Leveraging Cobalt Strike for exploitation, persistence, and reporting.</li>
            <li><strong>Frameworks:</strong> Applying MITRE ATT&CK and CVSS for structured threat modeling and scoring.</li>
            <li><strong>SIEM Tool:</strong> Leveraging Splunk for Real-Time Threat Detection, Log Correlation, and Incident Response Automation.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Education</h2>
          <ul className="mt-3 text-sm text-gray-800 space-y-3">
            <li>
              <strong>Bachelor of Engineering in Information Technology</strong><br />
              Savitribai Phule Pune University, 2023 – CGPA: 8.04
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Projects</h2>
          <ul className="mt-3 text-sm text-gray-800 space-y-4">
            <li><strong>SIEM Monitoring & Alerting</strong><br />Built and tuned alerts in Splunk for real-time threat detection.</li>
            <li><strong>Web Application Penetration Testing</strong><br />Performed end-to-end OWASP Top 10 testing on real-world apps.</li>
            <li><strong>API Penetration Testing</strong><br />Tested insecure APIs for authentication bypass, IDOR, SSRF, and mass assignment.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Languages</h2>
          <ul className="mt-3 text-sm text-gray-800 list-disc list-inside">
            <li>English – Full Professional Proficiency</li>
            <li>Hindi – Native Speaker</li>
            <li>Marathi – Native Speaker</li>
            <li>German – A1 Level</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Certifications</h2>
          <ul className="mt-3 text-sm text-gray-800 list-disc list-inside">
            <li>CEH (In progress)</li>
            <li>OSCP (In progress)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black border-b pb-1 border-gray-400">Additional Information</h2>
          <ul className="mt-3 text-sm text-gray-800 list-disc list-inside">
            <li>Technical Blogger focused on cybersecurity</li>
            <li>Available for immediate joining</li>
            <li>Open to relocation or remote opportunities</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
