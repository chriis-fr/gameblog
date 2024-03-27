
import {styles} from '../style'
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { motion } from 'framer-motion';

const Home = () => {


  return (
    <section className='relative w-full lg:h-[600px] xxs:h-[350px] mx-auto '>
  <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto  flex flex-row items-start gap-3`}>
    <div className='flex flex-col justify-center items-center mt-0'>
      <div className='w-5 h-5 rounded-full bg-[#915eff]' />
      <div className='w-1 sm:h-80 h-40 violet-gradient' />
    </div>
    <div className='flex flex-col w-full'> {/* Use flex-col here for smaller screens */}
      <h1 className={`${styles.heroHeadText} text-white`}
      // eslint-disable-next-line react/no-unescaped-entities
      >Fun, Engaging &<span className='text-[#915eff]'> Creative Games</span></h1>

      <div className="xl: mt-2 xl: flex-row  flex col-reverse flex gap-0 overflow-hidden ">
        <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.50] bg-black-100 bg-opacity-0 p-4 rounded-2xl">
          <img src='https://cdn-cldam.nitrocdn.com/TmxKhEbHMcydNzFFrSxxYyusZMqfUsZS/assets/images/optimized/rev-2a0ddc0/www.maliyo.com/wp-content/uploads/2021/05/Banner-Character-Transparent-2-1.png' />
        </motion.div>
        <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.50] bg-black-100 bg-opacity-0 p-4 rounded-2xl"
        >
          <img src="https://cdn-cldam.nitrocdn.com/TmxKhEbHMcydNzFFrSxxYyusZMqfUsZS/assets/images/optimized/rev-2a0ddc0/www.maliyo.com/wp-content/uploads/2022/07/Girl-apple-icon-02.png" />
        </motion.div>
      </div>

      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
        ~We build African-Inspired mobile games
      </p>
    </div>
  </div>

  {/* <ComputersCanvas /> */}

  {/* <div className='absolute xs:bottom-10 bottom 32 w-full flex justify-center items-center'>
        <a href='#home'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
</section>

  )
}

export default SectionWrapper(Home, "home");