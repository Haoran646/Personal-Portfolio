(() => {
  'use strict';
  const data = window.PORTFOLIO;
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const link = (label, url) => {
    const a = el('a', '', label); a.href = url;
    if (/^https?:/.test(url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    return a;
  };
  document.querySelector('#intro').textContent = data.intro;
  document.querySelector('#hero-title').textContent = data.tagline + '.';
  document.querySelector('#year').textContent = new Date().getFullYear();
  data.projects.forEach((project, i) => {
    const media = (window.PORTFOLIO_MEDIA || {})[project.id] || {};
    const article = el('article', 'project'); article.id = project.id;
    article.setAttribute('aria-labelledby', project.id + '-title');
    const body = el('div', 'project-body');
    body.append(el('div', 'project-meta', String(i+1).padStart(2,'0') + ' / ' + project.category));
    const title = el('h3', '', project.title); title.id = project.id + '-title'; body.append(title);
    body.append(el('p', 'project-context', project.organization + ' · ' + project.date));
    body.append(el('p', 'project-summary', project.summary), el('p', 'project-role', project.role));
    const tags = el('div', 'tags'); project.tags.forEach(t => tags.append(el('span', '', t))); body.append(tags);
    const details = el('details'); details.append(el('summary', '', 'Technical details'));
    const list = el('ul'); project.details.forEach(t => list.append(el('li', '', t)));
    details.append(list, el('p', '', project.result)); body.append(details);
    if (project.links && project.links.length) {
      const links = el('div', 'project-links'); project.links.forEach(l => links.append(link(l.label, l.url))); body.append(links);
    }
    const v = media.video || project.video;
    if (v && v.type && v.src) {
      const figure = el('figure', 'video-media');
      if (v.type === 'youtube' && /^[a-zA-Z0-9_-]{11}$/.test(v.src)) {
        const frame = el('iframe'); frame.src = 'https://www.youtube-nocookie.com/embed/' + v.src + '?mute=1';
        frame.title = project.title + ' demonstration'; frame.loading = 'lazy';
        frame.allow = 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';
        frame.allowFullscreen = true; frame.referrerPolicy = 'strict-origin-when-cross-origin'; figure.append(frame);
      } else if (v.type === 'mp4') {
        const video = el('video'); video.controls = true; video.preload = 'metadata'; video.playsInline = true;
        video.muted = true; video.defaultMuted = true;
        video.setAttribute('aria-label', project.title + ' demonstration');
        if (v.poster) video.poster = v.poster;
        const source = el('source'); source.src = v.src; source.type = 'video/mp4'; video.append(source);
        if (v.captions) {
          const track = el('track'); track.kind = 'captions'; track.src = v.captions; track.srclang = 'en'; track.label = 'English'; video.append(track);
        }
        video.append(link('Download the video', v.src)); figure.append(video);
      }
      if (figure.childElementCount) {
        if (v.caption) figure.append(el('figcaption', '', v.caption));
        if(v.type==='youtube') figure.append(link('Watch on YouTube ↗', 'https://www.youtube.com/watch?v='+v.src));
        body.append(figure);
      }
    }
    article.append(body);
    const f = media.figure || project.figure;
    if (f && f.src) {
      const figure = el('figure', 'project-figure');
      const img = el('img'); img.src = f.src; img.alt = f.alt || project.title; img.loading = 'lazy';
      const zoom = link('', f.src); zoom.setAttribute('aria-label', 'View full-size figure: ' + project.title); zoom.append(img);
      figure.append(zoom);
      if (f.caption) figure.append(el('figcaption', '', f.caption));
      article.append(figure);
    }
    document.querySelector('#project-list').append(article);
  });
  data.education.forEach(e => { const item = el('div', 'education-item'); item.append(el('h3', '', e.school), el('p', '', e.degree), el('p', 'date', e.date)); document.querySelector('#education').append(item); });
  data.skills.forEach(s => { const item = el('div', 'skill-item'); item.append(el('h3', '', s.title), el('p', '', s.items)); document.querySelector('#skills').append(item); });
  const contacts = document.querySelector('#contact-links');
  if (data.email) contacts.append(link(data.email, 'mailto:' + data.email));
  if (data.linkedin) contacts.append(link('LinkedIn ↗', data.linkedin));
  if (data.github) contacts.append(link('GitHub ↗', data.github));
  if (data.resume) contacts.append(link('Résumé PDF ↗', data.resume));
})();
