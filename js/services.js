/* ============================================================
   SERVICES SECTION — Service Data, Filter, Search & Animations
   ============================================================ */

(function () {
  'use strict';

  /* ---- Service Data ---- */
  var servicesData = [
    // ── Website Development ──
    {
      category: 'Website Development',
      catId: 'web-dev',
      catIcon: 'fa-laptop-code',
      items: [
        { title: 'Business Website', icon: 'fa-building', desc: 'Professional multi-page business website with modern design, contact forms, Google Maps integration, and SEO foundation to establish your online presence.', benefits: ['Responsive Design', 'SEO Optimized', 'Contact Forms', 'Google Maps'], tech: ['HTML/CSS', 'JavaScript', 'React'], delivery: '5-7 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Portfolio Website', icon: 'fa-briefcase', desc: 'Stunning personal or agency portfolio to showcase your work, testimonials, and case studies with smooth animations and premium UI.', benefits: ['Project Showcase', 'Filter Gallery', 'Client Logos', 'Testimonials'], tech: ['React', 'GSAP', 'CSS Grid'], delivery: '4-6 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'E-commerce Website', icon: 'fa-cart-shopping', desc: 'Full-featured online store with product management, cart system, payment gateway, inventory tracking, and mobile-optimized shopping experience.', benefits: ['Payment Gateway', 'Cart System', 'Product Management', 'Order Tracking'], tech: ['Shopify', 'WooCommerce', 'Liquid'], delivery: '10-14 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Landing Page', icon: 'fa-bullseye', desc: 'High-converting single-page landing page designed for campaigns, product launches, or lead generation with A/B tested layouts.', benefits: ['Lead Capture', 'A/B Ready', 'Fast Load', 'Analytics Ready'], tech: ['HTML/CSS', 'JavaScript', 'Bootstrap'], delivery: '2-3 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Custom Website', icon: 'fa-code', desc: 'Tailor-made website built from scratch with your exact specifications, unique features, and custom functionality.', benefits: ['Custom Features', 'Unique Design', 'Scalable', 'API Integrations'], tech: ['React/Next', 'Node.js', 'MongoDB'], delivery: '7-14 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Blog Website', icon: 'fa-blog', desc: 'Content-focused blog platform with CMS integration, category management, SEO optimization, and social sharing features.', benefits: ['CMS Integration', 'SEO Optimized', 'Social Sharing', 'Comment System'], tech: ['WordPress', 'PHP', 'MySQL'], delivery: '4-6 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Company Website', icon: 'fa-sitemap', desc: 'Complete corporate website with team pages, services sections, case studies, investor relations, and multi-language support.', benefits: ['Multi-language', 'Team Profiles', 'Case Studies', 'News Section'], tech: ['Next.js', 'Tailwind', 'Sanity CMS'], delivery: '7-12 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Dashboard Development', icon: 'fa-gauge-high', desc: 'Interactive data dashboard with real-time charts, metrics visualization, user management, and exportable reports.', benefits: ['Real-time Charts', 'User Management', 'Data Export', 'Custom Filters'], tech: ['D3.js', 'React', 'Node.js'], delivery: '10-15 Days', cta: 'Get Quote', ctaLink: '#contact', featured: true },
        { title: 'Website Maintenance', icon: 'fa-wrench', desc: 'Ongoing website maintenance including updates, backups, security patches, performance monitoring, and content updates.', benefits: ['Regular Backups', 'Security Updates', 'Performance Checks', 'Content Updates'], tech: ['WP/React', 'cPanel', 'Git'], delivery: 'Monthly Retainer', cta: 'Learn More', ctaLink: '#contact' },
        { title: 'Website Speed Optimization', icon: 'fa-gauge-simple-high', desc: 'Comprehensive speed audit and optimization including image compression, code minification, caching, and CDN setup for lightning-fast load times.', benefits: ['Core Web Vitals', 'Image Optimization', 'Code Minification', 'CDN Setup'], tech: ['Lighthouse', 'PageSpeed', 'Cloudflare'], delivery: '3-5 Days', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── AI Development ──
    {
      category: 'AI Development',
      catId: 'ai-dev',
      catIcon: 'fa-brain',
      items: [
        { title: 'AI Chatbot Development', icon: 'fa-robot', desc: 'Intelligent chatbot powered by GPT-4 and LLMs for customer support, lead qualification, and automated conversations on your website.', benefits: ['24/7 Support', 'Lead Qualification', 'Custom Responses', 'Multi-language'], tech: ['OpenAI', 'LangChain', 'Python'], delivery: '7-10 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'AI Automation', icon: 'fa-gears', desc: 'Automate repetitive tasks with AI-powered workflows — data entry, report generation, email sorting, and process automation.', benefits: ['Task Automation', 'Error Reduction', 'Time Savings', 'Scalable'], tech: ['Python', 'Zapier', 'OpenAI API'], delivery: '5-8 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Workflow Automation', icon: 'fa-diagram-project', desc: 'Design and implement automated business workflows connecting your tools — CRM, email, calendar, and project management platforms.', benefits: ['Tool Integration', 'Trigger-based', 'Custom Logic', 'Analytics'], tech: ['n8n', 'Make', 'Python'], delivery: '5-10 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Prompt Engineering', icon: 'fa-keyboard', desc: 'Expert prompt design and optimization for LLMs to generate high-quality, consistent outputs for content, code, and analysis.', benefits: ['Optimized Prompts', 'Consistent Output', 'Cost Efficient', 'Custom Templates'], tech: ['GPT-4', 'Claude', 'LangChain'], delivery: '2-4 Days', cta: 'Learn More', ctaLink: '#contact' },
        { title: 'AI Integration', icon: 'fa-plug', desc: 'Seamlessly integrate AI capabilities into your existing platforms — from recommendation engines to intelligent search and personalization.', benefits: ['API Integration', 'Real-time AI', 'Scalable', 'Custom Models'], tech: ['REST APIs', 'Python', 'TensorFlow'], delivery: '5-10 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'AI Business Solutions', icon: 'fa-lightbulb', desc: 'Strategic AI consulting and implementation tailored to your business needs — from ideation to deployment and optimization.', benefits: ['Strategy', 'Custom Solutions', 'ROI Focused', 'Future-proof'], tech: ['LLMs', 'ML Models', 'Cloud AI'], delivery: 'Project Based', cta: 'Get Quote', ctaLink: '#contact', featured: true },
        { title: 'AI Consulting', icon: 'fa-handshake', desc: 'Expert guidance on AI strategy, tool selection, implementation roadmap, and team training to leverage AI for competitive advantage.', benefits: ['AI Strategy', 'Tool Selection', 'Roadmap', 'Team Training'], tech: ['Assessment', 'Strategy', 'Workshops'], delivery: 'Ongoing', cta: 'Learn More', ctaLink: '#contact' },
      ]
    },
    // ── Digital Marketing ──
    {
      category: 'Digital Marketing',
      catId: 'digital-marketing',
      catIcon: 'fa-chart-line',
      items: [
        { title: 'Search Engine Optimization (SEO)', icon: 'fa-search', desc: 'Comprehensive SEO strategy to improve rankings, drive organic traffic, and increase visibility across search engines.', benefits: ['Higher Rankings', 'Organic Traffic', 'Keyword Strategy', 'On-page SEO'], tech: ['Ahrefs', 'SEMrush', 'Google Search'], delivery: 'Ongoing', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Technical SEO', icon: 'fa-code', desc: 'Deep technical audit and optimization of site structure, schema markup, crawlability, indexation, and Core Web Vitals.', benefits: ['Crawl Optimization', 'Schema Markup', 'Core Web Vitals', 'Site Architecture'], tech: ['Screaming Frog', 'GSC', 'Lighthouse'], delivery: '5-7 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Local SEO', icon: 'fa-location-dot', desc: 'Dominate local search results with Google Business optimization, local citations, review management, and geo-targeted content.', benefits: ['Google Business', 'Local Citations', 'Review Mgmt', 'Maps Rankings'], tech: ['GBP', 'BrightLocal', 'Whitespark'], delivery: '7-14 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Content Marketing', icon: 'fa-newspaper', desc: 'Strategic content creation and distribution — blog posts, articles, infographics, and video content that drives engagement and conversions.', benefits: ['Content Strategy', 'Blog Writing', 'Infographics', 'Distribution'], tech: ['WordPress', 'Canva', 'Buffer'], delivery: 'Weekly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Social Media Marketing', icon: 'fa-share-nodes', desc: 'Full social media management across platforms including content calendar, post creation, audience engagement, and performance tracking.', benefits: ['Content Calendar', 'Post Creation', 'Engagement', 'Analytics'], tech: ['Meta Suite', 'Buffer', 'Canva'], delivery: 'Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Instagram Marketing', icon: 'fa-instagram', desc: 'Instagram growth strategy with Reels, Stories, carousel posts, influencer outreach, and engagement optimization for brand visibility.', benefits: ['Reels Strategy', 'Story Highlights', 'Hashtag Research', 'Growth Tactics'], tech: ['Meta Suite', 'Later', 'Canva'], delivery: 'Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Facebook Marketing', icon: 'fa-facebook', desc: 'Facebook page management, community building, ad campaigns, and engaging content strategies to grow your audience and conversions.', benefits: ['Page Growth', 'Community Mgmt', 'Ad Campaigns', 'Insights'], tech: ['Meta Ads', 'Business Suite', 'Canva'], delivery: 'Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'LinkedIn Marketing', icon: 'fa-linkedin', desc: 'LinkedIn profile optimization, content strategy, thought leadership building, and B2B lead generation campaigns.', benefits: ['Profile Optimization', 'B2B Leads', 'Thought Leadership', 'Content Strategy'], tech: ['LinkedIn Sales', 'Buffer', 'Canva'], delivery: 'Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'YouTube Marketing', icon: 'fa-youtube', desc: 'YouTube channel management including SEO-optimized videos, thumbnails, playlists, audience growth, and monetization strategy.', benefits: ['Channel Growth', 'Video SEO', 'Thumbnail Design', 'Monetization'], tech: ['YouTube Studio', 'TubeBuddy', 'Premiere Pro'], delivery: 'Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Email Marketing', icon: 'fa-envelope-open-text', desc: 'Strategic email campaigns including newsletters, drip sequences, promotional emails, and automated follow-ups with detailed analytics.', benefits: ['Newsletter Setup', 'Drip Campaigns', 'Automation', 'Analytics'], tech: ['Mailchimp', 'ConvertKit', 'Brevo'], delivery: 'Weekly', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── Paid Advertising ──
    {
      category: 'Paid Advertising',
      catId: 'paid-ads',
      catIcon: 'fa-ad',
      items: [
        { title: 'Google Ads', icon: 'fa-google', desc: 'High-performing Google Ads campaigns including Search, Display, Shopping, and Performance Max with conversion tracking and optimization.', benefits: ['Search Ads', 'Display Network', 'Shopping Ads', 'Conversion Tracking'], tech: ['Google Ads', 'GA4', 'Tag Manager'], delivery: '3-5 Days Setup', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Meta Ads', icon: 'fa-facebook', desc: 'Targeted Facebook and Instagram ad campaigns with creative strategy, audience segmentation, A/B testing, and ROAS optimization.', benefits: ['Audience Targeting', 'A/B Testing', 'Creative Strategy', 'ROAS Tracking'], tech: ['Meta Ads', 'Business Suite', 'Pixel'], delivery: '3-5 Days Setup', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Lead Generation', icon: 'fa-users', desc: 'Multi-channel lead generation campaigns combining paid ads, landing pages, forms, and nurturing sequences to fill your pipeline.', benefits: ['Lead Forms', 'Landing Pages', 'Nurture Sequences', 'Pipeline Growth'], tech: ['Google Ads', 'Meta', 'HubSpot'], delivery: 'Ongoing', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Performance Marketing', icon: 'fa-chart-simple', desc: 'Data-driven performance marketing focused on measurable results — CPA, ROAS, and revenue growth through continuous optimization.', benefits: ['Data-driven', 'CPA Optimization', 'ROAS Focused', 'Scalable'], tech: ['Google Ads', 'Meta', 'Analytics'], delivery: 'Ongoing', cta: 'Get Quote', ctaLink: '#contact', featured: true },
        { title: 'Conversion Optimization', icon: 'fa-arrows-rotate', desc: 'CRO strategy using heatmaps, A/B testing, user behavior analysis, and UX improvements to maximize conversion rates across your funnel.', benefits: ['A/B Testing', 'Heatmaps', 'UX Audit', 'Funnel Analysis'], tech: ['Hotjar', 'Optimizely', 'GA4'], delivery: 'Project Based', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── Branding & Design ──
    {
      category: 'Branding & Design',
      catId: 'branding',
      catIcon: 'fa-palette',
      items: [
        { title: 'Logo Design', icon: 'fa-pen-nib', desc: 'Professional logo design with multiple concepts, vector files, color variations, and brand guidelines document.', benefits: ['Multiple Concepts', 'Vector Files', 'Color Variations', 'Brand Guide'], tech: ['Illustrator', 'Figma', 'Photoshop'], delivery: '3-5 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Brand Identity', icon: 'fa-chess-queen', desc: 'Complete brand identity package including logo, color palette, typography, brand voice, business cards, and style guide.', benefits: ['Logo + Palette', 'Typography', 'Brand Voice', 'Style Guide'], tech: ['Figma', 'Illustrator', 'InDesign'], delivery: '7-10 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'UI/UX Design', icon: 'fa-pencil-ruler', desc: 'User-centered interface design with wireframes, prototypes, user flows, and pixel-perfect mockups for web and mobile apps.', benefits: ['Wireframes', 'Prototypes', 'User Flows', 'Design System'], tech: ['Figma', 'Adobe XD', 'Sketch'], delivery: '7-14 Days', cta: 'Get Quote', ctaLink: '#contact', featured: true },
        { title: 'Landing Page Design', icon: 'fa-layer-group', desc: 'Conversion-optimized landing page design with compelling visuals, clear CTAs, trust signals, and mobile-first layouts.', benefits: ['High Conversion', 'Mobile-first', 'Visual Hierarchy', 'Trust Signals'], tech: ['Figma', 'Photoshop', 'Webflow'], delivery: '2-4 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Social Media Creatives', icon: 'fa-image', desc: 'Eye-catching social media graphics, carousel posts, story templates, and ad creatives tailored to each platform\'s best practices.', benefits: ['Brand Consistent', 'Platform Optimized', 'Editable Templates', 'Bulk Creation'], tech: ['Canva', 'Photoshop', 'Premiere Pro'], delivery: 'Weekly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Banner Design', icon: 'fa-flag', desc: 'Professional banner ads, social media covers, website headers, and display ads designed to capture attention and drive clicks.', benefits: ['Multiple Sizes', 'Animated Options', 'Brand Aligned', 'High CTR'], tech: ['Photoshop', 'Illustrator', 'After Effects'], delivery: '1-2 Days', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── Content Services ──
    {
      category: 'Content Services',
      catId: 'content',
      catIcon: 'fa-pen-fancy',
      items: [
        { title: 'Content Writing', icon: 'fa-feather', desc: 'Engaging, original content writing for websites, blogs, articles, and marketing materials tailored to your brand voice and audience.', benefits: ['Original Content', 'SEO Optimized', 'Brand Voice', 'Research Based'], tech: ['SEO Tools', 'Grammarly', 'Surfer SEO'], delivery: '2-3 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'SEO Blog Writing', icon: 'fa-pen-to-square', desc: 'Search-engine-optimized blog posts with keyword research, internal linking, meta descriptions, and readability optimization.', benefits: ['Keyword Research', 'Meta Optimization', 'Internal Linking', 'Readability'], tech: ['Ahrefs', 'Surfer SEO', 'WordPress'], delivery: '2-4 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Copywriting', icon: 'fa-marker', desc: 'Persuasive copy for websites, landing pages, emails, ads, and sales pages that drives action and conversions.', benefits: ['Conversion Focused', 'A/B Ready', 'CTA Optimization', 'Tone Custom'], tech: ['Research', 'AIDA', 'Storytelling'], delivery: '2-4 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Product Descriptions', icon: 'fa-tag', desc: 'Compelling product descriptions that highlight features, benefits, and unique selling points to boost e-commerce conversions.', benefits: ['SEO Optimized', 'Feature Highlights', 'Benefit Driven', 'Bulk Ready'], tech: ['E-commerce CMS', 'Keywords', 'Bulk Tools'], delivery: '1-3 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Website Content', icon: 'fa-file-lines', desc: 'Complete website copywriting including home page, about, services, and contact pages with consistent messaging and SEO optimization.', benefits: ['Full Site Copy', 'Consistent Voice', 'SEO Optimized', 'Sitemap Ready'], tech: ['Research', 'Brand Guide', 'SEO Tools'], delivery: '5-7 Days', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── Analytics & Optimization ──
    {
      category: 'Analytics & Optimization',
      catId: 'analytics',
      catIcon: 'fa-chart-bar',
      items: [
        { title: 'Google Analytics Setup', icon: 'fa-chart-pie', desc: 'Complete GA4 installation, event tracking, goal setup, custom dashboards, and reporting configuration for data-driven decisions.', benefits: ['GA4 Installation', 'Event Tracking', 'Goal Setup', 'Custom Dashboards'], tech: ['GA4', 'GTM', 'Looker Studio'], delivery: '2-3 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Search Console Setup', icon: 'fa-magnifying-glass-chart', desc: 'Google Search Console configuration, sitemap submission, performance monitoring, and issue resolution for better search visibility.', benefits: ['Sitemap Submission', 'Performance Monitor', 'Issue Alerts', 'Query Analysis'], tech: ['GSC', 'GA4', 'Screaming Frog'], delivery: '1-2 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Website Audit', icon: 'fa-clipboard-list', desc: 'Comprehensive website audit covering technical SEO, performance, UX, security, accessibility, and content quality with actionable recommendations.', benefits: ['Technical Audit', 'Performance Check', 'Security Scan', 'Actionable Report'], tech: ['Lighthouse', 'Ahrefs', 'Screaming Frog'], delivery: '3-5 Days', cta: 'Get Quote', ctaLink: '#contact', popular: true },
        { title: 'Performance Reports', icon: 'fa-file-chart-column', desc: 'Custom performance reporting dashboards with key metrics, trends analysis, and actionable insights delivered weekly or monthly.', benefits: ['Custom Metrics', 'Trend Analysis', 'Actionable Insights', 'White Label'], tech: ['Looker Studio', 'GA4', 'Excel'], delivery: 'Weekly/Monthly', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Conversion Tracking', icon: 'fa-bullseye', desc: 'End-to-end conversion tracking setup across ads, website, and CRM with proper attribution modeling and funnel analysis.', benefits: ['Multi-channel', 'Attribution Models', 'Funnel Analysis', 'Revenue Tracking'], tech: ['GA4', 'GTM', 'CRM APIs'], delivery: '3-5 Days', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
    // ── Business Growth ──
    {
      category: 'Business Growth',
      catId: 'growth',
      catIcon: 'fa-rocket',
      items: [
        { title: 'Business Consulting', icon: 'fa-handshake', desc: 'Strategic business consulting covering digital transformation, market analysis, competitive research, and growth roadmap development.', benefits: ['Market Analysis', 'Competitive Intel', 'Growth Roadmap', 'Digital Strategy'], tech: ['Research', 'SWOT', 'Frameworks'], delivery: 'Project Based', cta: 'Learn More', ctaLink: '#contact', featured: true },
        { title: 'Digital Strategy', icon: 'fa-route', desc: 'Comprehensive digital strategy encompassing website, SEO, content, social media, paid ads, and AI integration for maximum online impact.', benefits: ['360° Strategy', 'Channel Planning', 'Budget Allocation', 'KPI Tracking'], tech: ['Analytics', 'Research', 'Planning Tools'], delivery: 'Project Based', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Startup Growth', icon: 'fa-seedling', desc: 'Growth hacking services for startups including MVP development, growth loops, viral strategies, and scalable acquisition channels.', benefits: ['MVP Strategy', 'Growth Loops', 'Viral Tactics', 'Scalable Systems'], tech: ['Lean Stack', 'Automation', 'Analytics'], delivery: 'Ongoing', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'Marketing Funnel', icon: 'fa-filter', desc: 'Design and optimize complete marketing funnels from awareness to conversion with lead magnets, email sequences, and retargeting.', benefits: ['Funnel Design', 'Lead Magnets', 'Email Sequences', 'Retargeting'], tech: ['HubSpot', 'Mailchimp', 'Meta/FB'], delivery: '7-14 Days', cta: 'Get Quote', ctaLink: '#contact' },
        { title: 'CRM Integration', icon: 'fa-database', desc: 'CRM setup, migration, and integration with your website, email, and marketing tools for unified customer data and automated workflows.', benefits: ['CRM Setup', 'Data Migration', 'Tool Integration', 'Automation Pipelines'], tech: ['HubSpot', 'Salesforce', 'Zoho'], delivery: '5-10 Days', cta: 'Get Quote', ctaLink: '#contact' },
      ]
    },
  ];

  /* ---- Flatten services for display ---- */
  var allServices = [];
  servicesData.forEach(function (cat) {
    cat.items.forEach(function (item) {
      item.category = cat.category;
      item.catId = cat.catId;
      item.catIcon = cat.catIcon;
      allServices.push(item);
    });
  });

  /* ---- Render Services ---- */
  var svcGrid = document.getElementById('svcGrid');
  var svcMoreWrap = document.getElementById('svcMoreWrap');
  var svcMoreBtn = document.getElementById('svcMoreBtn');
  var svcMoreText = document.getElementById('svcMoreText');
  var svcMoreIcon = document.getElementById('svcMoreIcon');
  var counterNum = document.getElementById('svcCounterNum');
  var currentFilter = 'all';
  var currentSearch = '';
  var showAll = false;

  function renderServices(filter, search) {
    var filtered = allServices.filter(function (s) {
      var matchFilter = filter === 'all' || s.catId === filter;
      var matchSearch = !search ||
        s.title.toLowerCase().indexOf(search) !== -1 ||
        s.category.toLowerCase().indexOf(search) !== -1 ||
        s.desc.toLowerCase().indexOf(search) !== -1 ||
        (s.benefits || []).some(function (b) { return b.toLowerCase().indexOf(search) !== -1; }) ||
        (s.tech || []).some(function (t) { return t.toLowerCase().indexOf(search) !== -1; });
      return matchFilter && matchSearch;
    });

    var totalCount = filtered.length;
    var displayCount = showAll ? totalCount : Math.min(totalCount, 5);
    var hasMore = totalCount > 5;

    // Update counter
    if (counterNum) {
      counterNum.textContent = displayCount + (hasMore && !showAll ? '+' : '');
    }

    if (filtered.length === 0) {
      svcGrid.innerHTML =
        '<div class="svc-no-results">' +
          '<i class="fas fa-search"></i>' +
          '<h4>No Services Found</h4>' +
          '<p>Try adjusting your search or filter to find what you\'re looking for.</p>' +
        '</div>';
      if (svcMoreWrap) svcMoreWrap.style.display = 'none';
      return;
    }

    var html = '';
    filtered.slice(0, displayCount).forEach(function (s, idx) {
      var benefitsHtml = (s.benefits || []).map(function (b) {
        return '<span class="svc-benefit"><i class="fas fa-check"></i> ' + b + '</span>';
      }).join('');

      var techHtml = (s.tech || []).map(function (t) {
        return '<span class="svc-tech-badge">' + t + '</span>';
      }).join('');

      var badgeHtml = '';
      if (s.featured) {
        badgeHtml = '<span class="svc-featured-tag"><i class="fas fa-star"></i> Featured</span>';
      } else if (s.popular) {
        badgeHtml = '<span class="svc-popular-tag"><i class="fas fa-fire"></i> Popular</span>';
      }

      html +=
        '<div class="svc-card glass" data-svc-reveal data-category="' + s.catId + '" data-index="' + idx + '">' +
          '<div class="svc-card-inner">' +
            badgeHtml +
            '<div class="svc-card-icon"><i class="fas ' + s.icon + '"></i></div>' +
            '<h4 class="svc-card-title">' + s.title + '</h4>' +
            '<p class="svc-card-desc">' + s.desc + '</p>' +
            '<div class="svc-benefits">' + benefitsHtml + '</div>' +
            '<div class="svc-tech">' + techHtml + '</div>' +
            '<div class="svc-card-meta">' +
              '<span class="svc-delivery"><i class="far fa-clock"></i> ' + s.delivery + '</span>' +
            '</div>' +
            '<div class="svc-card-footer">' +
              '<a href="' + s.ctaLink + '" class="svc-cta">' + s.cta + ' <i class="fas fa-arrow-right"></i></a>' +
            '</div>' +
          '</div>' +
        '</div>';
    });

    svcGrid.innerHTML = html;

    // Toggle button state
    if (svcMoreWrap) {
      if (hasMore) {
        svcMoreWrap.style.display = '';
        if (svcMoreBtn) {
          svcMoreBtn.classList.toggle('svc-more-active', showAll);
        }
        if (svcMoreText) {
          svcMoreText.textContent = showAll ? 'Show Less' : 'View All Services';
        }
        if (svcMoreIcon) {
          svcMoreIcon.className = 'fas ' + (showAll ? 'fa-chevron-up' : 'fa-chevron-down');
        }
      } else {
        svcMoreWrap.style.display = 'none';
      }
    }

    // Animate cards in with stagger (immediate, no ScrollTrigger)
    if (typeof gsap !== 'undefined') {
      svcGrid.style.opacity = '0';
      svcGrid.style.transform = 'translateY(20px)';
      gsap.to(svcGrid, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: function () {
          svcGrid.style.opacity = '';
          svcGrid.style.transform = '';
          gsap.utils.toArray('#svcGrid .svc-card').forEach(function (card, i) {
            gsap.fromTo(card,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4, delay: i * 0.04, ease: 'power2.out' }
            );
          });
        },
      });
    }
  }

  /* ---- Toggle Show All ---- */
  if (svcMoreBtn) {
    svcMoreBtn.addEventListener('click', function () {
      showAll = !showAll;
      renderServices(currentFilter, currentSearch.toLowerCase().trim());
    });
  }

  /* ---- Filter Buttons ---- */
  var filterBtns = document.querySelectorAll('.svc-filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      showAll = false;
      renderServices(currentFilter, currentSearch.toLowerCase().trim());
      // Smooth scroll to services grid on category click
      var target = document.getElementById('svcGrid');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Search ---- */
  var searchInput = document.getElementById('svcSearch');

  searchInput.addEventListener('input', function () {
    currentSearch = this.value;
    showAll = false;
    renderServices(currentFilter, currentSearch.toLowerCase().trim());
  });

  /* ---- Scroll Reveal for static elements ---- */
  var revealElements = document.querySelectorAll('[data-svc-reveal]');

  function observeReveals() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    revealElements.forEach(function (el) { observer.observe(el); });
  }

  /* ---- GSAP Section Animations ---- */
  function initGsapAnimations() {
    if (typeof gsap === 'undefined') return;

    // Initial render animation
    renderServices('all', '');

    // Section entrance
    gsap.from('.svc-section .section-header', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.svc-section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Top bar entrance
    gsap.from('.svc-top-bar', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.svc-section',
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
    });

    // Filter buttons entrance
    gsap.utils.toArray('.svc-filter-btn').forEach(function (btn, i) {
      gsap.from(btn, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        delay: 0.2 + i * 0.04,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.svc-filters',
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    });

    // CTA banner entrance
    gsap.from('.svc-cta-banner', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.svc-cta-banner',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  /* ---- Init ---- */
  function init() {
    observeReveals();
    initGsapAnimations();
  }

  // Handle both DOM ready and GSAP load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Re-run if GSAP loads later
  if (typeof gsap === 'undefined') {
    var checkGsap = setInterval(function () {
      if (typeof gsap !== 'undefined') {
        clearInterval(checkGsap);
        initGsapAnimations();
      }
    }, 200);
    setTimeout(function () { clearInterval(checkGsap); }, 5000);
  }
})();
