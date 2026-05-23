const qs = (selector, scope = document) => scope.querySelector(selector);

const createLink = ({ label, href, external, primary, placeholder }) => {
  const elementTag = placeholder || !href ? 'span' : 'a';
  const element = document.createElement(elementTag);

  element.textContent = label;
  element.className = `btn${primary ? ' primary' : ''}${placeholder || !href ? ' placeholder' : ''}`;

  if (elementTag === 'a') {
    element.href = href;

    if (external) {
      element.target = '_blank';
      element.rel = 'noreferrer';
    }
  }

  return element;
};

const appendTags = (parent, tags = []) => {
  if (!tags.length) return;

  const container = document.createElement('div');
  container.className = 'tags';

  tags.forEach(tag => {
    const chip = document.createElement('span');
    chip.className = 'tag';
    chip.textContent = tag;
    container.appendChild(chip);
  });

  parent.appendChild(container);
};

const fillNav = () => {
  const navList = qs('.nav-links');

  portfolioData.navItems.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    navList.appendChild(link);
  });
};

const fillHero = () => {
  qs('.hero-eyebrow').textContent = portfolioData.hero.eyebrow;
  qs('.hero-heading').textContent = portfolioData.hero.heading;
  qs('.hero-description').textContent = portfolioData.hero.description;

  const highlightContainer = qs('.hero-highlights');
  portfolioData.hero.highlights.forEach(item => {
    const highlight = document.createElement('article');
    highlight.className = 'highlight';

    const value = document.createElement('strong');
    value.textContent = item.value;

    const label = document.createElement('span');
    label.textContent = item.label;

    highlight.append(value, label);
    highlightContainer.append(highlight);
  });

  const actionContainer = qs('.hero-actions');
  portfolioData.hero.actions.forEach(item => actionContainer.append(createLink(item)));
};

const fillProfile = () => {
  const profileList = qs('.profile-list');

  portfolioData.profile.forEach(item => {
    const entry = document.createElement('div');

    const label = document.createElement('strong');
    label.textContent = `${item.label}:`;

    const value = document.createElement('span');
    value.textContent = item.value;

    entry.append(label, value);
    profileList.appendChild(entry);
  });
};

const renderSectionCards = (containerSelector, cards) => {
  const container = qs(containerSelector);

  cards.forEach(card => {
    const element = document.createElement('article');
    element.className = 'card reveal';

    const heading = document.createElement('h3');
    heading.textContent = card.title;

    const description = document.createElement('p');
    description.textContent = card.description;

    element.append(heading, description);
    container.appendChild(element);
  });
};

const fillImpact = () => {
  const statsGrid = qs('#impact .stats-grid');

  portfolioData.impactStats.forEach(stat => {
    const card = document.createElement('article');
    card.className = 'card stat-card reveal';

    const value = document.createElement('p');
    value.className = 'stat-value';
    value.textContent = stat.value;

    const label = document.createElement('p');
    label.className = 'stat-label';
    label.textContent = stat.label;

    card.append(value, label);
    statsGrid.appendChild(card);
  });
};

const fillAbout = () => {
  qs('#about .section-subtitle').textContent = portfolioData.about.subtitle;
  renderSectionCards('#about .grid', portfolioData.about.cards);
};

const fillResearch = () => {
  qs('#research .section-subtitle').textContent = portfolioData.research.subtitle;

  const researchGrid = qs('#research .project-grid');
  portfolioData.research.projects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'card project-card reveal';

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    card.append(heading, description);
    appendTags(card, project.tags);

    if (project.links?.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';

      project.links.forEach(linkData => {
        linksContainer.appendChild(createLink(linkData));
      });

      card.appendChild(linksContainer);
    }

    researchGrid.appendChild(card);
  });
};

