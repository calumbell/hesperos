import React, { useState } from 'react';

import { 
	motion,
	AnimatePresence
} from 'framer-motion';

const Accordion = ({
	children,
	index,
	title,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const id = index ?? Math.random() * Number.MAX_SAFE_INTEGER - 1;

 	return(
		<section className="w-full relative mx-0 my-4">
			<button
				id={`${id}-accordion-header`}
				className="w-full mb-4 flex text-3xl justify-center"
				onClick={() => setIsOpen(!isOpen)}
				aria-controls={`${id}-accordion-panel`}
				aria-expanded={isOpen}
			>
				<span className="absolute w-8 text-primary transition-all left-0 aria-expanded:rotate-90" aria-expanded={isOpen}>
					&#8250;
				</span>
				<span className="font-serif">{title}</span>

			</button>

			<AnimatePresence initial={false}>
				{isOpen && 
					<motion.div
						id={`${id}-accordion-panel`}
						className="transition-transform duration-500 p-4 border-primary bg-light-shade overflow-y-hidden"
						aria-labelledby={`${id}-accordion-header`}
						aria-expanded={isOpen}
						initial={{height: 0}}
						animate={{height: "max-content"}}
						exit={{height: 0}}
						transition={{duration: 0.5}}
					>
						<div>{children}</div>
					</motion.div>
				}
			</AnimatePresence>
		</section>
	);
}

export default Accordion;