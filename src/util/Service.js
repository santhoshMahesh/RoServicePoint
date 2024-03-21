import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork , FaGlassWaterDroplet} from "react-icons/fa6";


const Service = ({service}) => {
	
	return (
		<li className=' mb-10 ms-7'>

			<div className='flex gap-2 items-center flex-wrap'>
			<FaGlassWaterDroplet className="h-10" />
				<a
					href={"https://github.com/burakorkmez/mern-chat-app"}
					target='_blank'
					rel='noreferrer'
					className='flex items-center gap-2 text-lg font-semibold'
				>
					{service.service}
				</a>
				
			</div>

			<p className='mb-4 text-base font-normal text-gray-500'>{service.desc}
           </p>
			
		</li>
	);
};

export default Service;