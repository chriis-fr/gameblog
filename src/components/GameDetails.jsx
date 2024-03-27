import { useNavigate, useParams } from 'react-router-dom';
import { games } from '../constants';

const GameDetails = () => {
    const navigate = useNavigate();
    const { index } = useParams();
  
    const handleGoBack = () => {
      // Navigate back to the parent component when the back button is clicked
      navigate(-1);
    };
  
    const selectedGame = games[index];
  
    if (!selectedGame) {
      // Handle the case where the game is not found (optional)
      return <p>Game not found</p>;
    }

  return (
    <div className='p-6 md:p-10 lg:p-16'>
      <h2 className='mt-4 text-red-400 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4'>
        {selectedGame.name}
      </h2>
      <img src={selectedGame.imgSrc} alt={selectedGame.name} className='w-full mb-4 rounded-xl' />
      <p className='mb-4 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>{selectedGame.description}</p>
      <p className='mb-2'>Release Date: {selectedGame.releaseDate}</p>
      <p className='mb-2'>Genre: {selectedGame.genre}</p>
      {/* Add more details as needed */}
      <button onClick={handleGoBack} className='bg-secondary text-white px-4 py-2 rounded-md'>
        Back
      </button>
    </div>
  );
};

export default GameDetails;
