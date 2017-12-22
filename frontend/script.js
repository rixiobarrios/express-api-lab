const gifs = $('.gifs')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

// Stores which item to edit/delete when the edit modal is up
let currentlyEditing = ''

function editModal (gif) {
  // Sets the edit modal to have the data from the gif clicked on
  $('#modal-edit').modal('open')
  $('#name-edit').val(gif.name)
  $('#url-edit').val(gif.url)

  currentlyEditing = gif._id
}

function addPictures (gifData) {
  // Adds all of the gifs to the dom
  gifs.empty()
  gifData.forEach(gif => {
    if (!gif.url) return

    $('<img></img>').attr('src', gif.url).addClass('gif')

    imageNode.on('click', () => { editModal(gif) })

    gifs.append(imageNode)
  })
}

axios.get('http://localhost:3000/gifs').then(response => {
  // gets the initial data
  addPictures(response.data)
})

editSubmit.addEventListener('click', (e) => {
  // submits the put request to edit a gif
  const name = $('#name-edit').val()
  const url = $('#url-edit').val()

  axios.put(`http://localhost:3000/gifs/${currentlyEditing}`, {
    name,
    url
  }).then((resp) => {
    console.log(resp)
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
})

submit.addEventListener('click', (e) => {
  // submits the post request to create a new gif
  const name = $('#name').val()
  const url = $('#url').val()

  axios.post('http://localhost:3000/gifs', {
    name,
    url
  }).then((resp) => {
    addPictures(resp.data)
    $('#modal-create').modal('close')
  })
})

deleteButton.addEventListener('click', (e) => {
  // deletes an image
  axios.delete(`http://localhost:3000/gifs/${currentlyEditing}`).then((resp) => {
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
})

// initializes modal package
$('.modal').modal()
