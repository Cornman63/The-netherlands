var sights = [
  {
    name: "Efteling",
    description: "Efteling is one of Europe's oldest and most beloved theme parks, offering a variety of thrilling rides, enchanting fairy tale-themed attractions, and captivating shows.",
    location: "Kaatsheuvel",
    image: "efteling.jpg"
  },
  {
    name: "NEMO Science Museum",
    description: "The NEMO Science Museum in Amsterdam is an interactive and educational attraction that offers hands-on exhibits, workshops, and demonstrations to engage teenagers in the wonders of science and technology.",
    location: "Amsterdam",
    image: "nemo.jpg"
  },
  {
    name: "Van Gogh Museum",
    description: "The Van Gogh Museum houses the largest collection of artworks by Vincent van Gogh, including his iconic paintings.",
    location: "Amsterdam",
    image: "vangogh.jpg"
  }
];

var sightsContainer = document.getElementById("sightsContainer");

sights.forEach(function(sight) {
  var sightElement = document.createElement("div");
  sightElement.classList.add("sight");
  
  var html = "<h2>" + sight.name + "</h2>";
  html += "<p><strong>Location:</strong> " + sight.location + "</p>";
  html += "<p>" + sight.description + "</p>";
  html += "<img src='" + sight.image + "' alt='" + sight.name + "'>";
  
  sightElement.innerHTML = html;
  
  sightsContainer.appendChild(sightElement);
});