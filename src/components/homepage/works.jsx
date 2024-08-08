import React from "react";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							
							<img
								src="./thunderbolt.png"
								alt="thunderbolt"
								className="work-image"
							/>
							<div className="work-title">Thunderbolt</div>
							<div className="work-subtitle">
								Technical Lead
							</div>
							<div className="work-duration">July 2023 - May 2023</div>
						</div>

						<div className="work">
							<img
								src="./Penji.png"
								alt="Penji"
								className="work-image"
							/>
							<div className="work-title">Penji</div>
							<div className="work-subtitle">
								Front-End Developer
							</div>
							<div className="work-duration">April 2019 - June 2019</div>
						</div>

						<div className="work">
							
							<img
								src="./Hopeworks.png"
								alt="Hopeworks"
								className="work-image"
							/>
							<div className="work-title">Hopeworks</div>
							<div className="work-subtitle">
								Web Developer
							</div>
							<div className="work-duration">September 2018 - March 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
