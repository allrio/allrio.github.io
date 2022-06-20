//Grab Array of Youtube Comments and store in a variable every time user scrolls

window.addEventListener('scroll', (event) => {
    let getComments = function() {
        let ytdComments = document.getElementById('comments')
        let nodes = ytdComments.childNodes[3].childNodes[5].childNodes
        let newArr = []
        nodes.forEach((node, i) => {
            if (node !== undefined) {
                newArr.push(node)
            } else {
                newArr.splice(i, 1)
            }
        })
        return newArr
    }

    console.log(getComments())

    deleteComments(getComments())
  });




//Keywords to trigger delete function
let keywords = [
    'recession',
    'BTC',
    'sell',
    'crash',
    'Bitcoin',
    'Thanks',
    'EDUTAINMENT'
]

//Delete Spam Function
function deleteComments(getComms) {
    getComms.forEach((comment, i) => {
            let textContent = comment.childNodes[1].childNodes[5].childNodes[3].childNodes[3].childNodes[1].childNodes[2].textContent.split(' ')
            textContent.forEach((word, i) => {
                keywords.forEach((keyword, i) => {
                   if (word.toLowerCase().includes(keyword.toLowerCase())) {
                    console.log(word, "==", keyword, "which is on the hidden word list.")
                    console.log('REMOVING', comment)
                    comment.remove()
                   } else {
                    // console.log("NO")
                   }
                })
            })
        })
}