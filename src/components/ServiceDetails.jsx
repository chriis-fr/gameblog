import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { name } = useParams();

  return (
    <div className='relative text-center'>
      <p>Details for {name}</p>
      {/* Add more details based on the name if needed */}
    </div>
  );
};

export default ServiceDetails;
