// 5 kyu NSA Phone Tapping
//
// [BACKGROUND]
//
// You have always been a hacker. Even as a child.
// Exposing glitches and cheats in your favorite video games, changing records on the school network, the whole nine yards. Nothing was out of your reach.
// Until one day you became too cocky. You were caught hacking a government website.
// Now, you're looking at facing the next few years behind bars. Lucky for you that you're a brilliant hacker and the government knows it.
// They're willing to cut you a deal: Help the NSA tap phones around the world and we'll let you go.
//
// [INSTRUCTION]
//
// First, we'll have to define some people. To do that we'll need a Person constructor.
// Each instance of Person will have a minimum of three exposed properties: name, text, and call.
//
// The property name will be a simple string representing the name of the Person instance.
//
// The method call will take in 2 parameters: cellphone and callee.
//  The cellphone will be a simple object with two properties owner and number.
//  owner will be a reference to a person and number will be a a string representing the phone number.
//  The callee parameter will also hold a reference to a person.
//
// A simple example of a call will look like:
//
// var dan = new Person("Dan");
// var alex = new Person("Alex");
// var phone = {owner : dan, number: "202-555-0199"};
// dan.call(phone, alex);
//
// The method text will be very similar to the call method, but instead of taking one callee it can have any number of recipients (all of which will be instances of Person).
//
// Borrowing from the variables declared previously, texting could look like this:
//
// var mark = new Person("Mark");
// dan.text(phone, alex, mark);
//
// The NSA needs you to record every phone call and every text that every person makes.
// The NSA object will need one exposed method log. This method will take one parameter: an instance of Person.
// It will return the log kept on that person in the following format:
//
// [CALLER] called/texted [CALLEE] from [PHONE OWNER]'s phone([PHONE NUMBER])
//
// Each record will be seperated by a line break \n. So a sample record would look something like this:
//
// Dan called Erin from Dan's phone(202-555-0149)
//
// Dan texted Anthony from Anthony's phone(202-555-0199)
//
// Dan texted Alex from Dan's phone(202-555-0149)
//
// Newlines should only be added between each record, so if there's only one record don't add a newline.
//
// If there are no entries for the person, the log method will simply return No Entries.
//
// Oh, and every so often the NSA is accused of spying on civilians (crazy, right?).
// Be sure to erase each individual record after we read that particular one from the log. Good luck!
//
// Answer:
// Create the NSA object
class NSA {
  static log(person) {
    let output = [];
    for (let call of person.db) {
      let str = `${person.name} ${call.type} ${call.callee.name} from ${call.phone.owner.name}'s phone(${call.phone.number})`;
      output.push(str);
    }
    person.db = [];
    return output.length ? output.join("\n") : "No Entries";
  }
}

// Create the Person constructor
class Person {
  constructor(name) {
    this.name = name;
    this.db = [];
  }
  call(phone, callee) {
    let obj = {
      type: "called",
      phone: phone,
      callee: callee,
    };
    this.db.push(obj);
  }
  text(phone, ...recip) {
    for (let r of recip) {
      let obj = {
        type: "texted",
        phone,
        callee: r,
      };
      this.db.push(obj);
    }
  }
}
