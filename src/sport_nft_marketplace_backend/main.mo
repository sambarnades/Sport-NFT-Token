import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Iter "mo:base/Iter";

actor {

  /* ----------- ATHLETE IDENTITY ------------- */

  // Don't forget UPPERCASE on the class.
  // Can't get the same name for the input variable & the output variable.

  let identityData = [                                  // ERROR : I think it needs to be a HashMap.
    "FName" : Text,
    "LName" : Text,
    "Birthday" : Nat,
    "Sport" : Text,
    "Gender" : Text,
  ];

  for (input in identityData.vals()) {                  // It's working, but I think there is a more simple way.
    // Debug.print(debug_show ("input" #input));
    return "input" #input # :;
  };

  class SportMW(inputName : Text, inputAge : Nat) = {   // Functional snippet to improve.
    let name = inputName;
    let age = inputAge;
  };

  let s1 = SportMW("Alice", 9);
  let s2 = SportMW("June", 10);

};
