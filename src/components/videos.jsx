import { styles } from "../style"
import { SectionWrapper } from "../hoc"

const Videos = () => {
  return (
    <div className="relative text-center overflow:hidden">
        <div className="p-2">
        <p className={styles.sectionHeadText}>Game Clips</p>
        </div>
        <div className="p-4 flex gap-4 h-[250px] w-[95%] ">
            <div className="border rounded w-[50%]">
            <iframe  src="https://www.youtube.com/embed/2tkU12_MKtw" title="Whot King Trailer Video (Updated)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="border rounded w-[50%]">
            <iframe  src="https://www.youtube.com/embed/8xwmYoZ7bSk" title="Ruzzle Road Puzzle Game_Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>

    </div>
  )
}

export default SectionWrapper(Videos, 'videos')