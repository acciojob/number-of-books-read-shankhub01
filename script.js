const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // write your code here
	const numberOfBooksRead = 0;
for(var i=0;i<library.length;i++){
	if(library[i].readingStatus){
		return numberOfBooksRead=numberOfBooksRead+1;
	} else{
		return numberOfBooksRead;
	}
}
};

// Do not change the code below

alert(numberOfBooksRead());
