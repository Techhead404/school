/*
    Name: Dillon Greek
    Class: CIS-131
    Date: 03/05/23
    Assignment: Final Image Swapping

        Create Two arrays, each array containing a different set of image filenames
        Create a window “load” event listner
            When the page loads:
                Create the large image in javascript using createElement(“img”)
                Loop through one of your arrays
                    Create an image for each element in the array
                Add a click event that will change the large image to the clicked image
                Append it to your html page
            Create a timer that runs every second (1000 milliseconds). This will call a function (or an anonymous function that:
                Changes the thumbnails from one array to the other array.
                Hint: there are various ways that you can accomplish this but ultimately you will need an if block. This looks the same as it does in other languages you have encountered here at OTC.
*/
const array1 = ['img1-1.JPG', 'img1-2.JPG', 'img1-3.JPG', 'img1-4.JPG', 'img1-5.JPG'];
const array2 = ['img2-1.JPG', 'img2-2.JPG', 'img2-3.JPG', 'img2-4.JPG', 'img2-5.JPG'];
let img_col;


window.addEventListener('load', function(){

    // Create the large top image and append to div
    const large_img = this.document.createElement("img");
    large_img.src = "img1/" + array1[1];
    large_img.id = "large_img1";
    large_img.alt = "img1/";
    var img_div = this.document.getElementById("large_img");
    img_div.appendChild(large_img);

    //Run the swapping() to change thumbnail imgs
    timer = this.setInterval(swapping, 5000);
    
    //loop through img array and create "img" for each one
    //also adding the event listener to them before appending to the img_col div
    for(let i = 0; i < array1.length; i++){
        img_col = this.document.createElement("img");
        img_col.src = large_img.alt + array1[i];
        img_col.className = "img_thumb";
        img_col.addEventListener('click', function(){       
            large_img.src = this.src;
        });
        this.document.getElementById("row").appendChild(img_col);
    }  

    //loops through checking each img alt to see if it is img1 or img2 I used the alt as a way to track 
    //part of the src. Not sure if there was a better way but this way works. 
    function swapping() {
        let img_count = document.getElementsByClassName('img_thumb');
        console.log(this.alt)
        for (let i = 0; i < img_count.length; i++){

            if (this.alt == "img1/"){       
                img_count[i].src = "img2/" + array2[i];
            }
            else{
                img_count[i].src = "img1/" + array1[i];
            }
        }
        if(this.alt == "img1/"){
            this.alt = "img2/";
        }
        else{
            this.alt = "img1/";
        }
    }
    
})

