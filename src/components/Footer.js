import React from 'react';
import '../css/footer.css';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="footer">
				<h5>Copyright &copy; 2021 Bryan Guilas</h5>
				<a href="https://github.com/BGM6" target="_blank" rel="noreferrer"><i
					className="fab fa-github text-light fa-2x "/></a>
				<a href="https://www.linkedin.com/in/bryan-guilas-9a00891ab/" target="_blank" rel="noreferrer"><i
					className="fab fa-linkedin  fa-2x"/></a>
				<a href="https://wakatime.com/@BGM6" target="_blank" rel="noreferrer"><i
					className="fas fa-keyboard fa-2x "/></a>
			</div>
		</div>
	);
};

export default Footer;



