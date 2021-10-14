let globalStore = [];//array of objects
const taskContainer = document.querySelector(".task_container")

const generateNewCard = (taskData) => `
<div class="col-sm-12  col-md-6 col-lg-4 mb-5 ">
  <div class="card border-info">
    <div class="card-header border-info d-flex justify-content-end gap-3">
      <button type="button" class="  btn btn-info"><i class="fas fa-pencil-alt"></i></button>
    <button type="button" class=" btn btn-warning" onclick="deleteCard.apply(this,arguments)" id="${Date.now()}"><i class="fas fa-trash-alt"  id="${Date.now()}"></i></button>
    </div>

    <div class="card-body">
      <img src="${taskData.imageUrl}" alt="picture" class="card-img-top">
      <h5 class="card-title mt-1 text-primary">${taskData.taskTitle} </h5>
      <p class="card-text">${taskData.taskType}</p>

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

    globalStore = globalStore.filter((cardObject) => cardObject.id !== targetID);
    localStorage.setItem("k", JSON.stringify({cards:globalStore} ));

    if (tagname === "BUTTON") {
        return  taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
    } else {
        return  taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
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

  // localStorage.setItem("my_taskify", globalStore); - Stores data in Object -> Object format which is not supported
  localStorage.setItem("k", JSON.stringify({cards:globalStore} )); // Stores data in Key - Value pairs

};
