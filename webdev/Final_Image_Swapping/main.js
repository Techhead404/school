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

    var mySrc;
    const large_img = this.document.createElement("img");
    large_img.src = "img1/" + array1[1];
    large_img.id = "large_img1";
    large_img.alt = "img1/";
    
    var lrg = this.document.getElementById("large_img");
    lrg.style.width = "600px";
    lrg.appendChild(large_img);



    var timer = this.setInterval(swap_img, 2000);
    
    function rand(){
        let rand = Math.floor(Math.random() * array1.length);
        return rand;       
    }

    for(let i = 0; i < array1.length; i++){
        img_col = this.document.createElement("img");
        img_col.src = large_img.alt + array1[i];
        const div_col = this.document.createElement("div");
        div_col.className = "column , p-3 , d-inline";
        this.document.getElementById("row").appendChild(div_col);
        div_col.appendChild(img_col);
    }  
    
    large_img.addEventListener('click', swapping);

    function swap_img(){
        console.log("running");
        this.document.getElementById("large_img").src = "img1/" +  array1[3];
        
    }
    function swapping() {
        let img_count = document.getElementsByTagName('img');
        console.log(this.alt)
        for (let i = 0; i < img_count.length - 1; i++){

            if (this.alt == "img1/"){       
                img_count[i + 1].src = "img2/" + array2[i];
                console.log(i, img_count[i].src);
            }
            else{
                img_count[i + 1].src = "img1/" + array1[i];
                console.log(i, img_count[i].src);
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

