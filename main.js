const wrapperDivClass = 'github-projects-card-assigner-wrapper';

function init() {
  const allCards = document.querySelectorAll('.project-card');
  Array.from(allCards)
    .filter(card => Boolean(card.dataset.url))
    .forEach(processCard);
}

function processCard(card) {
  const id = getIssueId(card);
  const wrapper = addIconsWrapper(card);
  const assignMyselfIcon = addAssignMyselfIcon(wrapper);

  addAssignMyselfEvents(assignMyselfIcon, id);
}

function getIssueId(card) {
  const a = card.querySelector('h5 > a');
  const hrefFragments = a.href.split('/');
  return hrefFragments[hrefFragments.length - 1];
}

function addIconsWrapper(card) {
  const span = card.querySelector('span:nth-child(2)');
  span.classList.remove('position-absolute');

  const wrapper = document.createElement('div');
  const wrapperDiv = card.insertBefore(wrapper, span);

  wrapperDiv.appendChild(span);
  wrapperDiv.className = `${wrapperDivClass} position-absolute`;

  wrapperDiv.style = `
    display: flex;
    flex-direction: column;
    top: 10px;
    left: 10px;
  `;

  return wrapperDiv;
}

function addAssignMyselfIcon(wrapper) {
  const icon = document.createElement('span');
  icon.className = `${wrapperDivClass}__icon`;
  icon.style = 'cursor: pointer;';
  icon.innerHTML = '<svg aria-label="Open Issue" class="octicon octicon-issue-opened open" height="16" role="img" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>'; // eslint-disable-line max-len
  icon.setAttribute('data-assigned', 'no');

  return wrapper.insertBefore(icon, null);
}

function addAssignMyselfEvents(icon, id) {
  icon.addEventListener('click', () => toggleAssignment(icon, id));
}

function toggleAssignment(icon, id) {
  if (icon.dataset.assigned === 'no') {
    console.log('assign me to', id);
  } else {
    console.log('unassign me from', id);
  }
}

init();
