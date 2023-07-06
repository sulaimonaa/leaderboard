import deleteBtn from '../assets/delete-button.png';

const leaderBoardEl = document.querySelector('#leader-board');
const globalMessageActionListner = () => {
  leaderBoardEl.addEventListener('click', (e) => {
    if (e.target.getAttribute('global-message-exit') === 'exit-msg') {
      e.target.parentNode.classList.add('hide');
    }
  });
};

export const globalMessageCreater = () => {
  const messageBoxEl = document.createElement('p');
  messageBoxEl.id = 'message-context';
  messageBoxEl.classList.add('global-message-context', 'hide');
  messageBoxEl.innerText = '';
  leaderBoardEl.prepend(messageBoxEl);
  globalMessageActionListner();
};

export const showMessageData = (message, classType) => {
  const msgBox = document.querySelector('#message-context');
  const messageBoxExitEl = document.createElement('img');
  messageBoxExitEl.classList.add('global-message-exit-btn');
  msgBox.classList.remove('hide');
  msgBox.classList.add(classType);
  messageBoxExitEl.setAttribute('global-message-exit', 'exit-msg');
  msgBox.setAttribute('message-type', classType);
  messageBoxExitEl.src = deleteBtn;
  msgBox.innerText = message;
  msgBox.appendChild(messageBoxExitEl);
};