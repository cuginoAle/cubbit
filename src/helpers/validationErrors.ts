export default function getErrorCopy(type: string) {
  switch (type) {
    case "required":
      return "This field is mandatory";

    case "pattern":
      return "Please check the format is correct";

    case "expired":
      return "Sorry, this card has expired";
    default:
      return "Unknown error!";
  }
}
