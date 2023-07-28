let typeOfPackage = "overnight";

switch (typeOfPackage) {
  case "standard":
    console.log("3-5 days");
    break;

  case "express":
    console.log("1-2 days");
    break;

  case "overnight":
    console.log("next day");
    break;

  default:
    console.log("Invalid Input");
    break;
}
