# AIForge — Service-Based Website Specification

## 1. Project Overview

AIForge is a modern service-based website for a fictional AI solutions agency.

The website presents AI and data-related services to businesses, startups, and individuals who want to use artificial intelligence to improve their products, workflows, and decision-making.

The primary goal of the website is to clearly communicate the company's services, build trust with visitors, showcase example projects, and encourage potential clients to submit a service inquiry.

---

## 2. Website Purpose

The website should:

* Introduce AIForge and its AI services.
* Explain the services in a clear and understandable way.
* Showcase example projects and solutions.
* Establish a professional and trustworthy brand image.
* Allow visitors to contact the company.
* Provide a simple and intuitive user experience.
* Work correctly on desktop, tablet, and mobile devices.

---

## 3. Target Users

The primary target users are:

* Small and medium-sized businesses.
* Startup founders.
* Students and researchers.
* Entrepreneurs.
* Organizations interested in AI automation.
* Businesses looking for custom AI solutions.
* Users interested in chatbots, RAG systems, data analysis, and machine learning.

The website should use language that is professional but easy to understand for users who may not have advanced technical knowledge.

---

## 4. Brand

### Brand Name

AIForge

### Tagline

"Build Smarter. Automate Faster."

### Brand Personality

The website should feel:

* Modern
* Professional
* Innovative
* Trustworthy
* Technology-focused
* User-friendly

---

## 5. Main Pages

The website must contain the following pages.

### Home

The homepage should include:

* Navigation bar.
* Hero section.
* Company introduction.
* Main services preview.
* Benefits section.
* Featured projects.
* Call-to-action section.
* Footer.

The hero section should clearly communicate what AIForge does and include a prominent call-to-action button.

---

### Services

The services page should display the company's available services.

Required services:

1. AI Chatbot Development
2. RAG Application Development
3. Data Analysis & Visualization
4. Machine Learning Solutions
5. AI Workflow Automation
6. Custom AI Assistant Development

Each service should include:

* Service name.
* Short description.
* Relevant icon or visual.
* Key benefits.
* Call-to-action.

---

### About

The About page should explain:

* Who AIForge is.
* The company's mission.
* The company's approach to AI solutions.
* Why customers should work with AIForge.
* A simple process/workflow.

The page should maintain the same visual identity as the rest of the website.

---

### Projects

The Projects page should showcase example projects.

Example projects:

* AI Customer Support Chatbot
* Document Question-Answering RAG System
* Business Data Analytics Dashboard
* Automated AI Content Workflow

Each project should include:

* Project title.
* Description.
* Technologies or solution type.
* Main outcome or benefit.

---

### Contact

The Contact page should allow users to submit a service inquiry.

The contact form should contain:

* Full name.
* Email address.
* Selected service.
* Message.
* Submit button.

The form should include basic client-side validation.

After a successful submission, the user should receive a clear success message.

---

## 6. Core Features

The website must include:

### Responsive Navigation

The navigation should work on:

* Desktop
* Tablet
* Mobile

On smaller screens, the navigation should transform into a mobile-friendly menu.

### Service Cards

Services should be presented using visually consistent cards.

### Call-to-Action Buttons

Important sections should include buttons such as:

* Get Started
* Explore Services
* View Projects
* Contact Us

Buttons should navigate to the appropriate pages or sections.

### Contact Form

The contact form must validate user input.

Required validation:

* Name cannot be empty.
* Email must have a valid format.
* Service must be selected.
* Message cannot be empty.

A success message should appear after valid submission.

### Interactive Elements

JavaScript may be used for:

* Mobile navigation.
* Form validation.
* Success messages.
* Smooth scrolling.
* Interactive service/project elements.
* Scroll animations where appropriate.

---

## 7. User Flow

The intended user journey is:

