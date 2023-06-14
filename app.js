const ani1 = () => {};

const ani2 = () => {};

const ani3 = () => {};

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
