export default function menu() {
    const element = document.createElement('div');
    const header = document.createElement('h1');
    const description = document.createElement('p');

    header.textContent = "Menu Items"
 
    description.textContent = "Indulge in the rich, hearty flavors of the North with dishes like our Lancashire hotpot, a succulent lamb stew slow-cooked to perfection, or our traditional Cornish pasties, boasting a golden flaky crust enveloping a savory filling of meats and vegetables. For those seeking a taste of the sea, our menu features delectable Brittany seafood specialties such as moules marinières, served in a fragrant white wine and garlic broth, and delicate pan-seared scallops with a hint of citrus."

    element.appendChild(header);
    element.appendChild(description);
 
    return element;
  }