1. User opens the AIForge homepage.
2. User reads the hero section.
3. User explores the available services.
4. User visits the Services page for more information.
5. User views example projects.
6. User learns more about AIForge through the About page.
7. User decides to request a service.
8. User opens the Contact page.
9. User fills out the contact form.
10. The website validates the information.
11. The website displays a confirmation message.

The navigation should allow users to move between all major pages easily.

---

## 8. Design Requirements

The website must have a modern and professional design.

### General Design

Use:

* Clean layouts.
* Consistent spacing.
* Clear typography.
* Modern service cards.
* Professional buttons.
* Rounded UI elements where appropriate.
* Subtle animations.
* Good visual hierarchy.

### Color System

Use a technology-oriented visual theme with:

* Dark navy or deep blue as the primary color.
* Blue/cyan accents.
* White or light backgrounds for content sections.
* Dark text for readability.

Colors should remain consistent throughout the website.

### Typography

Use a modern sans-serif font.

Headings should be visually distinct from body text.

Text should remain easy to read on both desktop and mobile devices.

---

## 9. Responsive Design

The website must be responsive.

It should work correctly at:

* Desktop sizes.
* Tablet sizes.
* Mobile phone sizes.

Requirements include:

* No horizontal scrolling.
* Responsive navigation.
* Responsive service cards.
* Responsive project cards.
* Responsive forms.
* Proper image scaling.
* Readable text at smaller screen sizes.

---

## 10. Accessibility

The website should follow basic accessibility practices.

Requirements:

* Use semantic HTML.
* Provide meaningful labels for form inputs.
* Use appropriate heading hierarchy.
* Provide alt text for meaningful images.
* Ensure sufficient text/background contrast.
* Buttons and links should be clearly identifiable.
* Avoid relying only on color to communicate information.

---

## 11. Technical Requirements

The website should use:

* HTML5
* CSS3
* JavaScript

Use separate files for HTML, CSS, and JavaScript where practical.

Recommended structure:

```text
/
├── AGENT.md
├── README.md
├── index.html
├── services.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
```

---

## 12. Code Quality

The code should be:

* Clean.
* Organized.
* Readable.
* Reusable where practical.
* Properly indented.
* Free from unnecessary duplication.
* Easy to modify.

Use meaningful HTML classes and JavaScript function names.

Do not place large amounts of CSS or JavaScript directly inside HTML unless necessary.

---

## 13. AI Agent Instructions

When developing this website, the AI agent must follow this specification as the primary source of project requirements.

The agent should:

1. Follow all requirements in this AGENT.md file.
2. Maintain a consistent design across all pages.
3. Keep the website responsive.
4. Keep navigation consistent across pages.
5. Preserve existing functionality when modifying the project.
6. Avoid introducing unnecessary dependencies.
7. Use semantic HTML.
8. Keep CSS and JavaScript organized.
9. Validate forms properly.
10. Test important user flows after making changes.
11. Ensure links between pages work correctly.
12. Ensure the final website is suitable for deployment.
13. Do not remove required pages or features without a project requirement to do so.
14. Prioritize usability and accessibility.

---

## 14. Functional Requirements

Before the project is considered complete, verify that:

* [ ] Homepage loads correctly.
* [ ] Navigation works.
* [ ] Mobile navigation works.
* [ ] Services page works.
* [ ] About page works.
* [ ] Projects page works.
* [ ] Contact page works.
* [ ] Contact form validates required fields.
* [ ] Successful form submission displays a confirmation message.
* [ ] All major buttons work.
* [ ] No broken internal links exist.
* [ ] Website works on mobile screen sizes.
* [ ] Website contains no obvious console errors.
* [ ] Website is ready for deployment.
* [ ] AGENT.md is included in the repository.

---

## 15. Final Project Goal

The final result should be a polished, functional, responsive service-based website that clearly represents AIForge as an AI solutions agency.

The website should demonstrate the ability to transform structured project context into a complete web experience while maintaining consistency between the requirements defined in AGENT.md and the implemented website.
