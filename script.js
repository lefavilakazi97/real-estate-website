// Example code for displaying properties dynamically
const properties = [
    {
      title: "Luxury Apartment",
      location: "New York City, NY",
      price: "R1,500,000",
      image: "https://via.placeholder.com/150",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna id nisl condimentum bibendum sed et sem. Nam vel libero ut nulla finibus varius. Nullam vel magna vitae massa mattis auctor vitae a ante. "
    },
    {
      title: "Beach House",
      location: "Miami, FL",
      price: "R2,500,000",
      image: "https://via.placeholder.com/150",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna id nisl condimentum bibendum sed et sem. Nam vel libero ut nulla finibus varius. Nullam vel magna vitae massa mattis auctor vitae a ante. "
    },
    {
      title: "Mountain Retreat",
      location: "Aspen, CO",
      price: "R3,500,000",
      image: "https://via.placeholder.com/150",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id magna id nisl condimentum bibendum sed et sem. Nam vel libero ut nulla finibus varius. Nullam vel magna vitae massa mattis auctor vitae a ante. "
    }
  ];
  
  const propertiesContainer = document.querySelector(".properties");
  
  for (let i = 0; i < properties.length; i++) {
    const property = properties[i];
  
    const propertyElement = document.createElement("div");
    propertyElement.classList.add("property");
  
    const imageElement = document.createElement("img");
    imageElement.src = property.image;
    imageElement.alt = property.title;
    propertyElement.appendChild(imageElement);
  
    const titleElement = document.createElement("h3");
    titleElement.innerText = property.title;
    propertyElement.appendChild(titleElement);
  
    const locationElement = document.createElement("p");
    locationElement.innerText = `Location: ${property.location}`;
    propertyElement.appendChild(locationElement);
  
    const priceElement = document.createElement("p");
    priceElement.innerText = `Price: ${property.price}`;
    propertyElement.appendChild(priceElement);
  
    const detailsElement = document.createElement("p");
    detailsElement.innerText = property.details;
    propertyElement.appendChild(detailsElement);
  
    const detailsLinkElement = document.createElement("a");
    detailsLinkElement.href = "#";
    detailsLinkElement.classList.add("btn");
    detailsLinkElement.innerText = "View Details";
    propertyElement.appendChild(detailsLinkElement);
  
    propertiesContainer.appendChild(propertyElement);
  }
  