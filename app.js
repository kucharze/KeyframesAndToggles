const dog = () => {
  let dog = document.querySelector(".dog");

  if (dog.classList.contains("bigger")) {
    dog.classList.toggle("smaller");
    dog.classList.toggle("bigger");
    dogShow(false);
  } else if (dog.classList.contains("smaller")) {
    dog.classList.toggle("bigger");
    dog.classList.toggle("smaller");
    dogShow(true);
  } else {
    dog.classList.toggle("bigger");
    dogShow(true);
  }
};

const dogShow = (status) => {
  let dog = document.querySelector(".dogselection");
  dogItems = [
    "Dog Ariel - Mastiff - Mixed Breed - Large - Female - 6 years old.",
    "Ava - Mixed Bread - Medium - Female - 1 year old",
    "Bella - Mixed Bread - Medium - Female - 4 years old",
  ];
  if (status) {
    let item = document.createElement("ul");
    for (let i = 0; i < dogItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = dogItems[i];
      item.append(listItem);
    }
    dog.append(item);
  } else {
    dog.replaceChildren();
  }
};

const cat = () => {
  let cat = document.querySelector(".cat");
  if (cat.classList.contains("bigger")) {
    cat.classList.toggle("smaller");
    cat.classList.toggle("bigger");
    catShow(false);
  } else if (cat.classList.contains("smaller")) {
    cat.classList.toggle("bigger");
    cat.classList.toggle("smaller");
    catShow(true);
  } else {
    cat.classList.toggle("bigger");
    catShow(true);
  }
};

const catShow = (status) => {
  let cat = document.querySelector(".catselection");
  catItems = [
    "Dog Ariel - Mastiff - Mixed Breed - Large - Female - 6 years old.",
    "Ava - Mixed Bread - Medium - Female - 1 year old",
    "Bella - Mixed Bread - Medium - Female - 4 years old",
  ];
  if (status) {
    let item = document.createElement("ul");
    for (let i = 0; i < catItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = catItems[i];
      item.append(listItem);
    }
    cat.append(item);
  } else {
    cat.replaceChildren();
  }
};

const rabit = () => {
  let rabit = document.querySelector(".rabit");
  // rabit.classList.toggle("bigger");

  if (rabit.classList.contains("bigger")) {
    rabit.classList.toggle("smaller");
    rabit.classList.toggle("bigger");
    rabbitShow(false);
    // console.log("rabit bigger");
  } else if (rabit.classList.contains("smaller")) {
    rabit.classList.toggle("bigger");
    rabit.classList.toggle("smaller");
    rabbitShow(true);
  } else {
    rabit.classList.toggle("bigger");
    rabbitShow(true);
  }
};

const rabbitShow = (status) => {
  let rabit = document.querySelector(".rabbitselection");
  rabbitItems = [
    "Dog Ariel - Mastiff - Mixed Breed - Large - Female - 6 years old.",
    "Ava - Mixed Bread - Medium - Female - 1 year old",
    "Bella - Mixed Bread - Medium - Female - 4 years old",
  ];
  if (status) {
    let item = document.createElement("ul");
    for (let i = 0; i < rabbitItems.length; i++) {
      let listItem = document.createElement("li");
      listItem.innerHTML = rabbitItems[i];
      item.append(listItem);
    }
    rabit.append(item);
  } else {
    rabit.replaceChildren();
  }
};

const catToggle = () => {
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");
  let rabbit = document.querySelector(".Rabbit");
  if (rabbit.classList.contains("chosen")) {
    rabbit.classList.toggle("chosen");
  }
  if (dog.classList.contains("chosen")) {
    dog.classList.toggle("chosen");
  }
  cat.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};

const dogToggle = () => {
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");
  let rabbit = document.querySelector(".Rabbit");

  if (rabbit.classList.contains("chosen")) {
    rabbit.classList.toggle("chosen");
  }
  if (cat.classList.contains("chosen")) {
    cat.classList.toggle("chosen");
  }

  dog.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};

const rabbitToggle = () => {
  let rabbit = document.querySelector(".Rabbit");
  let dog = document.querySelector(".Dog");
  let cat = document.querySelector(".Cat");

  if (dog.classList.contains("chosen")) {
    dog.classList.toggle("chosen");
  }
  if (cat.classList.contains("chosen")) {
    cat.classList.toggle("chosen");
  }
  rabbit.classList.toggle("chosen");
  document.querySelector(".cast").innerHTML = "Your vote has been cast";
};
