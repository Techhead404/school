function test(){
    document.getElementById("row").className = "row mx-auto mt-5 w-50 text-center bg-dark text-light";
    let output = document.forms["form"]["iFirstName"].value;
    document.getElementById("outputName").innerText = document.forms["form"]["iFirstName"].value + " " + document.forms["form"]["iLastName"].value;
    document.getElementById("outputEmail").innerText = document.forms["form"]["iEmail"].value; 
    document.getElementById("outputSub").innerText = document.forms["form"]["subCheckBox"].checked;
}