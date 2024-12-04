const authors = [
    {
      id: 1,
      name: "F. Scott Fitzgerald",
      image: "../assets/authorImages/f scott fitzgerald.webp",
      bio: "Francis Scott Key Fitzgerald, widely known simply as Scott Fitzgerald, was an American novelist, essayist, and short story writer. He is best known for his novels depicting the flamboyance and excess of the Jazz Age, a term he popularized in his short story collection Tales of the Jazz Age",
      nationality: "American",
      birthDate: "September 24, 1896",
      deathDate: "December 21, 1940",
      books: [
        { id: 1, title: "The Great Gatsby", cover: "../assets/images/The Great Gatsby.jpg" },
        { id: 2, title: "Tender Is the Night", cover: "../assets/images/Tender Is the Night.jpg" },
        { id: 3, title: "This Side of Paradise", cover: "../assets/images/This Side of Paradise.jpg" },
        { id: 4, title: "The Beautiful and Damned", cover: "../assets/images/The Beautiful and Damned.jpg" }
      ]
    },
    {
      id: 2,
      name: "George Orwell",
      image: "../assets/authorImages/george orwell.jpg",
      bio: "George Orwell was an English novelist, essayist, journalist, and critic, best known for his novels Animal Farm and 1984.",
      nationality: "British",
      birthDate: "June 25, 1903",
      deathDate: "January 21, 1950",
      books: [
        { id: 1, title: "1984", cover: "../assets/images/1984.jpg"},
        { id: 2, title: "Animal Farm", cover: "../assets/images/Animal Farm.jpg" }
      ]
    },      
    {
      id: 3,
      name: "Charles Dickens",
      image: "../assets/authorImages/Charles Dickens.jpeg",
      bio: "Charles Dickens was an English writer and social critic, known for his novels that examine the hardships of life in Victorian England. His works often focus on social reform and the plight of the poor.",
      nationality: "British",
      birthDate: "February 7, 1812",
      deathDate: "June 9, 1870",
      books: [
        { id: 1, title: "A Tale of Two Cities", cover: "../assets/images/A Tale of Two Cities.jpg" },
        { id: 2, title: "Great Expectations", cover: "../assets/images/Great Expectations.jpg" },
        { id: 3, title: "Oliver Twist", cover: "../assets/images/Oliver Twist.jpg" }
      ]
    },
    {
      id: 4,
      name: "Virginia Woolf",
      image: "../assets/authorImages/Virginia Woolf.jpeg",
      bio: "Virginia Woolf was an English writer, known for her pioneering work in the modernist literary movement. Her novels explore themes of consciousness, time, and the lives of women in the early 20th century.",
      nationality: "British",
      birthDate: "January 25, 1882",
      deathDate: "March 28, 1941",
      books: [
        { id: 1, title: "Mrs. Dalloway", cover: "../assets/images/Mrs. Dalloway.jpg" },
        { id: 2, title: "To the Lighthouse", cover: "../assets/images/To The Lighthouse.jpg" },
        { id: 3, title: "Orlando", cover: "../assets/images/Orlando.jpg" }
      ]
    },
    {
      id: 5,
      name: "Leo Tolstoy",
    image: "../assets/authorImages/Leo Tolstoy.jpg",
    bio: "Leo Tolstoy was a Russian writer, widely regarded as one of the greatest authors of all time. His best-known works include 'War and Peace' and 'Anna Karenina', which explore themes of morality, love, and the human condition.",
    nationality: "Russian",
    birthDate: "September 9, 1828",
    deathDate: "November 20, 1910",
    books: [
      { id: 1, title: "War and Peace", cover: "../assets/images/War And Peace.jpg" },
      { id: 2, title: "Anna Karenina", cover: "../assets/images/Anna Karenina.jpg" },
      { id: 3, title: "The Death of Ivan Ilyich", cover: "../assets/images/The Death Of Ivan Ilyich.jpg" }
    ]
  }, 
      {
        id: 6,
        name: "Friedrich Nietzsche",
        image: "../assets/authorImages/Friedrich Nietzsche.jpeg",
        bio: "Friedrich Nietzsche was a German philosopher and cultural critic whose works challenged traditional moral values, religion, and the concept of truth. His ideas on the will to power and the Übermensch have had a lasting impact on modern philosophy.",
        nationality: "German",
        birthDate: "October 15, 1844",
        deathDate: "August 25, 1900",
        books: [
          { id: 1, title: "Thus Spoke Zarathustra", cover: "../assets/images/Thus Spoke Zarathustra.jpg" },
          { id: 2, title: "Beyond Good and Evil", cover: "../assets/images/Beyond Good And Evil.jpg" },
          { id: 3, title: "The Birth of Tragedy", cover: "../assets/images/The Birth Of Tragedy.jpg" }
        ]
      },
      {
        id: 7,
        name: "J.K. Rowling",
        image: "../assets/authorImages/joanne Rowling.jpg",
        bio: "J.K. Rowling is a British author, best known for writing the Harry Potter fantasy series. The series has gained worldwide attention and became the best-selling book series in history.",
        nationality: "British",
        birthDate: "July 31, 1965",
        deathDate: null,
        books: [
          { id: 1, title: "Harry Potter and the Sorcerer's Stone", cover: "../assets/images/Harry Potter_1.jpg" },
          { id: 2, title: "Harry Potter and the Chamber of Secrets", cover: "../assets/images/Harry Potter_2.jpg" },
          { id: 3, title: "Harry Potter and the Prisoner of Azkaban", cover: "../assets/images/Harry Potter_3.jpg" }
        ]
      },
      {
        id: 8,
        name: "Jane Austen",
        image: "../assets/authorImages/Jane Austen.jpeg",
        bio: "Jane Austen was an English novelist known for her six major novels, which critique the British landed gentry at the end of the 18th century.",
        nationality: "British",
        birthDate: "December 16, 1775",
        deathDate: "July 18, 1817",
        books: [
          { id: 1, title: "Pride and Prejudice", cover: "../assets/images/Pride And Prejudice.jpg" },
          { id: 2, title: "Sense and Sensibility", cover: "../assets/images/Sense And Sensibility.jpg" },
          { id: 3, title: "Emma", cover: "../assets/images/Emma.jpg" }
        ]
      },
      {
        id: 9,
        name: "Mark Twain",
        image: "../assets/authorImages/Mark Twain.jpeg",
        bio: "Mark Twain was an American writer, humorist, and lecturer, known for his novels The Adventures of Tom Sawyer and Adventures of Huckleberry Finn.",
        nationality: "American",
        birthDate: "November 30, 1835",
        deathDate: "April 21, 1910",
        books: [
          { id: 1, title: "The Adventures of Tom Sawyer", cover: "../assets/images/Tom Sawyer.jpg" },
          { id: 2, title: "Adventures of Huckleberry Finn", cover: "../assets/images/Huckleberry Finn.jpg" }
        ]
      },
      {
        id: 10,
        name: "Ernest Hemingway",
        image: "../assets/authorImages/Ernest Hemingway.jpeg",
        bio: "Ernest Hemingway was an American novelist and short story writer, known for his terse, economical style and works such as The Old Man and the Sea and A Farewell to Arms.",
        nationality: "American",
        birthDate: "July 21, 1899",
        deathDate: "July 2, 1961",
        books: [
          { id: 1, title: "The Old Man and the Sea", cover: "../assets/images/The Old Man And The Sea.jpg" },
          { id: 2, title: "A Farewell to Arms", cover: "../assets/images/A Farewell To Arms.jpg" }
        ]
      },

    
  
  ];

