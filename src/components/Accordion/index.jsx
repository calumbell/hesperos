import React, { useState } from 'react';
import * as styles from './Accordion.module.scss';

const Accordion = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(false);

 	return(
		<section className={styles.accordion}>
			<h2 className={styles.header} onClick={() => setIsOpen(!isOpen)}>
				<button 
					className={isOpen ? styles.expandBtnOpen : styles.expandBtnClosed}
					onClick={() => setIsOpen(!isOpen)}
				> &#8250; </button>

				<span className={styles.title}>{title}</span>
			</h2>

			<div className={isOpen ? styles.contentVisible : styles.contentHidden}>
				{children}
			</div>
		</section>
	);
}

export default Accordion;