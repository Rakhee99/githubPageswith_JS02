var form = document.getElementById("myForm")

form.addEventListener('submit',function(e){
    e.preventDefault()

    var name = document.getElementById("search").value
    var searchname = name.split(' ').join('')

    document.getElementById("result").innerHTML=""

    fetch("https://api.github.com/users/"+searchname)
    .then((result)=> result.json())
    .then((data)=>{
        console.log(data)

        document.getElementById("result").innerHTML = `
        <a target="_blank" href="https://www.github.com/${searchname}"> <img src="${data.avatar_url}"/></a>
        `
    })

    
})
