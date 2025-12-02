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
          freelance practice and taking on new web development projects—from standard business
          sites to technical integrations, custom systems, and infrastructure work.
        </p>
      </div>

      {/* What I Do Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHAT I DO <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I build web solutions tailored to what your business actually needs. For standard
          e-commerce, I'll honestly tell you if Shopify or similar platforms are the right choice—and
          I can customize those platforms with React frontends or custom integrations when needed.
        </p>

        <p style={{ marginTop: '1rem' }}>
          For technical requirements that platforms can't handle, I build custom systems from scratch:
          backend APIs, database architecture, payment processing integrations, inventory management,
          automated workflows, and self-hosted infrastructure.
        </p>

        <p style={{ marginTop: '1rem' }}>
          <strong>Content-managed websites:</strong> For businesses that need to update
          content regularly (blogs, portfolios, news), I integrate headless CMS solutions
          (Sanity, Contentful) with custom React frontends—giving you a beautiful site
          you can update yourself without calling me for every change.
        </p>

        <p style={{ marginTop: '1rem' }}>
          <strong>Custom systems I build:</strong> Product Information Management (PIM),
          Laboratory Information Management Systems (LIMS), custom CRM workflows, data pipelines,
          REST APIs, microservices architecture, and VPS infrastructure with Docker/nginx. If you
          can describe what you need, I can assess whether it's better built custom or integrated
          with existing platforms.
        </p>

        <p style={{ marginTop: '1rem' }}>
          <strong>Working with existing infrastructure:</strong> I also help businesses that already
          have technical systems in place—debugging microservices, migrating databases, configuring
          DNS/SSL, optimizing API performance, fixing deployment issues, or adding new features to
          existing codebases (Java/Spring, Node.js, React). If you have infrastructure that needs
          maintenance, upgrades, or troubleshooting, I can work with what you have.
        </p>
      </div>

      {/* Background Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> BACKGROUND <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <p>
          I'm an AWS Certified full-stack developer currently working as a Backend Java Intern
          at Revature, where I build production Spring Boot applications handling real users and data.
          My technical stack includes React, Next.js, Spring Boot, PostgreSQL, and cloud infrastructure.
          I also specialize in Linux self-hosting: deploying on VPS with Docker, nginx, SSL/TLS, and
          zero-downtime deployment pipelines.
        </p>

        <p style={{ marginTop: '1rem' }}>
          My portfolio showcases technical projects, not client work. If you don't see an example of
          exactly what you need, that doesn't mean I can't build it. I'm upfront about timelines, costs,
          and what's realistic for your budget. I'd rather recommend the right solution—even if it's
          not custom development—than oversell you something you don't need.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="section-heading">
        <span className="diamond">♦</span> PRICING <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <div className="pricing-grid">
          <div className="pricing-item">
            <div className="pricing-title">Business Website</div>
            <div className="pricing-desc">5-10 pages, forms, SEO, hosting setup</div>
            <div className="pricing-cost">$800-1,500</div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Platform Customization</div>
            <div className="pricing-desc">Shopify/platform setup + custom features</div>
            <div className="pricing-cost">$1,500-3,000</div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Custom Systems</div>
            <div className="pricing-desc">APIs, databases, integrations, technical builds</div>
            <div className="pricing-cost">Starting at $5,000</div>
          </div>

          <div className="pricing-item">
            <div className="pricing-title">Technical Consulting</div>
            <div className="pricing-desc">Infrastructure work, debugging, optimization</div>
            <div className="pricing-cost">$100/hour</div>
          </div>
        </div>

        <p style={{ marginTop: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
          Pricing varies based on scope and complexity. Free consultation to assess your needs and provide accurate estimates.
        </p>

        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
          Note: Build fees are one-time costs. Optional ongoing maintenance and hosting support available starting at
          $50/month depending on site complexity and requirements. Domain registration ($10-15/year, paid directly to
          registrar) and SSL certificates are handled during setup.
        </p>
      </div>

      {/* Why Work With Me */}
      <div className="section-heading">
        <span className="diamond">♦</span> WHY WORK WITH ME <span className="diamond">♦</span>
      </div>

      <div className="pixel-card">
        <ul className="retro-list">
          <li>➤ Direct communication—you work with me, not a project manager or support queue</li>
          <li>➤ Honest technical advice—I'll tell you when a platform solution makes more sense than custom code</li>
          <li>➤ Backend expertise—specializing in APIs, microservices, and infrastructure that most freelancers avoid</li>
          <li>➤ Can work with existing systems—I debug and enhance what you already have, not just build new</li>
          <li>➤ Production-grade code—built with the same standards I use for enterprise applications at Revature</li>
        </ul>

        <p style={{ marginTop: '1.5rem' }}>
          If you're a small business that needs technical capabilities beyond standard website builders,
          or you have existing systems that need custom integrations, maintenance, or troubleshooting,
          let's talk. I offer free consultations where I'll give you an honest assessment of what you
          actually need and what it'll cost.
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