const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const fheader = document.createElement('div');
  const fdate = document.createElement('span');
  const ftitle = document.createElement('h1');
  const ftemp = document.createElement('span');
  fheader.classList.add('header');
  fdate.classList.add('date');
  ftemp.classList.add('temp');
  fdate.textContent = date;
  ftemp.textContent = temp;
  ftitle.textContent = title;
  fheader.appendChild(fdate);
  fheader.appendChild(ftitle);
  fheader.appendChild(ftemp);
  return fheader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const cssSelect = document.querySelector(selector);
  const secCSS = Header(`title`, `date`, `temp`);
  cssSelect.appendChild(secCSS);
}

export { Header, headerAppender }
