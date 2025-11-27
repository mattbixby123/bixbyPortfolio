import React from 'react';
import PageLayout from '../components/PageLayout';

const RetroFreelance = ({ currentPath }) => {
  return (
    <PageLayout
      currentPath={currentPath}
      bannerText="Custom Development & Technical Consulting"
    >
      {/* Intro Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> ABOUT THIS SERVICE <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I recently moved to the Hudson Valley and have been getting settled into the area.
          While I'm enjoying being part of the local community here, I'm also expanding my
          freelance practice and taking on new web development projects. Or helping with
          existing sites/projects that need additions.
        </p>
      </div>

      {/* What I Do Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHAT I DO <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I build complete web solutions from the ground up. Not templates or drag-and-drop
          builders: I write the code, design the interface, test everything, and deploy it.
          I handle the full stack: frontend design, backend logic, database architecture,
          hosting infrastructure, domain management, SSL certificates, and ongoing maintenance.
        </p>

        <p style={{ marginTop: '1rem' }}>
          I'm not limited to standard websites either. If you now need a database back end,
          a credit card processing option, inventory tracking, I can help.
        </p>

        <p style={{ marginTop: '1rem' }}>
          Need a Product Information Management system? A Laboratory Information Management
          System? A custom CRM tailored to your workflow? If you can describe what you need,
          I can build it. The scope is defined by your vision, not by platform limitations.
        </p>
      </div>

      {/* Background Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> BACKGROUND <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I'm an AWS Certified full-stack developer currently working as a Backend Java Intern
          at Revature, where I build production applications handling real users and data.
          My stack includes React, Next.js, Spring Boot, and cloud infrastructure. I also
          specialize in Linux self-hosting solutions: deploying on VPS with Docker, nginx,
          and full SSL/TLS configuration.
        </p>

        <p style={{ marginTop: '1rem' }}>
          My portfolio focuses on projects built to demonstrate technical skills, not client work.
          If you don't see an example of exactly what you need, that doesn't mean I can't build it.
          I'm upfront about timelines, costs, and what's realistic for your budget. I'd rather
          tell you the truth about what makes sense than oversell you something you don't need.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> PRICING (50% OFF STANDARD RATES) <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <div className="pricing-grid">
          <div className="pricing-item">
            <div className="pricing-title">Basic Site</div>
            <div className="pricing-desc">5 pages, hosting, domain</div>
            <div className="pricing-cost">$500 <span className="pricing-normal">(normally $1,000)</span></div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Business Site</div>
            <div className="pricing-desc">10+ pages, forms, SEO, analytics</div>
            <div className="pricing-cost">$1,000 <span className="pricing-normal">(normally $2,000)</span></div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Custom Builds</div>
            <div className="pricing-desc">E-commerce, databases, integrations</div>
            <div className="pricing-cost">$2,000+ <span className="pricing-normal">(normally $4,000+)</span></div>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
          I'm offering this discount while building out my client base in the Hudson Valley. Limited availability.
        </p>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Note: Build fees shown above are one-time costs. Ongoing hosting and maintenance starts at $25-50/month
          depending on site complexity and traffic.
        </p>
      </div>

      {/* Why Hire Individual Developer */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHY HIRE AN INDIVIDUAL DEVELOPER <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <ul className="retro-list">
          <li>➤ You work directly with me. When something needs to change, you text or call me, not a support ticket system.</li>
          <li>➤ When you have a question about your site, I answer it.</li>
          <li>➤ You own everything: the source code, the domain registration, the content.</li>
          <li>➤ No platform subscriptions, no vendor lock-in.</li>
        </ul>

        <p style={{ marginTop: '1.5rem' }}>
          If you're a small business owner who needs a real web presence, or you've been
          frustrated by website builders that don't do what you need, let's talk. I do free
          consultations where I'll give you an honest assessment of what you actually need
          and what it'll cost.
        </p>
      </div>

      {/* CTA Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> LET'S TALK <span className="diamond">♦</span>
      </div>

      <div className="pixel-card" style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
          Email me to schedule a free consultation
        </p>

        <a href="mailto:matthew.bixby1@gmail.com" className="retro-button">
          matthew.bixby1@gmail.com
        </a>
      </div>
    </PageLayout>
  );
};

export default RetroFreelance;