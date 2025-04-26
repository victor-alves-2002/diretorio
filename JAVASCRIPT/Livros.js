const contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com"
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu"
    },
    {
      name: "Maisie Haley",
      phone: "0913 531 3030",
      email: "risus@urna.com"
    }
  ];
  
  const books = [
    {
      title: "Speaking JavaScript",
      author: "Axel Rauschmayer",
      pages: 460
    },
    {
      title: "Programming JavaScript Applications",
      author: "Eric Elliot",
      pages: 254
    },
    {
      title: "Understanding ECMAScript 6",
      author: "Nicholas C. Zakas",
      pages: 352
    }
  ];
  
  const newBook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
  };
  
  books.push(newBook);
  let selectedBooks = books.slice(-2);
  books.shift();
console.log(books.length);
console.log(books[0].title);
console.log(books[1].title);
console.log(books[2].title);
let sum = books[0].pages + books[1].pages + books[2].pages;
console.log(`pages: ${sum}`);
  // Listar contatos
  console.log("Contatos:");
  contacts.forEach((contact, index) => {
    console.log(`${index + 1}. ${contact.name} - ${contact.phone} - ${contact.email}`);
  });
  
  // Listar livros
  console.log("\nLivros:");
  books.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title}`);
  });
  
  console.log(`\nTotal de livros: ${books.length}`);