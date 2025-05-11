import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  ShieldCheck,
  Globe,
  Code,
  PhoneCall,
  MessageCircle,
  PackageOpen,
  XCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";

const businessServices = [
  {
    id: "web-security",
    icon: <ShieldCheck className="text-blue-600 w-8 h-8" />,
    title: "Web Security Audits",
    description:
      "Comprehensive testing and assessment of your web applications to uncover vulnerabilities and enhance protection. Perfect for organizations looking to proactively secure their web stack.",
  },
  {
    id: "pentesting",
    icon: <Code className="text-green-600 w-8 h-8" />,
    title: "Penetration Testing",
    description:
      "Simulated real-world attacks to evaluate the security of your systems and infrastructure. We offer detailed reporting and remediation suggestions for internal teams.",
  },
  {
    id: "cloud-security",
    icon: <Globe className="text-purple-600 w-8 h-8" />,
    title: "Cloud Security",
    description:
      "Securing cloud-native applications, configurations, and architectures across major platforms like AWS, Azure, and GCP. Includes posture management and IAM best practices.",
  },
  {
    id: "api-security",
    icon: <BadgeCheck className="text-yellow-500 w-8 h-8" />,
    title: "API Security",
    description:
      "Ensure your APIs are protected from threats with deep testing against injection flaws, broken authentication, and sensitive data exposure.",
  },
];

const personalServices = [
  {
    id: "one-on-one",
    icon: <PhoneCall className="text-pink-500 w-8 h-8" />,
    title: "1:1 Call",
    description:
      "This guide is designed to help bug hunters understand and test Access Control in web applications. It covers the basics of managing user permissions, roles, and protecting sensitive resources.",
    link: "https://topmate.io/samarth7/1532650",
  },
  {
    id: "priority-dm",
    icon: <MessageCircle className="text-red-500 w-8 h-8" />,
    title: "Priority DM",
    description:
      "Need Immediate Cybersecurity Support? Unlock Instant Help with Priority Access 🔐 Get direct, fast-track support from me — no waiting, no fluff.",
    link: "https://topmate.io/samarth7/1532855",
  },
  {
    id: "digital-products",
    icon: <PackageOpen className="text-indigo-600 w-8 h-8" />,
    title: "Digital Products",
    description:
      "Exclusive products with curated checklists, micro-courses, and real-world vulnerability walkthroughs to enhance your skills in web security.",
    link: "https://topmate.io/samarth7/1532845",
  },
];

export default function Services() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = (service) => setModalData(service);
  const closeModal = () => setModalData(null);

  return (
    <div className="bg-gray-50 text-gray-900 font-mono min-h-screen">
      <Header toggleMenu={toggleMenu} />
      {menuOpen && <MobileMenu />}

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-600 mb-6 mt-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🚀 My Services
        </motion.h2>
        <p className="text-lg text-gray-600 mb-12">
          Here’s what I can do to strengthen and secure your digital presence—whether you're an organization or an individual.
        </p>

        {/* Business Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-semibold text-left text-gray-800 mb-4">👨‍💼 For Companies & Organizations</h3>
          <p className="text-left text-gray-600 mb-8">
            Professional-grade services for businesses aiming to audit and secure their digital assets.
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {businessServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center cursor-pointer"
                onClick={() => openModal(service)}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description.length > 90 ? service.description.slice(0, 90) + "..." : service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Personal Section */}
        <section className="mb-24">
          <h3 className="text-2xl font-semibold text-left text-gray-800 mb-4">👤 For Individuals & Small Teams</h3>
          <p className="text-left text-gray-600 mb-8">
            Resources and mentoring designed for learners, hackers, and teams who want direct access and insights.
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {personalServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 text-center cursor-pointer"
                onClick={() => window.location.href = service.link}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description.length > 80 ? service.description.slice(0, 80) + "..." : service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {modalData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
              <div className="mb-4 flex justify-center">{modalData.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2 text-center">{modalData.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed text-center">{modalData.description}</p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        <section id="contact-form" className="mb-24">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">📞 Contact Me</h3>
          <form
            action="https://formspree.io/f/xrbqldge"
            method="POST"
            className="space-y-6 text-left max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md"
          >
            <div className="relative">
              <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-1">
                <User className="w-4 h-4 text-blue-500" />
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-1">
                <Mail className="w-4 h-4 text-green-500" />
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <label className="flex items-center gap-2 text-gray-700 text-sm font-semibold mb-1">
                <MessageSquare className="w-4 h-4 text-purple-500" />
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="h-captcha" data-sitekey="1f746f64-d4f0-4ef2-9e62-670c9eeeb850"></div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              ✉️ Send Message
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </div>
  );
}
