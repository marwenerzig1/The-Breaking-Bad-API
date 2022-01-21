
async function myFunction() {
       
        alert("hello world ! ");
        var index = document.getElementById("char_id").value ; 
        const response = await fetch("https://www.breakingbadapi.com/api/characters/"+ index) ; 
        const data = await response.json()
        console.log(data)
    
        data.forEach(element => {
            document.querySelector("#content h2").innerHTML = element.name
            document.querySelector("#content h5").innerHTML = element.birthday
            document.querySelector("#content img").src = element.img
        });
}

myFunction();