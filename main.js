function init() {
  console.log('asd');
  const allCards = document.querySelectorAll('.project-card');
  Array.from(allCards)
    .forEach(card => console.log(card))
    .forEach(processCard);
}

function processCard(card) {
  const id = getIssueId(card);
  const wrapper = addIconsWrapper(card);
  const assignMyselfIcon = addAssignMyselfIcon(wrapper);

  console.log('this is', id);

  // addAssignMyselfEvents(assignMyselfIcon);
}

function getIssueId(card) {
  const a = card.querySelector('span > h5 > a');
  const hrefFragments = a.href.split('/')[];
  return hrefFragments[hrefFragments.length - 1];
}

function addIconsWrapper(card) {
  console.log('adding icons wrapper');
}

function addAssignMyselfIcon(wrapper) {
  console.log('add assign myself icon into a wrapper');
}

function addAssignMyselfEvents(icon) {
  console.log('add toggle for assigning myself to card');
}

init();
