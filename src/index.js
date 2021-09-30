/* import _ from 'lodash'; */
import './style.css';

const arrayList = [{
  description: 'Wake up and say morning paryers',
  completed: false,
  index: 4,
},
{
  description: 'Shower and dress up for work',
  completed: false,
  index: 5,
},
{
  description: 'Check my mails in the office',
  completed: false,
  index: 9,
},
];
arrayList.sort((a, b) => a.index - b.index);

const listContent = document.getElementById('list');

const showTasList = () => {
  listContent.innerHTML = '';
  for (let i = 0; i < arrayList.length; i += 1) {
    const rules = arrayList[i];
    const listOfTask = `<li class="item">
    <i class="far fa-square co" job="complete" id="${rules.index}"></i>
    <p class="text">${rules.description}</p>
    <i class="fas fa-ellipsis-v de" job="delete" id="${rules.index}"></i> 
  </li>
    `;
    listContent.innerHTML += listOfTask;
  }
};
window.onload = showTasList;