const fillFeaturedProjects = () => {
  qs('#projects .section-subtitle').textContent =
    'Selected projects from research and industry with measurable outcomes.';

  const projectGrid = qs('#projects .project-grid');
  const sortedProjects = [...portfolioData.featuredProjects].sort((a, b) => (b.sortKey || 0) - (a.sortKey || 0));

  sortedProjects.forEach(project => {
    const card = document.createElement('article');
    card.className = 'card project-card reveal';

    const meta = document.createElement('div');
    meta.className = 'project-meta';

    const time = document.createElement('span');
    time.className = 'project-time';
    time.textContent = project.time;
    meta.appendChild(time);

    if (project.location?.label) {
      const location = document.createElement('span');
      location.className = 'project-location';
      location.textContent = project.location.label;
      meta.appendChild(location);
    }

    const heading = document.createElement('h3');
    heading.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    card.append(meta, heading, description);

    if (project.metric) {
      const metric = document.createElement('p');
      metric.className = 'metric';
      metric.textContent = project.metric;
      card.appendChild(metric);
    }

    appendTags(card, project.tags);

    if (project.links?.length) {
      const linksContainer = document.createElement('div');
      linksContainer.className = 'project-links';

      project.links.forEach(linkData => {
        linksContainer.appendChild(createLink(linkData));
      });

      card.appendChild(linksContainer);
    }

    projectGrid.appendChild(card);
  });
};

const fillExperience = () => {
  const timeline = qs('.timeline');

  portfolioData.experience.forEach(item => {
    const row = document.createElement('article');
    row.className = 'timeline-item reveal';

    const period = document.createElement('p');
    period.className = 'time';
    period.textContent = item.period;

    const body = document.createElement('div');

    const title = document.createElement('h3');
    title.textContent = item.title;

    const description = document.createElement('p');
    description.textContent = item.description;

    body.append(title, description);
    row.append(period, body);

    timeline.appendChild(row);
  });
};

const fillManuscripts = () => {
  qs('#manuscripts .section-subtitle').textContent = portfolioData.manuscripts.subtitle;
  const manuscriptGrid = qs('#manuscripts .manuscript-grid');

  portfolioData.manuscripts.items.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card manuscript-card reveal';

    const status = document.createElement('p');
    status.className = 'manuscript-status';
    status.textContent = item.status;

    const heading = document.createElement('h3');
    heading.textContent = item.title;

    const detail = document.createElement('p');
    detail.textContent = item.detail;

    card.append(status, heading, detail);
    manuscriptGrid.appendChild(card);
  });
};

const fillCv = () => {
  qs('#cv .section-subtitle').textContent = portfolioData.cv.subtitle;

  const summary = qs('.cv-summary');
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

  const actionContainer = qs('.cv-actions');
  portfolioData.cv.actions.forEach(item => actionContainer.appendChild(createLink(item)));
};

const fillEducation = () => {
  const educationList = qs('.education-list');

  portfolioData.education.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card reveal';

    const heading = document.createElement('h3');
    heading.textContent = item.degree;

    const school = document.createElement('p');
    const schoolName = document.createElement('strong');
    schoolName.textContent = item.school;
    const schoolPeriod = document.createTextNode(` - ${item.period}`);
    school.append(schoolName, schoolPeriod);

    const details = document.createElement('p');
    details.textContent = item.details;

    card.append(heading, school, details);
    educationList.appendChild(card);
  });
};

const fillSkills = () => {
  const skillsGrid = qs('#skills .skills');

  portfolioData.skills.forEach(skill => {
    const card = document.createElement('article');
    card.className = 'card reveal';

    const heading = document.createElement('h3');
    heading.textContent = skill.title;

    const description = document.createElement('p');
    description.textContent = skill.description;

    card.append(heading, description);
    skillsGrid.appendChild(card);
  });
};

const fillCredentials = () => {
  qs('#credentials .section-subtitle').textContent = portfolioData.credentials.subtitle;
  renderSectionCards('#credentials .grid', portfolioData.credentials.cards);
};

const fillContact = () => {
  qs('#contact .section-subtitle').textContent = portfolioData.contact.subtitle;

  const actionContainer = qs('#contact .actions');
  portfolioData.contact.actions.forEach(item => actionContainer.appendChild(createLink(item)));

  qs('footer .container').textContent = portfolioData.contact.footerText;
};

const initRevealAnimation = () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  items.forEach(item => observer.observe(item));
};

const createSections = () => {
  fillNav();
  fillHero();
  fillProfile();
  fillImpact();
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
  initRevealAnimation();
};

window.addEventListener('DOMContentLoaded', () => {
  document.title = portfolioData.siteTitle;
  createSections();
});
