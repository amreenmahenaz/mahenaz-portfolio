"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-semibold">Mahenaz Amreen</h1>
          <div className="flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#tech" className="hover:text-white">Tech Stack</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-bold mb-4 mt-10">Mahenaz Amreen</h1>
        <p className="text-xl text-gray-400 mb-6">
          Backend & DevOps Engineer | Scalable Systems | Cloud | CI/CD | Testing Automation
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/amreenmahenaz" target="_blank" rel="noreferrer">
            <Button variant="outline">GitHub</Button>
          </a>
          <a href="https://linkedin.com/in/mahenaz" target="_blank" rel="noreferrer">
            <Button variant="outline">LinkedIn</Button>
          </a>
          <a href="mailto:amreenmahenaz@gmail.com">
            <Button>Contact</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <p className="text-gray-300 leading-relaxed">
          I'm a Software Engineer who enjoys solving complex backend challenges and improving system reliability through automation and clean architecture.
          I've developed production-grade systems in Python, Flask, Django, and Node.js, integrating Kafka, Redis, and AWS to deliver scalable APIs and fault-tolerant data pipelines.
          My focus is building systems that not only work — but work consistently, with solid testing, monitoring, and CI/CD practices. I take pride in writing clean, testable code, mentoring teammates, and improving engineering efficiency through process automation.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <Card><CardContent><div className="p-4">Python, Java, C++, JavaScript</div></CardContent></Card>
          <Card><CardContent><div className="p-4">Flask, Django, Node.js, Spring Boot</div></CardContent></Card>
          <Card><CardContent><div className="p-4">PyTest, Postman, Jenkins, GitHub Actions</div></CardContent></Card>
          <Card><CardContent><div className="p-4">AWS (EC2, Lambda, RDS, S3), Docker, Kubernetes</div></CardContent></Card>
          <Card><CardContent><div className="p-4">Kafka, RabbitMQ, Elasticsearch, CloudWatch</div></CardContent></Card>
          <Card><CardContent><div className="p-4">MySQL, PostgreSQL, MongoDB, DynamoDB, Redis</div></CardContent></Card>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Experience</h2>

        <div className="space-y-10">
          {/* Procyon */}
          <Card>
            <CardContent>
              <div className="p-6 flex items-start gap-6">
                <img
                  src="/companies/procyon.png"
                  alt="Procyon Technostructure"
                  className="w-20 h-20 object-contain rounded-md bg-white p-2"
                />
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer — Procyon Technostructure LLC</h3>
                  <p className="text-sm text-gray-400 mb-2">Remote, USA | Jun 2025 – Present</p>
                  <ul className="list-disc ml-5 text-gray-300">
                    <li>Secured financial APIs with JWT authentication achieving 99.99% uptime and SOC2 compliance.</li>
                    <li>Reduced response times by 30% via Redis caching on analytics endpoints.</li>
                    <li>Migrated backend to Flask microservice on AWS Lambda reducing ops overhead by 30%.</li>
                    <li>Automated integration tests with PyTest and Postman ensuring endpoint reliability.</li>
                    <li>Enhanced team velocity by 20% through structured sprint planning in Jira.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Morgan Stanley */}
          <Card>
            <CardContent>
              <div className="p-6 flex items-start gap-6">
                <img
                  src="/companies/morganstanley.png"
                  alt="Morgan Stanley"
                  className="w-20 h-20 object-contain rounded-md bg-white p-2"
                />
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer — Morgan Stanley</h3>
                  <p className="text-sm text-gray-400 mb-2">Atlanta, USA | Jul 2024 – Jun 2025</p>
                  <ul className="list-disc ml-5 text-gray-300">
                    <li>Built a Python web crawler improving data feed efficiency to the LLM pipeline by 60%.</li>
                    <li>Developed Django + PySpark embedding service reducing manual data processing by 50%.</li>
                    <li>Automated pipeline deployments with Python scripts and regression tests.</li>
                    <li>Integrated RAG systems using Elasticsearch + OpenAI APIs for scalable data retrieval.</li>
                    <li>Engineered NoSQL data architectures (MongoDB) for real-time analytics dashboards.</li>
                    <li>Improved system resilience by streamlining Kafka event-based payment workflows.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Accenture */}
          <Card>
            <CardContent>
              <div className="p-6 flex items-start gap-6">
                <img
                  src="/companies/accenture.png"
                  alt="Accenture"
                  className="w-20 h-20 object-contain rounded-md bg-white p-2"
                />
                <div>
                  <h3 className="text-xl font-semibold">Application Software Engineer — Accenture</h3>
                  <p className="text-sm text-gray-400 mb-2">Hyderabad, India | Feb 2021 – Aug 2022</p>
                  <ul className="list-disc ml-5 text-gray-300">
                    <li>Built and deployed 110+ REST APIs using FastAPI and Flask with full test coverage.</li>
                    <li>Established 20+ Jenkins pipelines with automated test and deployment stages.</li>
                    <li>Migrated 20+ microservices to AWS reducing infrastructure cost by 70%.</li>
                    <li>Implemented Kafka replay mechanisms for production debugging and log analysis.</li>
                    <li>Conducted 50+ code reviews cutting critical bugs by 15% and improving code standards.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">uApply — Skill-Based Job Recommendation System</h3>
                <p className="text-gray-300 mb-3">
                  Flask + ReactJS app leveraging LLMs and NLP to match students' skills with 150+ jobs.
                </p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Designed end-to-end data flow using embeddings and FAISS indexing.</li>
                  <li>Built test-driven APIs validated through automated GitHub Actions CI/CD.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Health Club Portal</h3>
                <p className="text-gray-300 mb-3">
                  Full-stack app (Angular + Flask) for managing memberships and activities.
                </p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Integrated Google Authentication and AWS EC2 auto-scaling.</li>
                  <li>Added Postman API test collections into Jenkins build pipelines.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Indeed.com Simulation</h3>
                <p className="text-gray-300 mb-3">
                  Three-tier distributed app replicating core Indeed functionalities.
                </p>
                <ul className="list-disc ml-5 text-gray-300">
                  <li>Implemented Kafka messaging and Redis caching for high availability.</li>
                  <li>Used Passport-JWT for secure user authentication.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education & Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <img
            src="/companies/san jose state University.png"
            alt="San Jose State University"
            className="w-20 h-20 object-contain rounded-md bg-white p-2"
          />
          <p className="text-gray-300">
            M.S. in Computer Engineering — San Jose State University (2024)
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
          <img
            src="/companies/cbit.jpeg"
            alt="CBIT"
            className="w-20 h-20 object-contain rounded-md bg-white p-2"
          />
          <p className="text-gray-300">
            B.E. in Electronics & Communication — CBIT Hyderabad (2020)
          </p>
        </div>

        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300 mb-4">Email: amreenmahenaz@gmail.com</p>
        <p className="text-gray-300 mb-2">GitHub: github.com/amreenmahenaz</p>
        <p className="text-gray-300 mb-8">LinkedIn: linkedin.com/in/mahenaz</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 border-t border-gray-800">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Mahenaz Amreen | Built with Next.js & TailwindCSS
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="https://github.com/amreenmahenaz" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/mahenaz" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          <a href="mailto:amreenmahenaz@gmail.com" className="hover:text-white">Email</a>
        </div>
      </footer>
    </main>
  );
}