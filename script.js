const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
}, {
    threshold: 0.1
})

const AllBoxes = document.querySelectorAll('.box-1')
const Text = document.querySelectorAll('.title')
const line = document.querySelectorAll('.line')
AllBoxes.forEach(el=> observer.observe(el))
 Text.forEach(el=> observer.observe(el))
 line.forEach(el=> observer.observe(el))




