import React, {useEffect, useState} from 'react'
import { Link } from "react-router-dom"
import { styles } from "../style"
import { navLinks } from '../constants'
import { menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`} >
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEX////iYiziXyfiXSLkbD3gTQDsnYL2zr/hWx3++ffvsJv539b88e7up5HgVg/mflX76OHgUgDnf1r0yLrvs6H32M310MTog1/yvKrrmX3eRgDjZjLzwrLpi2nxvK7oh2LqkHHld03kckblelvsn4nldVvoiW3ngWTwtKjtp53topHfTCffSBXjaU/kcEv10ctldK91AAAHHklEQVR4nO2a6XajOBBGQWCQBMjsBgMx0HS6p2d7/7cbiUWSl8SQzImTPnVPfkSgpT6tpcKGAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8BtSB8NQ+HOC5HQYqPdQg95OcYwYZtExICKV4B3DmB3tLynHjcyJIx1T1pRi/VdUc5itN1FEDH+P55SJh0dbtp2wR4v5R8/wmCnFnMJH27YZz5Zidrnh7qQYa//15pkuxjXqSInpskfbtplzMcnvJCZTYvDha68Z1/DtZW8zmUMebdtmzsUY9XFO4sp9tGnbuRBDUmQJsJ082rI3cCGGPwjaOG6lq/aluBLzlflMYgi53HOuHrye/1oMCT1v+yQj15ZswneLwHGGgCbziUC8moontMhuWRO6KX/rBGminSCXYkjiNHHcBOOJ6YeSuQX1QGvBzwo6iHbr7I2CvOBgIyyw7H3J9x5St11ljU/MvqGXcrxhyY/svSNn1OVuRitRI8ad2M2CfbwwVZedlnT3tNjtp01vToZUXVu8QQ6hvYUXM5CFqyY7VNianyCEUVec5Q+4EpXfqlr/pphsyTQ6ACWzJrA1DU3O25iI6Gx1sjd1Q8zDZi+IHJi0Ya4GWedPLNZq+Xt8kR+b4Q0xZFj8GVTVXIy868y5c5mbTWIIxeft8oqLK3Nf11Ix8z5RIwtY+OqthbxrMf5BXc7oCjHE2ZmXIJZuEhOv0cLVBHP+7lZ+3IfXYvbSN8O8sHNPDD3eqBiZ9QYtRXSjipu1TvM3uK0dO+8V412Py1g0Xu9w+za6WceNWk8if/hCfqvP3ylmfz17R6L1E62QDfL5aWLrrB6+HtU4IJuba9CXtOOAvEtMeHtgNt2FGtkgwjRJY717WFPUpXpgcYvISRcfMZXCsfe6mDsbQKC1zKJIS+G1nlHYyeZZwsc60wablbxRX60RzI+TTMVfsB0UtJfZEb+zvGdkVGbecEFPapNmdOXZqSrEh7FIIW1H1rjiVfhIhFjqSp5pdsY9qEzbfov3iNHW7o5fGYg/qMLtSu9OGberL1qwpm2EOIs8xNd4qvprOs4SrQPfM828SnZiP771ZGlkr1w06VKFCHRNdSxdzcqxQ0gqz3HbNQJl3xQJU/OODeR1MUvFCF2LMXJpCJuin6SVY842i4mmY8ST84Y50+gWSkyibWZsyp8pixz/VTFy3iA8GZeY2shkquJyfOtLMUv+LSMzGRceLkbmXIzKPwVcCGXqwetiAvkumrYndSpwMaFajHj6gqDme7dyzWwV4ypzWRr6YWGq9B0xhTSXtcLcUJtHlBC1TbKW33BydUgshvzvYkJtB43sptf87XtitJdRwfsh0PZivvk2WtI8xZo3G6291mwVY7Saj2CdXQXuiSGxZm5Txpq3L8ToPiLSPRFUrb3UbBZTm7oAnXtiDKqf6uzM1eBiyEsOL1t7zGwXQ7R5tlGMX73YD+KMD247ZwitjiBuFmPkZz1YybPuvhijeMmXHMWQ6qbbvHr5v0XM+R3K3qtW7xyanNMLU2nyvrzdjZHDGz5TvUGMUaoORp3Ta8f4PTGku61mdiXz6GoKY3tDSCOV63m9GEPFHVBfL67bLa9ZOaHLnbu8CFmcieHuxHmoBFkbrplcjLWEe46zOxMvEaFo9s2K3RIiqpalmJ8qXg4hZNl51mMk/sODb3gyeGQduZhuqcpiixgjiSueRiNXYozQsfm2PL3mJ4291vmfcJ2FduqDkJbzg3IO3uelzCOHnCTOqbPtqupyI2v7qrJjESgMB1Wdx69CqqTakXjRQ8dL2r19LYZ3Jm33/fg6bumHfW7zPTep65xLIFldu1va9TO3rpNcc1pTbQSIlyfidfilPrZpV6Et4aSPgzwNdLoYkVQMll+PKe8pNPJUwB1mvwgCsd/W0k+u8gea/CLhd359f/4lFps7Rg29ruOzxS+5uc8t10L5ltc4Be0TbWRY8ym/RX8PCCHej5/8XzOvRICkiUIRbDskxjeXjN9d/hBakz+JFIPwxoDyx+CicdGGfBKFO6NNuZiy5QPk9gEXM++Fv57HW50amfWe5IcStPJfJzDy72JkcmSQMuViTk3gOHyx+M/HPhDzahbDus/5uxraio83bMe72sp9TxxCJ98O+V+ZGIeSr5lCqAjr01/DFANAlvVZf/CU2ML7JUVJkn8O8aEbhJg0yFq/lNOMZKMe5hnJ+Hls2yH/gZC/fwo1Qen/ECeH9y3MTnxc2nwUM2/ZpfjJY4g8vp7K4TP/RCDrnKci2A/5P+Mh8/wz455ih41RjNia04QPllM8NWLf/qxjsuAVAU08L3NHQ7N/fdc3stogeWi446GZEJ6H0vqzC5n4GlYCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAR/AcI63kVyGFuxgAAAABJRU5ErkJggg==" alt="Logo" className='w-9 h-9 object-contain'/>
            <p className='text-white text-[18px] 
            font-bold cursor-pointer flex'>Maliyo Games&nbsp; 
            <span className=' md:block hidden '>| Showcasing Africa</span></p>
            </Link>
            <ul className='list-none hidden md:flex flex-row gap-10'>
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <div className='md:hidden flex flex-1 justify-end items-center'>
              <img 
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}
              />

              <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className='list-none flex sm:flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                key={link.id}
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
              </div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar