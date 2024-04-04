import { FaCodeBranch, FaCopy, FaRegStar } from "react-icons/fa";
import { FaCodeFork , FaGlassWaterDroplet} from "react-icons/fa6";


const Service = ({service}) => {
	
	return (
		<div className='w-1/8 container p-2 '>
				<div>
			<FaGlassWaterDroplet className="h-12" />
				<p className='text-lg font-semibold'>
					{service.service}
				</p>
				</div>
			<p className='mb-4 text-base font-normal text-gray-500 text-wrap'>{service.desc}</p>	
		</div>
	);
};

export default Service;