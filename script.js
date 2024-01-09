// const apikey = "512603a956b2aba0a6a52f5718934251";
// const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`;
const apikey = 'cc14d62b76a205387bd8b77c651a5e4a';
const content = document.getElementById('content');
const yearSelect = document.getElementById('year');

const displayMovies = async (selectedYear) => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&year=${selectedYear}`;
    
    const res = await fetch(url);
    const movies = await res.json();
    const urlPoster = `https://image.tmdb.org/t/p/w500/`;

    // Clear previous content
    content.innerHTML = '';

    movies.results.forEach(M => {
        const mvEL = document.createElement('div');
        const title = document.createElement('h2');
        const poster = document.createElement('img');

        title.innerHTML = `${M.title.substring(0, 25)}`;
        poster.src = `${urlPoster}${M.poster_path}`;

        mvEL.appendChild(title);
        mvEL.appendChild(poster);
        content.appendChild(mvEL);
    });
}

// Event listener for year select change
yearSelect.addEventListener('change', async () => {
    const selectedYear = parseInt(yearSelect.value, 10);
    
    // Check if the selected year is within the allowed range (2017 to 2024)
    if (selectedYear => 2017 && selectedYear <= 2024) {
        await displayMovies(selectedYear);
    } else {    
        alert('Please select a year between 2000 and 2024.');
    }
});

// Initial content display for default year (you can set your default year)
const defaultYear = 2000;
displayMovies(defaultYear);


// const content = document.getElementById("content");
// const displayMovie = async (url) => {

//  const res = await fetch(url)
//  const movie = await res.json();

//  const urlPoster = `https://image.tmdb.org/t/p/w500/`;

//  movie.results.forEach(M =>{
    
//     const mvEL = document.createElement('div');
//     const title = document.createElement('h2');
//     const Poster = document.createElement('img');


//     title.innerHTML =`${M.title.substring(0,25)}`
//     //<h2>Name</h2>
//     Poster.src = `${urlPoster}${M.poster_path}`
//     //<img src="https://image.tmdb.org/t/p/w500/kQG3byEFyfwcnF0zmyNtXTmr5v.jp"

//     mvEL.appendChild(title);
//     mvEL.appendChild(Poster);
//     content.appendChild(mvEL);


//  });

 

// }

