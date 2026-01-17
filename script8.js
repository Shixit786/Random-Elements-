// let btn=document.querySelector('button')


// let main=document.querySelector('#main')

// btn.addEventListener('click',function(){
//     let h1=document.createElement('h1')
//     h1.innerHTML='HELLO JS'

//     main.appendChild(h1)
    

//     console.log(h1)
// })

let btn=document.querySelector('button')
let main=document.querySelector('#main')


let arr=["ghutne kaale","maine na kutte paale","Big Dick jiggling","le gaye hum kursi bawe","walk with chest out urfi javed","chupa hoja randi ke bacche","launde bane bawarchi"]
btn.addEventListener('click',function(){
    // let div=document.createElement('div')

    let h1=document.createElement('h1')
    let x=Math.floor(Math.random()*arr.length)

    let z=Math.random()*100
    let y=Math.random()*100

    let r=Math.random()*360

    let sc=Math.random()*3



    let c1=Math.floor(Math.random()*256)
    let c2=Math.floor(Math.random()*256)
    let c3=Math.floor(Math.random()*256)

    h1.innerHTML=arr[x]
    h1.style.fontSize='10px'
    h1.style.position='absolute'
    h1.style.left=z+'%'
    h1.style.top=y+'%'
    h1.style.rotate=r+'deg'
    h1.style.color=`rgb(${c1},${c2},${c3})`
    h1.style.scale=sc

   

    main.appendChild(h1)






    // let x=Math.random()*100
    // let y=Math.random()*100

    // let c1=Math.floor(Math.random()*256)
    // let c2=Math.floor(Math.random()*256)
    // let c3=Math.floor(Math.random()*256)

    // let r=Math.random()*360

    // div.style.height='30px'
    // div.style.width='30px'
    // div.style.position='absolute'
    // div.style.left=x+'%'
    // div.style.top= y+'%'
    // div.style.rotate=r+'deg'
    // div.style.backgroundColor=`rgb(${c1},${c2},${c3})`

    // main.appendChild(div)
})

