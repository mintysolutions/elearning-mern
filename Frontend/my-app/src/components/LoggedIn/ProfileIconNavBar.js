import React from 'react'
import { useContext } from 'react';
import NavStateContext from '../../context/NavStateContext';
const ProfileIconNavBar = () => {
    const { setNavIdx } = useContext(NavStateContext);
    return (

        <div className="relative  cursor-pointer flex flex-row" >
            <svg
                fill="#000000"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="40px"
                height="40px"
                viewBox="0 0 969.486 969.486"
                xmlSpace="preserve"
                stroke="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <g>
                            <path d="M806.582,235.309L766.137,87.125l-137.434,37.51L571.451,9.072L114.798,235.309H0v725.105h907.137V764.973h62.35v-337.53 h-62.352V235.309H806.582z M718.441,170.63l17.654,64.68h-52.561h-75.887h-126.19l111.159-30.339l66.848-18.245L718.441,170.63z M839.135,892.414H68V522.062v-129.13v-10.233v-69.787v-9.602h35.181h27.538h101.592h409.025h75.889h37.43h35.242h35.244h13.994 v51.272v72.86h-15.357h-35.244h-87.85H547.508h-55.217v27.356v75.888v8.758v35.244v35.244v155.039h346.846v127.441H839.135z M901.486,696.973h-28.352h-34H560.291V591.375v-35.244v-35.244v-23.889v-1.555h3.139h90.086h129.129h56.492h34h4.445h23.904 V696.973z M540.707,100.191l21.15,42.688l-238.955,65.218L540.707,100.191z" />
                            <polygon points="614.146,564.57 614.146,576.676 614.146,631.152 680.73,631.152 680.73,564.57 658.498,564.57 " />
                        </g>
                    </g>
                </g>
            </svg>
            <img alt="profileImg" src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="mx-auto object-cover rounded-full h-12 w-12 mx-10 my-1" onClick={
                () => {
                    setNavIdx(8);
                }
            } />
        </div >

    )
}

export default ProfileIconNavBar