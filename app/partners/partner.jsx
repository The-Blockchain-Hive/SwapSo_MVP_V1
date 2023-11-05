import React from "react";
import './partner.css';
import Image from 'next/image';
const Partner = () => {
    return(
        <main>
            <div className="main">
                <div className="companies">
                    <div>
                        <Image  className="sub_comapnies" src="/eliteweb3.png" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_companies" src="/microsoft.png" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_companies" src="/stackos.png" width={100} height={100} />
                    </div>
                </div>
                <div className="backers">
                    <div>
                        <Image  className="sub_backers" src="/advisor1.jpg" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_backers" src="/advisor2.jpg" width={100} height={100} />
                    </div>
                </div>

            </div>
        </main>
    )
}
export default Partner;