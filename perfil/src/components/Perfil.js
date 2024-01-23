import React from 'react';
import '../styles/Perfil.css';
import '../images/Foto.svg';

function Perfil(){
    return(
        <div>
            <div className='perfil'>
            <img className="foto"
        src={require("../images/Foto.jpg")}
        alt="perfil" />
                <div>
                <h1 >
                    Maria Belen Ticona Quispe
                </h1>
                <p >
                    Super Junior Fronted dev
                </p>
                    <div className='redes'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                    <path d="M18 3.87005C14.4383 3.8702 10.9927 5.13772 8.27999 7.44582C5.56724 9.75392 3.76429 12.952 3.19374 16.4678C2.62319 19.9836 3.32227 23.5877 5.16589 26.6352C7.00951 29.6827 9.87737 31.9748 13.2563 33.1013C14.0063 33.2326 14.2876 32.7826 14.2876 32.3888C14.2876 32.0325 14.2688 30.8513 14.2688 29.595C10.5 30.2888 9.52504 28.6763 9.22504 27.8326C8.89216 27.012 8.36445 26.2848 7.68754 25.7138C7.16254 25.4325 6.41254 24.7388 7.66878 24.7201C8.14846 24.7721 8.60852 24.939 9.00999 25.2067C9.41145 25.4743 9.74249 25.8348 9.97504 26.2575C10.1802 26.6261 10.4561 26.9505 10.7868 27.2123C11.1176 27.474 11.4968 27.6679 11.9026 27.7829C12.3084 27.8979 12.733 27.9316 13.1519 27.8822C13.5708 27.8328 13.9758 27.7012 14.3438 27.495C14.4087 26.7325 14.7486 26.0195 15.3 25.4888C11.9625 25.1138 8.47504 23.82 8.47504 18.0826C8.45396 16.5918 9.00407 15.1495 10.0125 14.0513C9.55396 12.7557 9.60762 11.3338 10.1625 10.0763C10.1625 10.0763 11.4187 9.68258 14.2875 11.6138C16.742 10.9388 19.3331 10.9388 21.7875 11.6138C24.6563 9.66384 25.9125 10.0763 25.9125 10.0763C26.4675 11.3338 26.5212 12.7557 26.0625 14.0513C27.0741 15.1476 27.6246 16.5912 27.6 18.0826C27.6 23.8388 24.0938 25.1138 20.7563 25.4888C21.1143 25.8517 21.39 26.2873 21.5647 26.7661C21.7394 27.2449 21.809 27.7557 21.7688 28.2638C21.7688 30.2701 21.75 31.8826 21.75 32.3888C21.75 32.7826 22.0313 33.2513 22.7813 33.1013C26.1543 31.9656 29.0139 29.6682 30.8497 26.6191C32.6854 23.57 33.3779 19.9678 32.8034 16.4554C32.2289 12.943 30.4248 9.74911 27.7132 7.44381C25.0017 5.13852 21.5591 3.8719 18 3.87005Z" fill="#A3ABB2"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <path d="M33 9.2C31.8725 9.68914 30.6801 10.0125 29.46 10.16C30.7473 9.39098 31.7119 8.18118 32.175 6.755C30.9653 7.4751 29.6411 7.98245 28.26 8.255C27.3368 7.25386 26.1075 6.58745 24.7647 6.36028C23.422 6.13311 22.0418 6.35804 20.8407 6.99979C19.6396 7.64153 18.6854 8.6638 18.1279 9.90626C17.5703 11.1487 17.4409 12.5411 17.76 13.865C15.3141 13.7413 12.9217 13.1044 10.738 11.9958C8.5543 10.8872 6.62827 9.33154 5.085 7.43C4.54371 8.37525 4.25928 9.44574 4.26 10.535C4.25808 11.5466 4.50633 12.5429 4.98263 13.4353C5.45894 14.3278 6.14853 15.0886 6.99 15.65C6.01197 15.6234 5.05483 15.3609 4.2 14.885V14.96C4.20733 16.3773 4.70399 17.7486 5.60597 18.8419C6.50795 19.9353 7.75988 20.6835 9.15 20.96C8.61488 21.1229 8.05931 21.2087 7.5 21.215C7.11284 21.2105 6.72663 21.1754 6.345 21.11C6.74086 22.3292 7.50693 23.3947 8.53661 24.1582C9.56629 24.9218 10.8084 25.3453 12.09 25.37C9.9258 27.0729 7.25383 28.0023 4.5 28.01C3.9986 28.0116 3.4976 27.9816 3 27.92C5.81164 29.7354 9.08822 30.6991 12.435 30.695C14.7445 30.719 17.0357 30.2825 19.1747 29.4111C21.3136 28.5397 23.2575 27.2508 24.8928 25.6197C26.5281 23.9887 27.8219 22.0481 28.6988 19.9114C29.5757 17.7746 30.0181 15.4846 30 13.175C30 12.92 30 12.65 30 12.38C31.177 11.5022 32.1922 10.4261 33 9.2Z" fill="#A3ABB2"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                    <path d="M30.705 3.5H5.29497C5.00933 3.49603 4.72572 3.54837 4.46031 3.65402C4.19491 3.75968 3.95292 3.91658 3.74816 4.11576C3.5434 4.31495 3.37989 4.55252 3.26695 4.81491C3.15402 5.0773 3.09388 5.35936 3.08997 5.645V31.355C3.09388 31.6406 3.15402 31.9227 3.26695 32.1851C3.37989 32.4475 3.5434 32.685 3.74816 32.8842C3.95292 33.0834 4.19491 33.2403 4.46031 33.346C4.72572 33.4516 5.00933 33.504 5.29497 33.5H30.705C30.9906 33.504 31.2742 33.4516 31.5396 33.346C31.805 33.2403 32.047 33.0834 32.2518 32.8842C32.4565 32.685 32.62 32.4475 32.733 32.1851C32.8459 31.9227 32.9061 31.6406 32.91 31.355V5.645C32.9061 5.35936 32.8459 5.0773 32.733 4.81491C32.62 4.55252 32.4565 4.31495 32.2518 4.11576C32.047 3.91658 31.805 3.75968 31.5396 3.65402C31.2742 3.54837 30.9906 3.49603 30.705 3.5ZM12.135 28.61H7.63497V15.11H12.135V28.61ZM9.88497 13.22C9.26436 13.22 8.66917 12.9735 8.23034 12.5346C7.7915 12.0958 7.54497 11.5006 7.54497 10.88C7.54497 10.2594 7.7915 9.6642 8.23034 9.22537C8.66917 8.78653 9.26436 8.54 9.88497 8.54C10.2145 8.50262 10.5482 8.53528 10.8643 8.63582C11.1803 8.73636 11.4716 8.90253 11.719 9.12344C11.9663 9.34435 12.1643 9.61501 12.2998 9.91772C12.4353 10.2204 12.5053 10.5483 12.5053 10.88C12.5053 11.2117 12.4353 11.5396 12.2998 11.8423C12.1643 12.145 11.9663 12.4156 11.719 12.6366C11.4716 12.8575 11.1803 13.0236 10.8643 13.1242C10.5482 13.2247 10.2145 13.2574 9.88497 13.22ZM28.365 28.61H23.865V21.365C23.865 19.55 23.22 18.365 21.585 18.365C21.079 18.3687 20.5862 18.5274 20.1732 18.8198C19.7602 19.1121 19.4467 19.524 19.275 20C19.1576 20.3526 19.1067 20.7239 19.125 21.095V28.595H14.625C14.625 28.595 14.625 16.325 14.625 15.095H19.125V17C19.5338 16.2907 20.1283 15.7063 20.8446 15.3098C21.5609 14.9133 22.3718 14.7198 23.19 14.75C26.19 14.75 28.365 16.685 28.365 20.84V28.61Z" fill="#A3ABB2"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                    <path d="M34.5 15.065C34.5742 12.918 34.1047 10.787 33.135 8.87C32.4771 8.0834 31.5641 7.55256 30.555 7.37C26.3813 6.99129 22.1903 6.83607 18 6.905C13.825 6.83294 9.6491 6.98315 5.49004 7.355C4.66777 7.50457 3.90682 7.89026 3.30004 8.465C1.95004 9.71 1.80004 11.84 1.65004 13.64C1.43241 16.8763 1.43241 20.1237 1.65004 23.36C1.69344 24.3731 1.84428 25.3787 2.10004 26.36C2.2809 27.1176 2.64682 27.8185 3.16504 28.4C3.77594 29.0052 4.55462 29.4128 5.40004 29.57C8.63391 29.9692 11.8924 30.1346 15.15 30.065C20.4 30.14 25.005 30.065 30.45 29.645C31.3162 29.4975 32.1168 29.0893 32.745 28.475C33.165 28.0549 33.4787 27.5406 33.66 26.975C34.1965 25.3289 34.46 23.6062 34.44 21.875C34.5 21.035 34.5 15.965 34.5 15.065ZM14.61 22.775V13.49L23.49 18.155C21 19.535 17.715 21.095 14.61 22.775Z" fill="#A3ABB2"/>
                    </svg>
                    </div>
                </div>
            </div>
            <div className="info">
                <div>        
                    <p className="num">
                    7
                    </p>
                    <p className="works">
                    Years of work experience
                    </p>        
                </div>
                <div>        
                    <p className="num">
                    1
                    </p>
                    <p className="works">
                    Completed projects
                    </p>
                </div>        
                <div>        
                    <p className="num">
                    0
                    </p>
                    <p className="works">
                    Satisfied customers
                    </p>
                </div>
            </div>
            <div>
                <button onclick="DownloadCV()"className="enviar">Download CV</button>
                <button onclick="contacme()"className="contactme">contact me </button> 
            </div>
            <div className="por">
                <p className="portafolio"> Portafolio</p>
                <p className="portafolio">skill</p>
            </div>
        </div>
    )
}
export default Perfil;