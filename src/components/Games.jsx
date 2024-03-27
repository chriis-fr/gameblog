import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { useState } from 'react';
import { games } from '../constants';
import { Link, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { useEffect } from 'react';

const Games = () => {



  // State to manage modal visibility and selected index
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const handleButtonClick = () => {
    window.location.href = 'https://play.google.com/store/apps/dev?id=7388683869055327292'
  }
  

  const handleLink = (name, index) => {
    // Open modal when a service card is clicked
    setIsModalVisible(true);
    setSelectedGameIndex(index);
  };

  const handleCloseModal = () => {
    // Close modal and reset selected index when the close button is clicked
    setIsModalVisible(false);
    setSelectedGameIndex(false);
  };

  const ServiceCard = ({ name, imgSrc, index }) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          onClick={() => handleLink(name, index)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            className={`bg-${imgSrc} rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col`}
          >
            <img src={imgSrc} alt={name} className='w-45 h-40 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <div className='relative text-center'>
      <p className={styles.sectionHeadText}>Games</p>
      <p className={styles.sectionSubText}>Click, Download And Play!!~</p>

      <div className='p-4 flex flex-wrap gap-10 justify-center'>
        {games.map((game, index) => (
          <ServiceCard key={game.title} {...game} index={index} />
        ))}
        <div className='border w-[20%] rounded-lg px-4 py-4 bg-secondary hover:bg-primary hover:text-white transition duration-300 ease-in-out'
              onClick={handleButtonClick}
        >
        <h3>See all games...</h3>
      </div>
      </div>
      

      {/* Modal overlay */}
      {isModalVisible && selectedGameIndex !== null && (
        <div className='fixed top-5 bottom-10 left-0 w-full h-full overflow-hidden bg-black bg-opacity-100 items-center z-50'>
          <div className='overflow-y-auto h-full max-h-full bg-cover bg-no-repeat bg-center p-6 md:p-10 lg:p-16 rounded-lg text-white'>
            {/* Content specific to the selected game */}
            <h2 className='text-red-400 text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4'>
              {games[selectedGameIndex].name}
            </h2>
            <div className='flex flex-col md:flex-row w-full'>
  <img
    src={games[selectedGameIndex].imgSrc}
    alt={games[selectedGameIndex].name}
    className='w-full md:w-[50%] mb-4 rounded-xl md:order-2'
  />
  <div className='w-full md:w-[50%] md:order-1'>
    <p className='mb-4 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      {games[selectedGameIndex].description}
    </p>
    <p className='mb-2'>Release Date: {games[selectedGameIndex].releaseDate}</p>
    <p className='mb-2'>Genre: {games[selectedGameIndex].genre}</p>
    {/* Add more details as needed */}
  </div>
</div>
            
            <button onClick={handleCloseModal} className='bg-secondary text-white px-4 py-2 rounded-md'>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Games, 'games');

