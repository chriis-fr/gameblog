import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../style'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import {services} from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div 
       variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max: 45,
              scale: 10,
              speed: 450
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return(
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>
          maliyo games
        </p>
        <h2 className={styles.sectionHeadText}>About Us</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <h1 className={`${styles.heroSubText} mt-2 text-orange-400`}>
        Building Fun & Engaging African-inspired games for mobile ~_~
        </h1>
        <br/>
        Maliyo is a game development studio that creates African-inspired games for mobile users. We infuse our lively culture and experiences into everything we create. Our goal is to disrupt the gaming industry; by being the #1 supplier of games in Africa.
        <br />
        <p className='text-orange-200 '>
          We have over 50 games in our portfolio with the new IPs in the working ^_~
        </p>
      </motion.p>

      <div className="xl: mt-2 xl: flex-row  flex col-reverse flex gap-0 overflow-hidden ">
        <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.50] bg-black-100 bg-opacity-0 p-4 rounded-2xl">
          <img src='https://cdn-cldam.nitrocdn.com/TmxKhEbHMcydNzFFrSxxYyusZMqfUsZS/assets/images/optimized/rev-2a0ddc0/www.maliyo.com/wp-content/uploads/2021/05/danfo-2.png' />
        </motion.div>
        <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.50] bg-black-100 bg-opacity-0 p-4 rounded-2xl"
        >
          <div className=''>
            <h1 className={`${styles.sectionSubText} text-red-300 font-bold`}>Our Vision</h1>
            <p className={`${styles.sectionSubText} text-white`}>To embed our vibrant culture into video games through our storylines, character development, immersive environments, captivating sounds and strong visuals.</p>
          </div>
          <div>
            <br/>
            <h1 className={`${styles.sectionSubText} text-red-300 font-bold`}>Our Mission</h1>
            <ol className={`${styles.sectionSubText} text-white`}>
              <li>1. To create gaming content for Africa’s 1 billion population</li>
              <li>2. To provide diversity of content within the gaming industry</li>
              <li>3. To develop home-grown gaming talent in the continent</li>
              <li>4. To become the voice of the continent in the global gaming community.</li>
            </ol>
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} 
           {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")