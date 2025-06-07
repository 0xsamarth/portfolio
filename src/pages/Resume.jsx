import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/feather-icons';
    script.onload = () => {
      if (window.feather) window.feather.replace();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 font-mono min-h-screen py-10 px-6 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10 relative">
          <h1 className="text-4xl font-bold">Samarth Aher</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Security Researcher | Penetration Tester | <span className="text-red-600">Red Teamer</span>
          </p>
          <div className="flex justify-center items-center flex-wrap gap-4 mt-2 text-sm text-gray-700 dark:text-gray-300">
            <a href="tel:+917755945515" className="flex items-center gap-1 hover:underline">
              <i data-feather="phone" className="w-4 h-4" /> +91 7755945515
            </a>
            <a href="mailto:0xsamarth@gmail.com" className="flex items-center gap-1 hover:underline">
              <i data-feather="mail" className="w-4 h-4" /> 0xsamarth@gmail.com
            </a>
            <a href="https://samarthaher.github.io/blogs/" className="flex items-center gap-1 hover:underline">
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
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Professional Summary</h2>
          <p className="mt-3 leading-relaxed">
            Cybersecurity specialist with proven experience identifying critical vulnerabilities in modern applications and networks. Passionate about offensive security, red teaming, and secure software design. Adept at collaborating with developers and infrastructure teams to mitigate risks and strengthen cyber resilience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Work Experience</h2>
          <div className="mt-3">
            <p className="font-semibold">Freelance Security Researcher / Penetration Tester</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Remote | 2022 – Present</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Conducted black-box and gray-box testing for over 50 web applications.</li>
              <li>Reported 100+ validated vulnerabilities on platforms like HackerOne, Bugcrowd, and private programs.</li>
              <li>Worked with engineering teams to verify patches and hardening improvements.</li>
              <li>Produced actionable documentation and risk analysis for stakeholders.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Skills</h2>
          <ul className="mt-3 text-sm grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li><strong>OWASP Top 10:</strong> Exploiting and mitigating common web vulnerabilities.</li>
            <li><strong>Scripting:</strong> Python, Bash, and PowerShell automation experience.</li>
            <li><strong>Tools:</strong> Burp Suite Pro, OWASP ZAP, Nessus, Nmap, Wireshark.</li>
            <li><strong>Infrastructure:</strong> AWS Security, Linux hardening, Windows AD enumeration.</li>
            <li><strong>Red Teaming:</strong> Proficient in Cobalt Strike, custom payload delivery, and OPSEC.</li>
            <li><strong>Frameworks:</strong> MITRE ATT&CK, NIST, CVSS scoring.</li>
            <li><strong>SIEM:</strong> Experienced with Splunk and ELK Stack for threat hunting and alerting.</li>
            <li><strong>Collaboration:</strong> Git, JIRA, Slack, Confluence, agile-ready workflows.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Education</h2>
          <p className="mt-3 text-sm">
            <strong>B.E. in Information Technology</strong><br />
            Savitribai Phule Pune University, 2023 — CGPA: 8.04
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Projects</h2>
          <ul className="mt-3 text-sm space-y-4">
            <li><strong>SIEM Alert Engineering:</strong> Developed custom correlation rules in Splunk for privilege escalation detection.</li>
            <li><strong>Web & API Security Lab:</strong> Created a lab to simulate XSS, CSRF, IDOR, JWT issues for training purposes.</li>
            <li><strong>CTF Platform Deployment:</strong> Built a capture-the-flag platform with Docker and custom challenge sets.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Languages</h2>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>English – Full Professional Proficiency</li>
            <li>Hindi – Native Speaker</li>
            <li>Marathi – Native Speaker</li>
            <li>German – A1 Level</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Certifications</h2>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>Cybrary: Introduction to IT & Cyber Security</li>
            <li>Certified Ethical Hacker (CEH) – In Progress</li>
            <li>Offensive Security Certified Professional (OSCP) – In Progress</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-1 border-gray-400">Additional Information</h2>
          <ul className="mt-3 text-sm list-disc list-inside">
            <li>Active technical blogger in cybersecurity and InfoSec awareness.</li>
            <li>Open to internships, freelance, and full-time security roles globally.</li>
            <li>Available immediately | Willing to relocate or work remotely.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
