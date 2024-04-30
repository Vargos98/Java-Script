let password = "Umesh9820";

if(password.length == 8)
{
  console.log("Welcome!");

}else if(password.length<=8)
{
  console.log("Password is too short");
}else if(password.length>=8)
{
  console.log(" Too long password... password should be of 8 characters");

}else{
  console.log("Please provide a password!")
}