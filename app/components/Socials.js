import {AiFillBehanceSquare, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Socials() {
  return (
    <div className='flex gap-10 md:gap-16 '>
        <a href='https://www.linkedin.com/in/raamadithyan/' target='_blank'> <AiFillLinkedin color='white' className='scale-[2] md:scale-[3]' /></a>
        
        <a href='https://github.com/raamadithyan' target='_blank'>  <AiFillGithub color='white' className='scale-[2] md:scale-[3]'/></a>
        
        <a href='https://www.behance.net/raamadithyan' target='_blank'> <AiFillBehanceSquare color='white' className='scale-[2] md:scale-[3]'/></a>
       

    </div>
  )
}

export default Socials