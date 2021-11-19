let getCommits = async () => {
  let repositoryName = document.getElementById('repositoryName').value;
  let branchName = document.getElementById('branchName').value;
  let filter = document.getElementById('filter').innerText;
  let userName = document.getElementById('userName').value;
  let res = await fetch(`https://nestjs-github-restapi.herokuapp.com/repo/${userName}/${repositoryName}/${branchName}?filterBy=${filter}`);
  let data = await res.json();
  data.map((el) =>
    document
      .getElementById('commits')
      .insertAdjacentHTML('afterbegin',`<h6>${el}</h6> <br>`),
  );
};

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

document
  .getElementById('commitHashFilter')
  .addEventListener('click', function () {
    document.getElementById('filter').innerText = 'hash';
    document.getElementById('myDropdown').classList.toggle('show');
  });

document
  .getElementById('commitNameFilter')
  .addEventListener('click', function () {
    document.getElementById('filter').innerText = 'name';
    document.getElementById('myDropdown').classList.toggle('show');
  });
