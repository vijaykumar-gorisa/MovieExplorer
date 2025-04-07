import React, {useState} from "react";

type Props = {
    selectedGenres: string[];
    setGenreFilter: (genres: string[]) => void;
};

const GenreFilter: React.FC<Props> = ({selectedGenres, setGenreFilter}) => {
    const genres = ["Action", "Comedy", "Horro", "Sci-fi", "Drama", "Romcom"];

    const toggleGenre = (genre: string) => {
        if(selectedGenres.includes(genre)) {
            setGenreFilter(selectedGenres.filter((g) => g !== genre));
        } else {
            setGenreFilter([...selectedGenres, genre]);
        }
    };

    return(
        <div>
            <h4>Filter by Genre:</h4>
            {genres.map((genre) => (
                <label key = {genre} style={{marginRight: "10px"}}>
                    <input
                    type = "checkbox"
                    value= {genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                    />
                    {genre}
                </label>
            ))};
        </div>
    );
};

export default GenreFilter;