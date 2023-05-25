export default function contact() {
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const description = document.createElement('p');

    header.textContent = "Contact Us"
 
    description.textContent = "Come and experience the magic of Ruby's Cafe, where North England meets the Brittany coast, and every bite tells a story. Book your table today and let us take you on a culinary journey you won't soon forget."

    element.appendChild(header);
    element.appendChild(description);
 
    return element;
  }