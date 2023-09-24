import React from 'react';
import { Rating } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LongMenu from '../LongMenu';

const MainContent = ({ Newcontent, setNewcontent, searchValue }) => {
  const handleRatingChange = (filmID, newRating) => {
    const filmIndex = Newcontent.findIndex((film) => film.id === filmID);
    if (filmIndex !== -1) {
      const spreadNewcontent = [...Newcontent];
      spreadNewcontent[filmIndex].rating = newRating;
      setNewcontent(spreadNewcontent);
    }
  }
    return (Newcontent.length > 0 ? (<div className=" flex flex-wrap   ml-6 mt-7">
    {Newcontent.filter((film) => {
      const Film = film.Name.toLowerCase();

      return Film.includes(searchValue);
    }).map((film, index) => (
      <div key={film.id} className="contentContainer ">
        <div>
          <Rating
            value={film.rating ? film.rating : 0}
            onChange={(event, newRating) =>
              handleRatingChange(film.id, newRating)
            }
            // defaultValue={1}
            className=" absolute z-10 pl-1 "
            precision={0.5}
            size="medium"
            name="customized-10"
            max={10}
            icon={<FavoriteIcon fontSize="inherit" color="error" />}
            emptyIcon={
              <FavoriteBorderIcon className="text-white" fontSize="inherit" />
            }
          />
        </div>
        <div>
          <img
            onClick={() => window.open(`${film.URL}`, "_blank")}
            src={film.Image}
            alt={film.Name}
            className="cursor-pointer "
          />
        </div>
        <div className="longmenupos flex justify-end pr-3 z-10">
          <LongMenu index={index} setNewcontent={setNewcontent} />
        </div>
      </div>
    ))}
  </div>) : (<div className='text-center mt-20 text-3xl'>No items yet</div>)  );
  
};
export default MainContent;
