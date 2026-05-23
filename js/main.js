const createLink = ({ label, href, external, primary }) => {
  const link = document.createElement('a');
  link.textContent = label;
  link.href = href;
  link.className = `btn${primary ? ' primary' : ''}`;

  if (external) {
    link.target = '_blank';
    link.rel = 'noreferrer';
  }

  return link;
};

const fillNav = () => {
  const navList = document.querySelector('.nav-links');
  portfolioData.navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    navList.appendChild(link);
  });
};

const fillHero = () => {
  document.querySelector('.hero-eyebrow').textContent = portfolioData.hero.eyebrow;
  document.querySelector('.hero-heading').textContent = portfolioData.hero.heading;
  document.querySelector('.hero-description').textContent = portfolioData.hero.description;

  const highlightContainer = document.querySelector('.hero-highlights');
  portfolioData.hero.highlights.forEach(item => {
    const highlight = document.createElement('div');
    highlight.className = 'highlight';
    const value = document.createElement('strong');
    value.textContent = item.value;
    const label = document.createElement('span');
    label.textContent = item.label;
    highlight.append(value, label);
    highlightContainer.appendChild(highlight);
  });

  const actionContainer = document.querySelector('.hero-actions');
  portfolioData.hero.actions.forEach(item => {
    actionContainer.appendChild(createLink(item));
  });
};

const fillProfile = () => {
  const profileList = document.querySelector('.profile-list');
  portfolioData.profile.forEach(item => {
    const entry = document.createElement('div');
    entry.innerHTML = `<strong>${item.label}:</strong> ${item.value}`;
    profileList.appendChild(entry);
  });
};

const renderSectionCards = (containerSelector, cards) => {
  const container = document.querySelector(containerSelector);
  cards.forEach(card => {
    const element = document.createElement('div');
    element.className = 'card';
    element.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
    container.appendChild(element);
  });
};

const fillAbout = () => {
  document.querySelector('#about .section-subtitle').textContent = portfolioData.about.subtitle;
  renderSectionCards('#about .grid', portfolioData.about.cards);
};

const fillResearch = () => {
  document.querySelector('#research .section-subtitle').textContent = portfolioData.research.subtitle;

  const researchGrid = document.querySelector('#research .project-grid');
  portfolioData.research.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card project-card';
    card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;

    const tagContainer = document.createElement('div');
    tagContainer.className = 'tags';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagContainer.appendChild(span);
    });

    card.appendChild(tagContainer);
    researchGrid.appendChild(card);
  });
};

const fillFeaturedProjects = () => {
  document.querySelector('#projects .section-subtitle').textContent = portfolioData.featuredProjects.length
    ? 'Selected projects from research, GitHub, and industry experience.'
    : '';

  const projectGrid = document.querySelector('#projects .project-grid');
  const sortedProjects = [...portfolioData.featuredProjects].sort((a, b) => (b.year || 0) - (a.year || 0));

  sortedProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'card project-card';
    card.innerHTML = `<div class="project-meta"><span class="project-time">${project.time}</span></div><h3>${project.title}</h3><p>${project.description}</p>`;

    if (project.metric) {
      const metric = document.createElement('div');
      metric.className = 'metric';
      metric.textContent = project.metric;
      card.appendChild(metric);
    }

    const tagContainer = document.createElement('div');
    tagContainer.className = 'tags';
    project.tags.forEach(tag => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = tag;
      tagContainer.appendChild(span);
    });
    card.appendChild(tagContainer);

    if (project.location) {
      const locationElement = project.location.href && project.location.href !== '#'
        ? document.createElement('a')
        : document.createElement('span');
      locationElement.textContent = project.location.label;
      locationElement.className = 'project-location';
      if (locationElement.tagName === 'A') {
        locationElement.href = project.location.href;
        if (project.location.external) {
          locationElement.target = '_blank';
          locationElement.rel = 'noreferrer';
        }
      }
      card.querySelector('.project-meta').appendChild(locationElement);
    }

    const validLinks = project.links ? project.links.filter(link => link.href && link.href !== '#') : [];
    if (validLinks.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';
      validLinks.forEach(linkData => {
        linksContainer.appendChild(createLink(linkData));
      });
      card.appendChild(linksContainer);
    }

    projectGrid.appendChild(card);
  });
};

const fillExperience = () => {
  const timeline = document.querySelector('.timeline');
  portfolioData.experience.forEach(item => {
    const row = document.createElement('div');
    row.className = 'timeline-item';
    row.innerHTML = `<div class="time">${item.period}</div><div><h3>${item.title}</h3><p>${item.description}</p></div>`;
    timeline.appendChild(row);
  });
};

const fillManuscripts = () => {
  document.querySelector('#manuscripts .section-subtitle').textContent = portfolioData.manuscripts.subtitle;
  const manuscriptGrid = document.querySelector('#manuscripts .manuscript-grid');

  portfolioData.manuscripts.items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card manuscript-card';
    card.innerHTML = `<p class="manuscript-status">${item.status}</p><h3>${item.title}</h3><p>${item.detail}</p>`;
    manuscriptGrid.appendChild(card);
  });
};

const fillCv = () => {
  document.querySelector('#cv .section-subtitle').textContent = portfolioData.cv.subtitle;

  const summary = document.querySelector('.cv-summary');
  portfolioData.cv.summary.forEach(item => {
    const row = document.createElement('div');
    row.className = 'cv-row';
    const label = document.createElement('strong');
    label.textContent = item.label;
    const value = document.createElement('span');
    value.textContent = item.value;
    row.append(label, value);
    summary.appendChild(row);
  });

  const actionContainer = document.querySelector('.cv-actions');
  portfolioData.cv.actions.forEach(item => {
    actionContainer.appendChild(createLink(item));
  });
};

const fillEducation = () => {
  const educationList = document.querySelector('.education-list');
  portfolioData.education.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${item.degree}</h3><p><strong>${item.school}</strong> &#8212; ${item.period}</p><p>${item.details}</p>`;
    educationList.appendChild(card);
  });
};

const fillSkills = () => {
  const skillsGrid = document.querySelector('#skills .skills');
  portfolioData.skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${skill.title}</h3><p>${skill.description}</p>`;
    skillsGrid.appendChild(card);
  });
};

const fillCredentials = () => {
  document.querySelector('#credentials .section-subtitle').textContent = portfolioData.credentials.subtitle;
  renderSectionCards('#credentials .grid', portfolioData.credentials.cards);
};

const fillContact = () => {
  document.querySelector('#contact .section-subtitle').textContent = portfolioData.contact.subtitle;
  const actionContainer = document.querySelector('#contact .actions');
  portfolioData.contact.actions.forEach(item => {
    actionContainer.appendChild(createLink(item));
  });
  document.querySelector('footer .container').textContent = portfolioData.contact.footerText;
};

const createSections = () => {
  fillNav();
  fillHero();
  fillProfile();
  fillAbout();
  fillResearch();
  fillFeaturedProjects();
  fillExperience();
  fillManuscripts();
  fillCv();
  fillEducation();
  fillSkills();
  fillCredentials();
  fillContact();
};

window.addEventListener('DOMContentLoaded', () => {
  document.title = portfolioData.siteTitle;
  createSections();
});
