const users = [
  { name: "Alice", age: 30, job: "Engineer" },
  { name: "Bob", age: 25, job: "Teacher" },
  { name: "Charlie", age: 40, job: "Doctor" },
  { name: "David", age: 35, job: "Artist" },
  { name: "Emma", age: 10, job: "Developer" },
  { name: "Frank", age: 11, job: "Designer" },
  { name: "Grace", age: 33, job: "Writer" },
  { name: "Henry", age: 32, job: "Chef" },
  { name: "Ivy", age: 16, job: "Musician" },
  { name: "Jack", age: 38, job: "Accountant" }
];

const container = document.createElement('div');
container.className = 'container'; 

users.forEach(user => {
  if (user.age > 18) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = './загружено (1).png'; 
    img.alt = 'User Image'; 
    
    const name = document.createElement('p');
    name.className = 'name';
    name.textContent = user.name;
    
    const longLine = document.createElement('div');
    longLine.className = 'long-line';
    
    const shortLine = document.createElement('div');
    shortLine.className = 'short-line';
    
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = 'Follow';
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(longLine);
    card.appendChild(shortLine);
    card.appendChild(button);
    
    container.appendChild(card);
  }
});

document.body.appendChild(container);
