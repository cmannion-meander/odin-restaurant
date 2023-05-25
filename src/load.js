export default function home() {
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const description = document.createElement('p');

    header.textContent = "Ruby's Cafe"
 
    description.textContent = "Welcome to Ruby's Cafe, where culinary artistry meets the charm of the North of England and the breathtaking flavors of the Brittany coast. Nestled in the heart of Winchester, our eclectic and upscale spot is a haven for food enthusiasts seeking a truly exceptional dining experience."

    element.appendChild(header);
    element.appendChild(description);
 
    return element;
  }