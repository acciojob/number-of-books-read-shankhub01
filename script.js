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
	const number = 0;
for(var i=0;i<library.length;i++){
	if(library[i].readingStatus){
		return number=number+1;
	} else{
		return number;
	}
}
};

// Do not change the code below

alert(numberOfBooksRead());
