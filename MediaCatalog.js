/*
Author: Merilyn Chesler
Date: 8/7/2019
Assignment:

JAVASCRIPT ITERATORS, OBJECTS, AND CLASSES
Build a Library
Congratulations, you’ve passed the grueling rigmarole of librarian school and have become head librarian at your local Books-‘N-Stuff.

Just as you sit down, eager to utilize all those skills you learned in “Lib 203 - Shushing: How to Maintain Order While Spitting”, you realize you’re still using index cards to handle everything.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

*/
class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    
    get title() {
      return this._title;
    }
    
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    
    get ratings() {
      return this._ratings;
    }
    
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    getAverageRating() {
      return this._ratings.reduce((a,b) => a + b, 0) / this._ratings.length;
    }
    
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
    
    addRating(rating) {
      // this._ratings.push(rating);
      this._ratings.push(rating >= 1 && rating <= 5? rating : rating < 1 ? 1 : rating > 5 ? 5 : 0);
    }
  }
  
  class Book extends Media {
    constructor(title, author, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    
    get author() { return this._author;}
    get pages() { return this._pages;}
    
  }
  
  class Movie extends Media {
    constructor(title, director, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    
    get director() { return this._director;}
    get runTime() { return this._runTime; }
  }
  
  class CD extends Media {
    constructor(title, artist) {
      super(title);
      this._artist = artist;
      this._songs = [];
    }
    
    get songs() { return this._songs; }
    get artist() { return this._artist; }
    
    addSong(song) {
      this._songs.push(song);
    }
  }
  

// a Catalog class containing a list of Media elements
  class Catalog {
    constructor() {
      this._media = [];
    }
    
    get media() { return this._media; }

    addMedia(media) {
      this._media.push(media);
    }
  }

  const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(`Book "${historyOfEverything.title}" is checked out? Answer: ${historyOfEverything.isCheckedOut}`);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(3);
  console.log(`Average Rating of '${historyOfEverything.title}' is ${historyOfEverything.getAverageRating()}`);
  
  const speed = new Movie('Speed', 'Jan de Bont', 116);
  speed.toggleCheckOutStatus();
  console.log(`\nMovie "${speed.title}" is checked out? Answer: ${speed.isCheckedOut}`);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(`Average Rating of '${speed.title}' is ${speed.getAverageRating()}`);
  
  const happydays = new CD('Happy Days', 'Louis Singer');
  happydays.addSong('Love Your Neighbor');
  happydays.addSong('Be Happy');
  happydays.addSong('Thank G-d');
  
  console.log(`\nSongs in CD '${happydays.title}' are:\n${happydays.songs.join(', ')}`);
  
  happydays.toggleCheckOutStatus();
  console.log(`CD "${happydays.title}" is checked out? Answer: ${happydays.isCheckedOut}`);

  happydays.addRating(-1);
  console.log(happydays.ratings); // rating should change to 1 (min)
  happydays.addRating(0);
  console.log(happydays.ratings); // rating should change to 1 (min)
  happydays.addRating(6);
  console.log(happydays.ratings); // rating should change to 5 (max)
  console.log(`Average Rating of '${happydays.title}' is ${happydays.getAverageRating()}`);

  const catalog = new Catalog();
  catalog.addMedia(historyOfEverything);
  catalog.addMedia(speed);
  catalog.addMedia(happydays);
  console.log('\nMy Catalog content : \n');
  console.log(catalog.media);