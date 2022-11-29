const boxes = document.querySelectorAll(".but");
const selection = document.querySelector(".selection");

function randomColor() {
  const Digits = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const b = new Array(6)
    .fill("")
    .map(() => Digits[Math.floor(Math.random() * Digits.length)])
    .join("");

  return `#${b}`;
}

function r() {
  const z = randomColor();

  const box = (document.querySelector(".box").style.backgroundColor = z);
  const generateColor = [z, randomColor(), randomColor()].sort(
    () => 0.5 - Math.random()
  );
  const boxx = boxes.forEach((box) => (box.textContent = generateColor.pop()));
  console.log(z);

  for (const box of boxes) {
    box.addEventListener("click", () => {
      if (z == box.textContent) {
        selection.textContent = "Correct";
        selection.style.color = "green";
        r();
      } else {
        selection.textContent = "Wrong";
        selection.style.color = "red";
      }
    });
  }
}

r();
