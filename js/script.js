qna = document.querySelectorAll('.qna')

qna.forEach(element => {

  element.onclick = () => {

    let answer = element.childNodes[5]
    let arrow = element.childNodes[3]
    
    if (element.classList.contains('selected') == true || answer.classList.contains('hidden') != true || arrow.classList.contains('rotate') == true){
      
      
      answer.classList.add('hidden')
      element.classList.remove('selected')
      arrow.classList.remove('rotate')
      return   
    }
    
    qna.forEach(element => {

      let answer = element.childNodes[5]
      let arrow = element.childNodes[3]
      
      arrow.classList.remove('rotate')
      answer.classList.add('hidden')
      element.classList.remove('selected') 
    })


    element.classList.add('selected')
    answer.classList.remove('hidden')
    arrow.classList.add('rotate')    
  }
});