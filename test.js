respData.results.forEach((movie) => {
    const img = document.createElement('img');
    img.src = IMGPATH + movie.backdrop_path;

    document.body.appendChild(img);
    
});