// _TODO: add functionality to add todos
// _TODO: add functionality to remove todos
// _TODO: add dates to todos
// _TODO: add empty page at page load
// TODO: add a way to store todos in sessions

const inputBtn = document.querySelector('#input-btn');
const inputArea = document.querySelector('#input');
const ul = document.querySelector('.list');

function createDateTime() {
  const date = new Date();
  const time = new Date();

  const formattedTime = time.toLocaleString("en-IN", {
    hour: "numeric",
    minute: "numeric"
  });

  const formattedDate = date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  const datetime = [formattedDate, formattedTime];
  return datetime;
}


inputBtn.addEventListener('click', () => {
  if (inputArea.value != "") {
    // This part checks whether inserted li is the first and sets the display of parent container to block
    const lis = document.querySelectorAll('li');
    const vectorImg = document.querySelector('.vector-img');
    if (lis.length === 0) {
      vectorImg.classList.add('display-none');
    }

    // inserting element code
    const li = document.createElement('li');
    const p = document.createElement('p');
    const span = document.createElement('span');
    const div = document.createElement('div');
    const button = document.createElement('button');
    const img = document.createElement('img');
    

    img.setAttribute('src', 'src/icons8-trash.svg');
    button.append(img);
    p.innerText = inputArea.value;
    const arr = createDateTime();
    span.innerText = `${arr[0]} · ${arr[1]}`
    div.append(p, span);
    li.append(div, button);
    ul.append(li);

    inputArea.value = "";

    // Strike Event
    li.addEventListener('click', function () {
      li.firstChild.firstChild.classList.toggle('strike');
    })

    // Delete Event
    button.addEventListener('click', function () {
      this.parentElement.remove();
      const lis = document.querySelectorAll('li');
      if (lis.length === 0) {
        vectorImg.classList.remove('display-none');
      }
    });
  }
})


// Dark theme code
const themeBtn = document.querySelector('.theme-btn');
const body = document.querySelector('body');
themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
})