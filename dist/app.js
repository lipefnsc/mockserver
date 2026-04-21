const populateMovies = async () => {
    const movies = document.querySelector('#movies')
    movies.innerHTML = ''

    const response = await fetch('http://localhost:3001')
    const mockData = await response.json()
    
    for (const movie of mockData) {
        const item = document.createElement('div')
        item.className = 'movie'

        const title = document.createElement('h2');
        title.textContent = movie['title']
        item.appendChild(title)

        const genre = document.createElement('p');
        genre.textContent = movie['genre']
        genre.className = 'genre'
        item.appendChild(genre)

        const synopsis = document.createElement('p');
        synopsis.textContent = movie['synopsis']
        item.appendChild(synopsis)

        movies.appendChild(item)
    }    
}
  
document.querySelector('#fetch').addEventListener('click', () => {
    populateMovies()
})
