// An adjacency list of cities in Romania and their distance
const romanian_cities = {
  "Arad": { "Sibiu": 140, "Timisoara": 118, "Zerind": 75 },
  "Bucharest": { "Fagaras": 211, "Giurgiu": 90, "Pitesti": 101, "Urziceni": 85 },
  "Craiova": { "Drobeta": 120, "Rimnicu Vilcea": 146, "Pitesti": 138 },
  "Drobeta": { "Craiova": 120, "Mehadia": 75 },
  "Eforie": { "Hirsova": 86 },
  "Fagaras": { "Bucharest": 211, "Sibiu": 99 },
  "Giurgiu": { "Bucharest": 90 },
  "Hirsova": { "Eforie": 86, "Urziceni": 98 },
  "Iasi": { "Neamt": 87, "Vaslui": 92 },
  "Lugoj": { "Mehadia": 70, "Timisoara": 111 },
  "Mehadia": { "Drobeta": 75, "Lugoj": 70 },
  "Neamt": { "Iasi": 87 },
  "Oradea": { "Sibiu": 151, "Zerind": 71 },
  "Pitesti": { "Bucharest": 101, "Craiova": 138, "Rimnicu Vilcea": 97 },
  "Rimnicu Vilcea": { "Craiova": 146, "Pitesti": 97, "Sibiu": 80 },
  "Sibiu": { "Arad": 140, "Fagaras": 99, "Oradea": 151, "Rimnicu Vilcea": 80 },
  "Timisoara": { "Arad": 118, "Lugoj": 111 },
  "Urziceni": { "Bucharest": 85, "Hirsova": 98, "Vaslui": 142 },
  "Vaslui": { "Iasi": 92, "Urziceni": 142 },
  "Zerind": { "Arad": 75, "Oradea": 71 }
}

const find_neighbors_btn = document.getElementById("find-neighbors-btn");
const find_neighbors_text = document.getElementById("find-neighbors-input");
const find_neighbors_rspn = document.getElementById("find-neighbors-response");

find_neighbors_btn.addEventListener("click", find_neighbors);
find_neighbors_text.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    find_neighbors();
  }
})

// Function to find neighbors
function find_neighbors() {
  // Get the enetered city name from the input box, remove whitespace, make capitalized
  const entered_city_name = capitalize(find_neighbors_text.value.trim());
  // Unhide the response area
  find_neighbors_rspn.hidden = false;
  // If there is no match in the cities dictionary, return an error message on screen
  if (!Object.hasOwn(romanian_cities, entered_city_name)) {
    find_neighbors_rspn.textContent = "Please enter a valid city name.";
  }
  // Otherwise get the list of neighbors
  else {
    // The neighbor city names are the keys (the distances are the values)
    const neighboring_cities = Object.keys(romanian_cities[entered_city_name]);
    // The line above returns an array, so the join() function makes it more readable
    find_neighbors_rspn.textContent = neighboring_cities.join(", ");
  }
}

// Function to convert string to capitalized form (all words)
function capitalize(some_string) {
  if (typeof some_string !== 'string' || some_string.length < 1) {
    return;
  }
  let new_string = "";
  for (let i = 0; i < some_string.length; i++) {
    if (i == 0 || (i != 0 && some_string.charAt(i - 1) === " ")) {
      new_string += some_string.charAt(i).toUpperCase();
    }
    else {
      new_string += some_string.charAt(i).toLowerCase();
    }
  }
  return new_string;
}
