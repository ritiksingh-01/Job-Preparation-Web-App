// ============================================================
// TEMP TEST FILE — delete after testing
// Run with: node src/temp/test-ai.js
// ============================================================

require("dotenv").config();
const { generateInterviewReport } = require("./ai.service");

// ── Mock Data ──────────────────────────────────────────────

const resume = `
Name: Rahul Sharma
Email: rahul.sharma@email.com
Phone: +91-9876543210
LinkedIn: linkedin.com/in/rahulsharma-dev

SUMMARY
-------
Full-stack developer with 2 years of experience building web applications using
React.js and Node.js. Passionate about writing clean code and solving real-world
problems.

SKILLS
------
- Languages    : JavaScript (ES6+), TypeScript, HTML5, CSS3
- Frontend     : React.js, Redux, Tailwind CSS
- Backend      : Node.js, Express.js, REST APIs
- Databases    : MongoDB, MySQL
- Tools        : Git, GitHub, Postman, VS Code
- Cloud        : Basic AWS (S3, EC2), Firebase

EXPERIENCE
----------
Junior Software Developer — TechSoft Pvt. Ltd. (Jan 2023 – Present)
  • Built and maintained 3 internal dashboards using React + Node.
  • Reduced API response time by 30% through query optimisation.
  • Collaborated with UI/UX team to implement responsive designs.
  • Integrated payment gateway (Razorpay) in an e-commerce module.

Intern — WebCraft Solutions (Jun 2022 – Dec 2022)
  • Developed REST APIs using Express.js and MongoDB.
  • Wrote unit tests using Jest, achieving 80% code coverage.

EDUCATION
---------
B.Tech in Computer Science — ABC University (2019 – 2023) | CGPA: 7.8/10

PROJECTS
--------
Job Prep App (Personal)
  • AI-powered interview preparation tool using Gemini API.
  • Stack: React, Node.js, Express, MongoDB.

Chat App
  • Real-time chat using Socket.io and React.
`;

const jobDescription = `
Position       : Full-Stack Developer (Node.js + React)
Company        : InnovateTech Solutions
Location       : Bangalore, India (Hybrid)
Experience     : 2–4 Years

RESPONSIBILITIES
----------------
• Design and develop scalable web applications using React.js and Node.js.
• Build and maintain RESTful APIs integrated with MongoDB / PostgreSQL.
• Collaborate with cross-functional teams (product, design, QA).
• Conduct code reviews and ensure best practices.
• Optimise application performance for speed and scalability.
• Work with CI/CD pipelines and cloud services (AWS / GCP).

REQUIREMENTS
------------
• Strong proficiency in React.js, Redux, and modern JavaScript (ES6+).
• Solid backend experience with Node.js, Express.js.
• Familiarity with SQL and NoSQL databases.
• Experience with Docker and containerisation (preferred).
• Knowledge of system design principles.
• Excellent communication and teamwork skills.

NICE TO HAVE
------------
• Experience with GraphQL.
• Familiarity with microservices architecture.
• Prior experience in a product-based company.
`;

const selfDescription = `
Hi, I am Rahul Sharma, a full-stack developer with around 2 years of hands-on
experience. I have worked on React and Node.js projects professionally and enjoy
building user-friendly products. I am comfortable working in teams and have good
communication skills. I am currently looking to transition into a product-based
company where I can work on larger-scale systems and improve my skills in system
design and cloud technologies. I am a quick learner and am actively studying
data structures and algorithms to crack product-based company interviews.
`;

// ── Run Test ───────────────────────────────────────────────

(async () => {
    console.log("🚀 Calling generateInterviewReport...\n");

    try {
        const result = await generateInterviewReport({
            resume,
            seldDescription: selfDescription,  // matches the param name in ai.service.js
            jobDescription,
        });

        console.log("\n✅ Done!");
    } catch (err) {
        console.error("❌ Error:", err.message || err);
    }
})();
