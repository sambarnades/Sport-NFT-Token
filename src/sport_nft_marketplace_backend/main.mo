import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Array "mo:base/Array";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Float "mo:base/Float";

actor main {

  /* ------------------------ ATHLETE IDENTITY -------------------------- */

  /* ---------------- AGE FUNCTION ---------------- */

  /* Don't know if this function is essential, as if
  it's could be possible to prepare all with TS then,
  inject it in the smart contract. ---------------- */

  // Don't forget UPPERCASE on the class.
  // Can't get the same name for the input variable & the output variable.

  // public func getAgeInS(m : Float, d : Float, y : Float) : async () {

  //   // This function get the age of user in seconds.

  //   let birthMInS : Float = m * 30.5 * 24 * 60 * 60;
  //   let birthDInS : Float = d * 24 * 60 * 60;
  //   let birthYInS : Float = (2024 - y) * 365.25 * 24 * 60 * 60;
  //   let ageInS : Float = (birthDInS + birthMInS + birthYInS);

  //   Debug.print(debug_show (ageInS));
  // };

  class SportMW(
    inputFName : Text,
    inputLName : Text,
    inputBirthM : Nat,
    inputBirthD : Nat,
    inputBirthY : Nat,
    inputSport : Text,
    inputGender : Text,
  ) = {
    public let fName = inputFName;
    public let lName = inputLName;
    public let birthM = inputBirthM;
    public let birthD = inputBirthD;
    public let birthY = inputBirthY;
    public var sport = inputSport;
    public var gender = inputGender;
  };

  let s1 = SportMW("Alice", "P", 1, 1, 2014, "Dance", "Woman");
  Debug.print(debug_show (s1));
};
