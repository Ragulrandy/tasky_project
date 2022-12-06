let globalStore = [];//array of objects
const taskContainer = document.querySelector(".task__container")

const generateNewCard = (taskData) => `
  <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
  <div class="card card border-info ">
  <div class="card-header  border-info d-flex justify-content-end gap-2">
   <button type="button" class="  btn btn-info"><i class="fas fa-pencil-alt"></i></button>
  <button type="button" class=" btn btn-warning" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"><i class="fas fa-trash-alt" id=${taskData.id} onclick="deleteCard.apply(this,arguments)"></i></button>
  </div>
  <div class="card-body">
  <img class="card-img-top" src=${taskData.imageUrl} alt="...">
   <h5 class="card-title mt-3 fw-bolder text-primary">${taskData.taskTitle}</h5>
   <p class="card-text">${taskData.taskType}</p>
   <a href="#" class="btn btn-primary">${taskData.taskDescription}</a>
  </div>
  </div>
  </div>
  `;


//loadInitialCardData() function , it render html card using data in localStorage and prevent from disapper of cards
const loadInitialCardData = () => {
  //get data from localStorage
  const getCardData = localStorage.getItem("k");

  //converting it into normal javascript object
  const {cards} = JSON.parse(getCardData);   //{cards} -> destructing

  //loop over the array of objects from king , inject it into dom
  cards.map((cardObject) => {
       taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject)); // create dynamic HTML cards and insert it into DOM
      globalStore.push(cardObject); // push card to Global Storage
  })
};


// Delete Card
const deleteCard = (event) => {
    event = window.event;
  const targetID = event.target.id;
    const tagname = event.target.tagName;

  globalStore =  globalStore.filter((cardObject) =>{
      return cardObject.id !== targetID
    });

    localStorage.setItem("k", JSON.stringify({cards:globalStore} ));

    if (tagname === "BUTTON") {
        return  document.querySelector(".task__container").removeChild(event.target.parentNode.parentNode.parentNode);
    } else {
        return  document.querySelector(".task__container").removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
    };
};



//savechanges() function
const saveChanges = () =>{
  //data from   modal and extract from html and stores in taskData object
  const taskData = {
    id:`${Date.now()}`,
    imageUrl:document.getElementById("imageurl").value,
    taskTitle:document.getElementById("tasktitle").value,
    taskType:document.getElementById("tasktype").value,
    taskDescription:document.getElementById("taskdescription").value

  };




   taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));
  globalStore.push(taskData);


  localStorage.setItem("k", JSON.stringify({cards:globalStore} )); // Stores data in Key - Value pairs

};

//command

//just
//wow
//he
//g
// 0


// In my experience this "spillover" problem arises because git does not protect "untracked" files from git checkout (only tracked but uncommitted files would be protected, i.e. user would be forced to git commit them before a git checkout is allowed to another branch).

// If you switch back to the original branch that created these files (and "untracks" them), these files become "untracked" again and can be git add'ed or git rm'ed.

// For me it looks like a bug: even "untracked" files should be protected from git checkout.

// Share
// Follow

//ff
