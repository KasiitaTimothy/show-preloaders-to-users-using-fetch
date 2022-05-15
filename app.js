document.addEventListener("DOMContentLoaded", function () {

  const appDiv = document.getElementById('app');
  const loaderDiv = document.getElementById('loader');


  function showLoader() {
    loaderDiv.classList.add('show');
  }

  function hideLoader() {
    loaderDiv.classList.remove('show');
  }

  function getPosts() {
    showLoader();
    fetch('https://ugandafilmtalks.com/wp-json/wp/v2/posts?page=1').then(res => {
      return res.json();
    }).then(data => {
      hideLoader();
      generateHTML(data);
    }).catch(err => {
      console.log('There was an error while processing your request: ' + err)
    })
  }


  function generateHTML(myData) {
    let output = '';

    myData.forEach(post => {

      output += `
    <div class="post">
    <h5 class="truncate" title="${post.title.rendered}"><a href="${post.link}" target="_blank">${post.title.rendered}</a></h5>
    <img src="https://picsum.photos/320/200"/>
    </div>
    `
    })

    appDiv.innerHTML = output;
  }

  window.onload = () => {
    getPosts();
  }

});