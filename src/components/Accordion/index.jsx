import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as styles from './Accordion.module.scss';

const Accordion = ({
	children,
	index,
	title,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const id = index ?? Math.random() * Number.MAX_SAFE_INTEGER - 1;

 	return(
		<div className={styles.accordion}>

			<button
				id						= {`${id}-accordion-header`}
				className			= {styles.header}
				onClick				= {() => setIsOpen(!isOpen)}
				aria-controls	= {`${id}-accordion-panel`}
				aria-expanded	= {isOpen}
			>
				<span className={styles.expandIcon} aria-expanded={isOpen}>
					&#8250;
				</span>
				<span className={styles.title}>{title}</span>

			</button>

			<AnimatePresence initial={false}>
				{isOpen && 
					<motion.div
						id							= {`${id}-accordion-panel`}
						className				= {styles.panel}
						aria-labelledby	= {`${id}-accordion-header`}
						aria-expanded		= {isOpen}
						initial 				= {{height: 0}}
						animate 				= {{height: "max-content"}}
						exit 						= {{height: 0}}
					>
						<div>{children}</div>
					</motion.div>
				}
			</AnimatePresence>
		</div>
	);
}

export default Accordion;