const subject = ["You", "U", "Ye", "Yous", "Youse"];

const adverb = ["absolutly", "truly", "definitely", "doubtlessly", "unquestionably"]; 

const adjective = ["a sapaperra", "a pirobo", "a gonococo", "a carechimba", "a cacorro"]; 

const ranNum = () => {
    return Math.floor(Math.random() * 5); 
}

const phraseAssembly = () => {
    return (`${subject[ranNum()]} ${adverb[ranNum()]} ${adjective[ranNum()]}`);
}
  


phraseAssembly()
//console.log(phraseAssembly());

//console.log(phraseAssembly());
  
  