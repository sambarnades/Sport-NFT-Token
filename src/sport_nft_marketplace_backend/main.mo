import Debug "mo:base/Debug";
import Text "mo:base/Text";

actor {

  class Sportmw(inputName : Text, inputAge : Nat) = {             // Don't forget UPPERCASE on the class.
    let name = inputName;                                         // Can't get the same name for the input variable & the output variable.
    let age = inputAge;
    Debug.print(debug_show ("Class created"));
  };


  let s1 = Sportmw("Alice", 9);
  let s2 = Sportmw("June", 10);

  // Debug.print(debug_show (s1));

};
