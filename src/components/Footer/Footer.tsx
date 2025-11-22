import React from 'react';
import Link from 'next/link';
// import '../../styles/SCSS.scss';
// import '../../styles/CSS.css';


export default function Footer() {
    return (
        <footer>
            <div className="feedbackbox" role="contentinfo" aria-label="footer">
                <div>
                    <div>
                        <div><div>
                            <h4 role="heading">
                                Useful Links
                            </h4>

               <ul className="starlist">
                                <li>
                                    <span>
                                        chevron_right
                                    </span>
                                    Archives
                                </li>

                                <li>
                                    <span>
                                        chevron_right
                                    </span>
                                    Site Map
                                </li>

                                <li>
                                    <span>
                                        chevron_right
                                    </span>
                                    Help
                                </li>

                                <li>
                                    <span>
                                        chevron_right
                                    </span>
                                    Website Policies
                                </li>

                                <li>
                                    <span>
                                        chevron_right
                                    </span>
                                    Related Links
                                </li>
                            </ul>
                        </div>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h4 role="heading">
                                            SUBSCRIBE FOR UPDATES
                                        </h4>

                                        <h4 role="heading">
                                            Last Updated On: 2024.04.09
                                        </h4>
                                    </div>

                                    <ul>
                                        <li>
                                            
                                                <img src="..." alt="..." />
                                            
                                        </li>

                                        <li>
                                            
                                                <img src="..." alt="..." />
                                            
                                        </li>

                                        <li>
                                            
                                                <img src="..." alt="..." />
                                            
                                        </li>

                                        <li>
                                            
                                                <img src="..." alt="..." />
                                            
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p role="contentinfo">
                                All rights reserved to Ministry of Skill Development and Entrepreneurship, Government of India
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}