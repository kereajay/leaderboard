let firstname = document.getElementById('fname');
let lastname = document.getElementById('lname')
let pcountry = document.getElementById('country');
let pscore = document.getElementById('playerscore');
let addbutton = document.getElementById('add');




let data = [
    {
        fname: "Virat",
        lname: "Kohli",
        country: "India",
        PlayerScore: 400,
    },
    {
        fname: "Rohit",
        lname: "Sharma",
        country: "India",
        PlayerScore: 264,
    },
    {
        fname: "KL",
        lname: "Rahul",
        country: "India",
        PlayerScore: 195,
    }
]

let two = document.getElementById('two');

addbutton.addEventListener('click', (e) => {
    if (firstname.value == "" || lastname.value == "" || pcountry.value == "" || pscore.value == "") {
        alert("Not a single field should be empty ")
    }
    else {
        let playerobj = {
            fname: firstname.value,
            lname: lastname.value,
            country: pcountry.value,
            PlayerScore: Number(pscore.value),
        }
        data.push(playerobj)
        updateData();
        if (data.length > 5) {
            data.pop();
        }
        firstname.value = ""
        lastname.value = ""
        pcountry.value = ""
        pscore.value = ""
    }
})


function updateData() {
    data.sort((a, b) => {
        return b.PlayerScore - a.PlayerScore;
    })

    let innerHTML = "";
    data.forEach((ele) => {
        innerHTML += `
<div class="buttonGroup" style="display:grid; grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; width:80vw; height:50px;  background-color: rgb(50,140,245);padding:20px;margin:auto;border-radius:50px;font-size:larger;opacity:0.8;justify-content: center; " >
    <span style="margin-top:10%">${ele.fname}</span>
    <span style="margin-top:10%">${ele.lname}</span>
    <span style="margin-top:10%">${ele.country}</span>
    <span style="margin-top:10%">${ele.PlayerScore}</span>
    <button class="delet" style="margin-right:20px;border-radius:50%;width:50px;font-size:larger">☠</button>

    <button class="addone" style="margin-right:20px;border-radius:50%;width:50px">+1</button>
    <button class="addtwo" style="margin-right:20px;border-radius:50%;width:50px">+2</button>
    <button class="addthree" style="margin-right:20px;border-radius:50%;width:50px">+3</button>
    <button class="addfour" style="margin-right:20px;border-radius:50%;width:50px">+4</button>
    <button class="addfive" style="margin-right:20px;border-radius:50%;width:50px">+6</button>
    <button class="subfive" style="margin-right:20px;border-radius:50%;width:50px">-5</button>
  
</div><br>`;

    })
    two.innerHTML = innerHTML;
    creative();
    // deletea();

}

const creative = () => {


    document.querySelectorAll('.buttonGroup').forEach((ev, index) => {
        // console.log(ev,index);
        ev.addEventListener('click', (e) => {
            // console.log(e);
            if (e.srcElement.classList.value === "addone") {
                data[index].PlayerScore += 1;
            }

            else if (e.srcElement.classList.value === "addtwo") {
                data[index].PlayerScore += 2;
            }
            else if (e.srcElement.classList.value === "addthree") {
                data[index].PlayerScore += 3;
            }
            else if (e.srcElement.classList.value === "addfour") {
                data[index].PlayerScore += 4;
            }
            else if (e.srcElement.classList.value === "addfive") {
                data[index].PlayerScore += 6;
            }
            else if (e.srcElement.classList.value === "subfive") {
                data[index].PlayerScore -= 5;
            }
            else if (e.srcElement.classList.value === "delet") {
                data.splice(index, 1);
            }

            updateData();

        })
    });


}

// let deletea=document.querySelector('.delet');
// deletea.addEventListener('click',(eva)=>{
// console.log(a);
// })
// // function deleteing(){

// }




window.onload = () => updateData();