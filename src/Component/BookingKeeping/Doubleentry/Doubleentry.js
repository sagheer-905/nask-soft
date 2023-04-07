import React from 'react'

function Doubleentry() {
  return (
    <div>
      {/*------- Bookkeeping Double-entry section start --------*/}
<div className="bk-dev2 pb-5 py-md-5">
  <div className="container">
    <div className="row justify-content-center align-items-center gy-4 gy-md-0 gap-md-5">
      <div className="col-md-6 order-2 order-md-1">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="423.707" height="428.027" viewBox="0 0 423.707 428.027">
          <defs>
            <linearGradient id="linear-gradient" x1="-1.071" y1="0.396" x2="-0.864" y2="0.985" gradientUnits="objectBoundingBox">
              <stop offset="0.004" stopColor="#e38ddd" />
              <stop offset={1} stopColor="#9571f6" />
            </linearGradient>
            <clipPath id="clip-path">
              <path id="Path_243" data-name="Path 243" d="M818.734,837.819c5.453-19.309,22.308-54.31,10.391-74.3-13.578-22.772-31.984-9.425-39.755-27.452-12.145-28.176-40.057-44.959-64.759-26.505-24.38,18.213-15.884,70.63,27.308,123.065,26.725,41.127,24.645,50.582,15.431,72.433C760.9,920.368,798.232,910.419,818.734,837.819Z" transform="translate(-711.143 -701.818)" fill="none" />
            </clipPath>
            <linearGradient id="linear-gradient-2" x1="-1.47" y1="0.762" x2="-0.993" y2="-0.277" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#ff9085" />
              <stop offset={1} stopColor="#fb6fbb" />
            </linearGradient>
            <clipPath id="clip-path-2">
              <path id="Path_249" data-name="Path 249" d="M730.5,1421.907c-10.243.6-34.122,1.522-33.145-18.131.814-16.361,4.683-26.753-13.784-34.787s-26.4-22.7-18.922-39.373c7.87-17.549-10.589-41.205,2.9-52.964,23.505-20.488,56.389,18.223,56.808,53.928s18.334,21.976,34.072,26.87C779.915,1364.131,738.776,1421.418,730.5,1421.907Z" transform="translate(-661.854 -1270.958)" fill="none" />
            </clipPath>
            <linearGradient id="linear-gradient-3" y1="0.5" x2={1} y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#311944" />
              <stop offset={1} stopColor="#893976" />
            </linearGradient>
            <linearGradient id="linear-gradient-4" x1={0} y1="0.5" x2={1} y2="0.5" xlinkHref="#linear-gradient-2" />
            <linearGradient id="linear-gradient-5" x1="-11.397" y1="0.82" x2="-10.463" y2="5.546" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#aa80f9" />
              <stop offset="0.996" stopColor="#6165d7" />
            </linearGradient>
            <linearGradient id="linear-gradient-6" x1="36.7" y1="-1.795" x2="37.696" y2="-1.795" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#444b8c" />
              <stop offset="0.996" stopColor="#26264f" />
            </linearGradient>
            <linearGradient id="linear-gradient-7" x1="94.12" y1="0.5" x2="95.12" y2="0.5" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#ffc444" />
              <stop offset="0.996" stopColor="#f36f56" />
            </linearGradient>
            <linearGradient id="linear-gradient-8" x1="34.401" y1="-24.384" x2="35.364" y2="-24.384" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-9" x1="61.959" y1="0.5" x2="62.959" y2="0.5" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-10" x1="-9.325" y1="0.836" x2="-10.126" y2="0.171" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#40447e" />
              <stop offset="0.996" stopColor="#3c3b6b" />
            </linearGradient>
            <linearGradient id="linear-gradient-11" x1="-14.99" y1="0.427" x2="-16.123" y2="-0.222" xlinkHref="#linear-gradient-10" />
            <linearGradient id="linear-gradient-12" x1="-6.62" y1="0.386" x2="-6.068" y2="2.163" xlinkHref="#linear-gradient-5" />
            <linearGradient id="linear-gradient-13" x1="-7.067" y1="1.627" x2="-6.814" y2="0.675" xlinkHref="#linear-gradient-5" />
            <linearGradient id="linear-gradient-14" x1="-8.727" y1="0.293" x2="-8.163" y2="2.456" xlinkHref="#linear-gradient-5" />
            <linearGradient id="linear-gradient-15" x1="-7.592" y1="3.338" x2="-7.713" y2="0.667" xlinkHref="#linear-gradient-3" />
            <linearGradient id="linear-gradient-16" x1="-23.137" y1="-0.345" x2="-23.01" y2="1.229" xlinkHref="#linear-gradient-3" />
            <linearGradient id="linear-gradient-17" x1="29.713" y1="0.5" x2="30.713" y2="0.5" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-18" x1="-6.03" y1="0.691" x2="-6.219" y2="0.249" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-19" x1="-6.528" y1="1.422" x2="-6.108" y2="0.015" xlinkHref="#linear-gradient-3" />
            <linearGradient id="linear-gradient-20" x1="-7.285" y1="0.5" x2="-6.285" y2="0.5" xlinkHref="#linear-gradient-3" />
            <linearGradient id="linear-gradient-21" x1="30.822" y1="0.5" x2="31.822" y2="0.5" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-22" x1="18.409" y1="0.002" x2="18.312" y2="1.962" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-23" x1="55.35" y1="-1.513" x2="54.656" y2="-3.049" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#311944" />
              <stop offset={1} stopColor="#6b3976" />
            </linearGradient>
            <linearGradient id="linear-gradient-24" x1="60.807" y1="-1.383" x2="61.824" y2="-1.383" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-25" x1="56.361" y1="-3.55" x2="55.648" y2="-6.318" xlinkHref="#linear-gradient-23" />
            <linearGradient id="linear-gradient-26" x1="296.72" y1="-13.634" x2="297.822" y2="-13.634" xlinkHref="#linear-gradient-7" />
            <linearGradient id="linear-gradient-27" x1="0.329" y1="0.554" x2="-0.255" y2="0.738" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#fcb148" />
              <stop offset="0.052" stopColor="#fdb946" />
              <stop offset="0.142" stopColor="#fec144" />
              <stop offset="0.318" stopColor="#ffc444" />
              <stop offset="0.485" stopColor="#fdb946" />
              <stop offset="0.775" stopColor="#f99c4c" />
              <stop offset="0.866" stopColor="#f8924f" />
              <stop offset={1} stopColor="#f8924f" />
            </linearGradient>
            <linearGradient id="linear-gradient-28" x1="0.727" y1="0.007" x2="0.207" y2="1.135" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#ffdb44" />
              <stop offset={1} stopColor="#feef06" />
            </linearGradient>
            <linearGradient id="linear-gradient-29" x1="0.636" y1="1.231" x2="0.531" y2="0.666" xlinkHref="#linear-gradient-27" />
            <linearGradient id="linear-gradient-30" x1="0.409" y1="0.31" x2="0.858" y2="1.247" xlinkHref="#linear-gradient-27" />
            <linearGradient id="linear-gradient-31" x1="0.253" y1="0.019" x2="0.711" y2="1.039" xlinkHref="#linear-gradient-28" />
            <linearGradient id="linear-gradient-32" x1="0.464" y1="0.369" x2="1.215" y2="1.306" xlinkHref="#linear-gradient-27" />
            <linearGradient id="linear-gradient-45" x1="0.468" y1="2.148" x2="0.492" y2="0.807" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-46" x1="0.468" y1="2.148" x2="0.492" y2="0.807" xlinkHref="#linear-gradient-5" />
            <linearGradient id="linear-gradient-47" x1={0} y1="0.5" x2={1} y2="0.5" xlinkHref="#linear-gradient-5" />
            <linearGradient id="linear-gradient-49" x1="0.624" y1="-0.475" x2="-0.074" y2="5.032" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#311944" />
              <stop offset={1} stopColor="#a03976" />
            </linearGradient>
            <linearGradient id="linear-gradient-50" x1="0.625" y1="-0.475" x2="-0.079" y2="5.032" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-51" x1="0.632" y1="-0.475" x2="-0.116" y2="5.031" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-52" x1="0.644" y1="-0.475" x2="-0.161" y2="5.03" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-53" x1="77.548" y1="-500.164" x2="77.307" y2="-485.095" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-54" x1="76.054" y1="-498.82" x2="75.813" y2="-483.664" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-55" x1="73.548" y1="-502.215" x2="73.307" y2="-486.067" xlinkHref="#linear-gradient-49" />
            <linearGradient id="linear-gradient-56" x1="4.937" y1="-4.188" x2="-3.238" y2="4.445" gradientUnits="objectBoundingBox">
              <stop offset={0} stopColor="#444b8c" />
              <stop offset="0.996" stopColor="#3e4177" />
            </linearGradient>
            <linearGradient id="linear-gradient-57" x1="3.971" y1="-3.139" x2="-4.217" y2="5.441" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-58" x1="3.001" y1="-2.104" x2="-5.198" y2="6.425" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-59" x1="2.029" y1="-1.08" x2="-6.183" y2="7.397" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-60" x1="5.34" y1="-4.573" x2="-2.855" y2="4.013" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-61" x1="4.372" y1="-3.527" x2="-3.836" y2="5.006" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-62" x1="3.401" y1="-2.495" x2="-4.819" y2="5.987" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-63" x1="2.427" y1="-1.475" x2="-5.806" y2="6.957" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-64" x1="5.745" y1="-4.954" x2="-2.471" y2="3.586" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-65" x1="4.775" y1="-3.912" x2="-3.453" y2="4.576" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-66" x1="3.802" y1="-2.883" x2="-4.438" y2="5.555" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-67" x1="2.826" y1="-1.866" x2="-5.427" y2="6.522" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-68" x1="6.152" y1="-5.332" x2="-2.084" y2="3.163" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-69" x1="5.18" y1="-4.293" x2="-3.068" y2="4.151" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-70" x1="4.205" y1="-3.268" x2="-4.055" y2="5.128" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-71" x1="6.561" y1="-5.704" x2="-1.696" y2="2.745" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-72" x1="5.587" y1="-4.669" x2="-2.682" y2="3.729" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-73" x1="4.61" y1="-3.647" x2="-3.671" y2="4.703" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-74" x1="3.421" y1="-0.585" x2="-4.849" y2="2.479" xlinkHref="#linear-gradient-56" />
            <linearGradient id="linear-gradient-75" x1="0.524" y1="-0.537" x2="0.388" y2="5.322" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-76" x1="0.524" y1="-0.537" x2="0.388" y2="5.319" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-77" x1="0.524" y1="-0.536" x2="0.387" y2="5.317" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-78" x1="0.524" y1="-0.536" x2="0.386" y2="5.315" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-79" x1="0.524" y1="-0.537" x2="0.388" y2="5.32" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-80" x1="0.524" y1="-0.536" x2="0.387" y2="5.318" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-81" x1="0.524" y1="-0.536" x2="0.386" y2="5.315" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-82" x1="0.525" y1="-0.535" x2="0.385" y2="5.313" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-83" x1="0.524" y1="-0.536" x2="0.387" y2="5.318" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-84" x1="0.524" y1="-0.536" x2="0.386" y2="5.316" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-85" x1="0.525" y1="-0.536" x2="0.385" y2="5.314" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-86" x1="0.525" y1="-0.535" x2="0.384" y2="5.312" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-87" x1="0.524" y1="-0.536" x2="0.386" y2="5.316" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-88" x1="0.525" y1="-0.536" x2="0.385" y2="5.314" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-89" x1="0.525" y1="-0.535" x2="0.384" y2="5.312" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-90" x1="0.525" y1="-0.536" x2="0.385" y2="5.314" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-91" x1="0.525" y1="-0.535" x2="0.384" y2="5.312" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-92" x1="0.525" y1="-0.535" x2="0.383" y2="5.31" xlinkHref="#linear-gradient-6" />
            <linearGradient id="linear-gradient-93" x1="0.565" y1="-0.496" x2="0.195" y2="5.131" xlinkHref="#linear-gradient-6" />
          </defs>
          <g id="Group_423" data-name="Group 423" transform="translate(-2325.623 -1672)">
            <path id="Path_237" data-name="Path 237" d="M904.757,634.969C893.273,559.8,846.186,467.445,753.163,457.78c0,0-70.628-8.591-140.252,4.43C571.589,469.937,535.357,492.94,512.43,526s-30.585,73.375-21.291,111.809c6.037,24.963,10.116,50.8,9,76.449-1.412,32.35-4.07,66.364,10.231,96.532,20.954,44.2,72.08,57.219,116.691,61.372,16.439,1.53,32.94,2.147,49.394,3.448,31.565,2.5,66.962-1.543,97.385-9.761C928.874,823.97,916.241,710.14,904.757,634.969Z" transform="translate(1838.342 1217)" fill="#f4f7fa" />
            <g id="Group_194" data-name="Group 194" transform="translate(2352.51 1710.013)">
              <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                <g id="Group_192" data-name="Group 192">
                  <g id="Group_187" data-name="Group 187" transform="translate(7.591)">
                    <path id="Path_238" data-name="Path 238" d="M767.35,905.062c-1.764,4.185-5.053,10-8.556,16.689h74.633c-11.4-21.077-26.312-42.786-14.693-83.932,5.453-19.309,22.308-54.31,10.391-74.3-13.578-22.772-31.984-9.425-39.755-27.452-12.146-28.176-40.057-44.959-64.759-26.505-24.38,18.213-15.884,70.63,27.308,123.065C778.643,873.756,776.563,883.212,767.35,905.062Z" transform="translate(-711.143 -701.818)" fill="url(#linear-gradient)" />
                    <g id="Group_186" data-name="Group 186" transform="translate(0 0)">
                      <g id="Group_185" data-name="Group 185" clipPath="url(#clip-path)">
                        <g id="Group_184" data-name="Group 184" transform="translate(-0.492 -17.076)" opacity="0.3">
                          <path id="Path_239" data-name="Path 239" d="M798.3,823.626c-.862-9.677-2.166-18.76-3.546-28.377l-.46-3.206c-.95-4.59-1.762-9.141-2.548-13.542-1.773-9.939-3.448-19.326-6.589-29.095-.117-.58-.2-1.148-.293-1.749-.322-2.147-.656-4.367-2.21-6.31l-.042-.084c-12.692-52.234-36.372-102.725-70.381-150.069l.352-.253c34.032,47.375,57.731,97.9,70.44,150.173,1.6,2.026,1.957,4.391,2.27,6.479.089.6.174,1.159.283,1.7,3.143,9.773,4.82,19.174,6.6,29.128.785,4.4,1.6,8.947,2.548,13.544l.462,3.219c1.382,9.622,2.686,18.711,3.549,28.4Z" transform="translate(-711.573 -590.941)" fill="#fcfdfe" />
                          <path id="Path_240" data-name="Path 240" d="M1218.064,1130.786c-4.1-24.979,4.807-56.643,13-78.809A359.363,359.363,0,0,1,1250,1009.449l.38.207a358.9,358.9,0,0,0-18.911,42.477c-8.171,22.115-17.053,53.7-12.973,78.583Z" transform="translate(-1138.628 -944.994)" fill="#fcfdfe" />
                          <path id="Path_241" data-name="Path 241" d="M979.712,732.812c-5.823-26.264-5.853-55.176-5.863-64.676,0-1.817,0-3.018-.044-3.245l.426-.076c.046.255.048,1.2.051,3.321.01,9.489.039,38.365,5.853,64.583Z" transform="translate(-932.859 -653.437)" fill="#fcfdfe" />
                          <path id="Path_242" data-name="Path 242" d="M770.495,1177.308c-12.272-21.576-62.049-35.075-62.55-35.209l.112-.418c.5.134,50.454,13.681,62.815,35.414Z" transform="translate(-707.945 -1056.86)" fill="#fcfdfe" />
                        </g>
                      </g>
                    </g>
                  </g>
                  <g id="Group_191" data-name="Group 191" transform="translate(0 87.655)">
                    <path id="Path_244" data-name="Path 244" d="M724.358,1330.579c.4,34.288,16.94,22.99,32.19,26.374,17.6,25.465,19.258,49.091-7.02,69.495l-29.28-4.382c-10.864-.5-23.612-3.825-22.893-18.291.814-16.361,4.683-26.753-13.784-34.787s-26.4-22.7-18.922-39.373c7.87-17.549-10.589-41.2,2.9-52.963C691.056,1256.164,723.939,1294.875,724.358,1330.579Z" transform="translate(-661.854 -1270.957)" fill="url(#linear-gradient-2)" />
                    <g id="Group_190" data-name="Group 190" transform="translate(0 0)">
                      <g id="Group_189" data-name="Group 189" clipPath="url(#clip-path-2)">
                        <g id="Group_188" data-name="Group 188" transform="translate(-3.655 -3.774)" opacity="0.3">
                          <path id="Path_245" data-name="Path 245" d="M804.16,1371.211a224.4,224.4,0,0,1-31.48-44.172,217.39,217.39,0,0,1-19.8-50.392,204.974,204.974,0,0,1-5.291-30.15l.441-.043a204.624,204.624,0,0,0,5.28,30.085,216.94,216.94,0,0,0,19.757,50.289,223.95,223.95,0,0,0,31.418,44.085Z" transform="translate(-730.732 -1246.453)" fill="#fcfdfe" />
                          <path id="Path_246" data-name="Path 246" d="M881.677,2144.145l-.2-.4a75.992,75.992,0,0,1,19.067-6.421,74.119,74.119,0,0,1,10.149-1.393l.029.442a73.5,73.5,0,0,0-10.088,1.385A75.516,75.516,0,0,0,881.677,2144.145Z" transform="translate(-843.997 -1998.944)" fill="#fcfdfe" />
                          <path id="Path_247" data-name="Path 247" d="M685.771,1757.674c-15.12-14.625-47.3-13.289-47.627-13.272l-.021-.442c.326-.014,32.7-1.364,47.956,13.4Z" transform="translate(-638.123 -1667.306)" fill="#fcfdfe" />
                          <path id="Path_248" data-name="Path 248" d="M822.338,1307.612c-4.526-23.333,12.962-50.3,13.139-50.566l.37.243c-.176.269-17.565,27.084-13.074,50.239Z" transform="translate(-793.334 -1255.415)" fill="#fcfdfe" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="Group_249" data-name="Group 249" transform="translate(2414.533 1712.059)">
              <g id="Group_221" data-name="Group 221" transform="translate(0 0)">
                <path id="Path_250" data-name="Path 250" d="M1327.066,734.877v323.787c0,4.063-2.89,7.5-6.716,7.682l-247.886,11.608a7.453,7.453,0,0,1-7.9-7.539V722.622a7.506,7.506,0,0,1,8-7.51l25.4,1.281,222.56,11.211a6.563,6.563,0,0,1,1.706.315,7.461,7.461,0,0,1,4.754,5.374A5.861,5.861,0,0,1,1327.066,734.877Z" transform="translate(-1064.568 -715.102)" fill="#97a6b7" />
                <g id="Group_219" data-name="Group 219" transform="translate(25.099 37.198)">
                  <g id="Group_203" data-name="Group 203" transform="translate(1.461 208.992)">
                    <g id="Group_195" data-name="Group 195" transform="translate(0 0.936)">
                      <path id="Path_251" data-name="Path 251" d="M1242.837,2363.84l-5.81.174v-44.232l5.808-.1Z" transform="translate(-1237.026 -2319.684)" fill="#97a6b7" />
                    </g>
                    <g id="Group_196" data-name="Group 196" transform="translate(11.212 14.507)">
                      <path id="Path_252" data-name="Path 252" d="M1315.6,2438.051l-5.772.173,0-30.3,5.77-.121Z" transform="translate(-1309.827 -2407.8)" fill="#97a6b7" />
                    </g>
                    <g id="Group_197" data-name="Group 197" transform="translate(22.349 6.332)">
                      <path id="Path_253" data-name="Path 253" d="M1387.881,2392.816l-5.735.172-.01-38.157,5.732-.107Z" transform="translate(-1382.137 -2354.723)" fill="#97a6b7" />
                    </g>
                    <g id="Group_198" data-name="Group 198" transform="translate(33.417 13.862)">
                      <path id="Path_254" data-name="Path 254" d="M1459.708,2433.844l-5.7.17L1454,2403.73l5.7-.12Z" transform="translate(-1454 -2403.61)" fill="#97a6b7" />
                    </g>
                    <g id="Group_199" data-name="Group 199" transform="translate(44.414 21.881)">
                      <path id="Path_255" data-name="Path 255" d="M1531.078,2477.567l-5.66.169-.011-21.923,5.659-.133Z" transform="translate(-1525.408 -2455.681)" fill="#97a6b7" />
                    </g>
                    <g id="Group_200" data-name="Group 200" transform="translate(55.325)">
                      <path id="Path_256" data-name="Path 256" d="M1601.9,2357.048l-5.624.168-.026-43.514,5.621-.1Z" transform="translate(-1596.249 -2313.607)" fill="#97a6b7" />
                    </g>
                    <g id="Group_201" data-name="Group 201" transform="translate(66.197 30.105)">
                      <path id="Path_257" data-name="Path 257" d="M1672.436,2522.09l-5.587.167-.009-13.034,5.586-.145Z" transform="translate(-1666.84 -2509.078)" fill="#97a6b7" />
                    </g>
                    <g id="Group_202" data-name="Group 202" transform="translate(76.962 8.157)">
                      <path id="Path_258" data-name="Path 258" d="M1742.322,2401.206l-5.551.167-.028-34.7,5.549-.109Z" transform="translate(-1736.742 -2366.567)" fill="#97a6b7" />
                    </g>
                  </g>
                  <g id="Group_204" data-name="Group 204" transform="translate(1.461 180.757)">
                    <path id="Path_259" data-name="Path 259" d="M1454.708,2141.054l-217.685,2.686v-11.505l217.66-1.952Z" transform="translate(-1237.023 -2130.283)" fill="#97a6b7" />
                  </g>
                  <g id="Group_205" data-name="Group 205" transform="translate(1.462 266.522)">
                    <path id="Path_260" data-name="Path 260" d="M1454.914,2697.941l-217.88,8.542v-11.527l217.856-7.8Z" transform="translate(-1237.034 -2687.151)" fill="#97a6b7" />
                  </g>
                  <g id="Group_206" data-name="Group 206" transform="translate(1.458)">
                    <path id="Path_261" data-name="Path 261" d="M1342.242,973.395,1237,969.086V956.628l105.225,4.693Z" transform="translate(-1237.003 -956.628)" fill="#97a6b7" />
                  </g>
                  <g id="Group_207" data-name="Group 207" transform="translate(104.405 206.518)">
                    <path id="Path_262" data-name="Path 262" d="M2020.228,2305.507l-114.785,2.242-.009-8.251,114.776-1.955Z" transform="translate(-1905.434 -2297.542)" fill="#97a6b7" />
                  </g>
                  <g id="Group_208" data-name="Group 208" transform="translate(104.424 223.855)">
                    <path id="Path_263" data-name="Path 263" d="M2020.375,2417.612l-114.8,2.848-.009-7.769,114.8-2.579Z" transform="translate(-1905.562 -2410.113)" fill="#97a6b7" />
                  </g>
                  <g id="Group_209" data-name="Group 209" transform="translate(104.443 240.73)">
                    <path id="Path_264" data-name="Path 264" d="M2020.52,2527.652l-114.824,3.472-.009-8.258,114.815-3.186Z" transform="translate(-1905.687 -2519.681)" fill="#97a6b7" />
                  </g>
                  <g id="Group_210" data-name="Group 210" transform="translate(0 36.271)">
                    <path id="Path_265" data-name="Path 265" d="M1446.864,1314.745l-219.327.464V1192.137l3.189.111-.04,119.779,216.149-.254Z" transform="translate(-1227.538 -1192.137)" fill="#97a6b7" />
                  </g>
                  <g id="Group_211" data-name="Group 211" transform="translate(11.875 50.177)">
                    <path id="Path_266" data-name="Path 266" d="M1306.227,1380.941a1.639,1.639,0,0,1-1.106-.424,1.433,1.433,0,0,1-.033-2.113l51.95-50.214a1.587,1.587,0,0,1,2-.138l26.474,18.513,47.844-42.515a1.491,1.491,0,0,1,1.86-.071l25.754,18.693,37.994-39.823a1.433,1.433,0,0,1,2.075,1.974l-38.809,40.73a1.455,1.455,0,0,1-1.9.155l-25.84-18.729-47.81,42.543a1.556,1.556,0,0,1-1.914.1l-26.435-18.457-50.96,49.323A1.632,1.632,0,0,1,1306.227,1380.941Z" transform="translate(-1304.639 -1282.429)" fill="#97a6b7" />
                  </g>
                  <g id="Group_218" data-name="Group 218" transform="translate(6.914 46.23)">
                    <g id="Group_212" data-name="Group 212" transform="translate(52.287 45.155)">
                      <path id="Path_267" data-name="Path 267" d="M1617.766,1550a5.745,5.745,0,0,0-5.828,5.828,6.063,6.063,0,0,0,6.508,5.353,5.744,5.744,0,0,0,5.805-5.826A6.061,6.061,0,0,0,1617.766,1550Z" transform="translate(-1611.928 -1549.992)" fill="#97a6b7" />
                    </g>
                    <g id="Group_213" data-name="Group 213" transform="translate(0 95.477)">
                      <path id="Path_268" data-name="Path 268" d="M1278.458,1876.738c-3.513.179-6.21,2.872-6.018,6.014s3.2,5.533,6.714,5.342,6.185-2.882,5.994-6.012S1281.963,1876.559,1278.458,1876.738Z" transform="translate(-1272.43 -1876.729)" fill="#97a6b7" />
                    </g>
                    <g id="Group_214" data-name="Group 214" transform="translate(79.885 64.413)">
                      <path id="Path_269" data-name="Path 269" d="M1796.862,1675.039a5.715,5.715,0,0,0-5.732,5.815,5.94,5.94,0,0,0,6.4,5.274,5.713,5.713,0,0,0,5.71-5.813A5.939,5.939,0,0,0,1796.862,1675.039Z" transform="translate(-1791.12 -1675.033)" fill="#97a6b7" />
                    </g>
                    <g id="Group_215" data-name="Group 215" transform="translate(155.684 39.741)">
                      <path id="Path_270" data-name="Path 270" d="M2288.763,1514.843a5.469,5.469,0,0,0-5.467,5.638,5.767,5.767,0,0,0,6.118,5.2,5.468,5.468,0,0,0,5.447-5.637A5.767,5.767,0,0,0,2288.763,1514.843Z" transform="translate(-2283.286 -1514.839)" fill="#97a6b7" />
                    </g>
                    <g id="Group_216" data-name="Group 216" transform="translate(194.661)">
                      <path id="Path_271" data-name="Path 271" d="M2547.655,1262.007a5.737,5.737,0,0,0-5.953-5.206,5.289,5.289,0,0,0-5.333,5.5,5.737,5.737,0,0,0,5.972,5.205A5.289,5.289,0,0,0,2547.655,1262.007Z" transform="translate(-2536.361 -1256.798)" fill="#97a6b7" />
                    </g>
                    <g id="Group_217" data-name="Group 217" transform="translate(128.784 21.176)">
                      <path id="Path_272" data-name="Path 272" d="M2114.192,1394.3a5.5,5.5,0,0,0-5.559,5.651,5.885,5.885,0,0,0,6.218,5.274,5.5,5.5,0,0,0,5.538-5.65A5.885,5.885,0,0,0,2114.192,1394.3Z" transform="translate(-2108.623 -1394.296)" fill="#97a6b7" />
                    </g>
                  </g>
                </g>
                <path id="Path_273" data-name="Path 273" d="M1327.066,733.293v12.018l-262.5-13.916v-8.773a7.506,7.506,0,0,1,8-7.51l6.832-.006,18.58.967L1320.523,727.6a6.032,6.032,0,0,1,1.634.315A7.3,7.3,0,0,1,1327.066,733.293Z" transform="translate(-1064.568 -715.102)" fill="#97a6b7" />
                <g id="Group_220" data-name="Group 220" transform="translate(222.349 15.139)">
                  <circle id="Ellipse_13" data-name="Ellipse 13" cx="3.757" cy="3.757" r="3.757" transform="translate(0 2.875) rotate(-22.5)" fill="#97a6b7" />
                  <circle id="Ellipse_14" data-name="Ellipse 14" cx="3.757" cy="3.757" r="3.757" transform="translate(13.015 1.745)" fill="#97a6b7" />
                  <circle id="Ellipse_15" data-name="Ellipse 15" cx="3.757" cy="3.757" r="3.757" transform="translate(24.285 2.338)" fill="#97a6b7" />
                </g>
              </g>
              <path id="Path_274" data-name="Path 274" d="M1097.964,716.073l-.024.32-1.477,16.328-24.9-1.432-6.994,1.13v-9.8a7.506,7.506,0,0,1,8-7.51l6.832-.006Z" transform="translate(-1064.568 -715.102)" opacity="0.4" fill="url(#linear-gradient-3)" />
              <g id="Group_248" data-name="Group 248" transform="translate(6.798 0)">
                <path id="Path_275" data-name="Path 275" d="M1365.847,773.7l5.88,9.568v313.353a7.479,7.479,0,0,1-6.817,7.681l-248.1,11.608a7.63,7.63,0,0,1-8.107-7.539V769.243l4.082-6.612c0-4.366,1.417-2.109,5.818-1.889l245.816,9.79C1367.6,770.692,1365.847,773,1365.847,773.7Z" transform="translate(-1108.706 -753.054)" fill="#fff" />
                <g id="Group_246" data-name="Group 246" transform="translate(25.622 37.198)">
                  <g id="Group_230" data-name="Group 230" transform="translate(1.259 208.992)">
                    <g id="Group_222" data-name="Group 222" transform="translate(0 0.936)">
                      <path id="Path_276" data-name="Path 276" d="M1289.055,2363.84l-5.81.174v-44.232l5.808-.1Z" transform="translate(-1283.243 -2319.684)" fill="#d8dee8" />
                    </g>
                    <g id="Group_223" data-name="Group 223" transform="translate(11.212 14.507)">
                      <path id="Path_277" data-name="Path 277" d="M1361.821,2438.051l-5.772.173,0-30.3,5.77-.121Z" transform="translate(-1356.045 -2407.8)" fill="#d8dee8" />
                    </g>
                    <g id="Group_224" data-name="Group 224" transform="translate(22.349 6.332)">
                      <path id="Path_278" data-name="Path 278" d="M1434.1,2392.816l-5.734.172-.01-38.157,5.732-.107Z" transform="translate(-1428.354 -2354.723)" fill="#d8dee8" />
                    </g>
                    <g id="Group_225" data-name="Group 225" transform="translate(33.417 13.862)">
                      <path id="Path_279" data-name="Path 279" d="M1505.925,2433.844l-5.7.17-.011-30.285,5.7-.12Z" transform="translate(-1500.217 -2403.61)" fill="#d8dee8" />
                    </g>
                    <g id="Group_226" data-name="Group 226" transform="translate(44.414 21.881)">
                      <path id="Path_280" data-name="Path 280" d="M1577.3,2477.567l-5.66.169-.011-21.923,5.659-.133Z" transform="translate(-1571.625 -2455.681)" fill="#d8dee8" />
                    </g>
                    <g id="Group_227" data-name="Group 227" transform="translate(55.325)">
                      <path id="Path_281" data-name="Path 281" d="M1648.116,2357.048l-5.624.168-.026-43.514,5.621-.1Z" transform="translate(-1642.466 -2313.607)" fill="#d8dee8" />
                    </g>
                    <g id="Group_228" data-name="Group 228" transform="translate(66.197 30.105)">
                      <path id="Path_282" data-name="Path 282" d="M1718.653,2522.09l-5.587.167-.009-13.034,5.587-.145Z" transform="translate(-1713.057 -2509.078)" fill="#d8dee8" />
                    </g>
                    <g id="Group_229" data-name="Group 229" transform="translate(76.962 8.157)">
                      <path id="Path_283" data-name="Path 283" d="M1788.539,2401.206l-5.551.167-.029-34.7,5.549-.109Z" transform="translate(-1782.959 -2366.567)" fill="#d8dee8" />
                    </g>
                  </g>
                  <g id="Group_231" data-name="Group 231" transform="translate(1.258 180.757)">
                    <path id="Path_284" data-name="Path 284" d="M1500.925,2141.054l-217.685,2.686v-11.505l217.66-1.952Z" transform="translate(-1283.241 -2130.283)" fill="#d8dee8" />
                  </g>
                  <g id="Group_232" data-name="Group 232" transform="translate(1.26 266.522)">
                    <path id="Path_285" data-name="Path 285" d="M1501.131,2697.941l-217.88,8.542v-11.527l217.856-7.8Z" transform="translate(-1283.251 -2687.151)" fill="#d8dee8" />
                  </g>
                  <g id="Group_233" data-name="Group 233" transform="translate(1.255)">
                    <path id="Path_286" data-name="Path 286" d="M1388.459,973.395l-105.238-4.309V956.628l105.225,4.693Z" transform="translate(-1283.22 -956.628)" fill="#d8dee8" />
                  </g>
                  <g id="Group_234" data-name="Group 234" transform="translate(104.202 206.518)">
                    <path id="Path_287" data-name="Path 287" d="M2066.446,2305.507l-114.785,2.242-.009-8.251,114.775-1.955Z" transform="translate(-1951.652 -2297.542)" fill="#d8dee8" />
                  </g>
                  <g id="Group_235" data-name="Group 235" transform="translate(104.222 223.855)">
                    <path id="Path_288" data-name="Path 288" d="M2066.593,2417.612l-114.8,2.848-.008-7.769,114.8-2.579Z" transform="translate(-1951.78 -2410.113)" fill="#d8dee8" />
                  </g>
                  <g id="Group_236" data-name="Group 236" transform="translate(104.241 240.73)">
                    <path id="Path_289" data-name="Path 289" d="M2066.737,2527.652l-114.824,3.472-.009-8.258,114.816-3.186Z" transform="translate(-1951.904 -2519.681)" fill="#d8dee8" />
                  </g>
                  <g id="Group_237" data-name="Group 237" transform="translate(0 36.271)">
                    <path id="Path_290" data-name="Path 290" d="M1494.3,1314.745l-219.225.464V1192.137l3.088.111-.091,119.779,216.174-.254Z" transform="translate(-1275.071 -1192.137)" fill="#d8dee8" />
                  </g>
                  <g id="Group_238" data-name="Group 238" transform="translate(11.672 50.177)">
                    <path id="Path_291" data-name="Path 291" d="M1352.444,1380.941a1.638,1.638,0,0,1-1.106-.424,1.433,1.433,0,0,1-.033-2.113l51.95-50.214a1.587,1.587,0,0,1,2-.138l26.474,18.513,47.844-42.515a1.491,1.491,0,0,1,1.86-.071l25.754,18.693,37.994-39.823a1.433,1.433,0,0,1,2.075,1.974l-38.809,40.73a1.455,1.455,0,0,1-1.9.155L1480.7,1306.98l-47.81,42.543a1.556,1.556,0,0,1-1.914.1l-26.435-18.457-50.96,49.323A1.632,1.632,0,0,1,1352.444,1380.941Z" transform="translate(-1350.856 -1282.429)" fill="#d8dee8" />
                  </g>
                  <g id="Group_245" data-name="Group 245" transform="translate(6.711 46.23)">
                    <g id="Group_239" data-name="Group 239" transform="translate(52.287 45.155)">
                      <path id="Path_292" data-name="Path 292" d="M1663.983,1550a5.745,5.745,0,0,0-5.828,5.828,6.063,6.063,0,0,0,6.508,5.353,5.744,5.744,0,0,0,5.805-5.826A6.061,6.061,0,0,0,1663.983,1550Z" transform="translate(-1658.145 -1549.992)" fill="#97a6b7" />
                    </g>
                    <g id="Group_240" data-name="Group 240" transform="translate(0 95.477)">
                      <path id="Path_293" data-name="Path 293" d="M1324.676,1876.738c-3.513.179-6.21,2.872-6.018,6.014s3.2,5.533,6.713,5.342,6.186-2.882,5.994-6.012S1328.181,1876.559,1324.676,1876.738Z" transform="translate(-1318.648 -1876.729)" fill="#97a6b7" />
                    </g>
                    <g id="Group_241" data-name="Group 241" transform="translate(79.885 64.413)">
                      <path id="Path_294" data-name="Path 294" d="M1843.079,1675.039a5.715,5.715,0,0,0-5.732,5.815,5.94,5.94,0,0,0,6.4,5.274,5.713,5.713,0,0,0,5.71-5.813A5.939,5.939,0,0,0,1843.079,1675.039Z" transform="translate(-1837.337 -1675.033)" fill="#97a6b7" />
                    </g>
                    <g id="Group_242" data-name="Group 242" transform="translate(155.684 39.741)">
                      <path id="Path_295" data-name="Path 295" d="M2334.98,1514.843a5.468,5.468,0,0,0-5.468,5.638,5.768,5.768,0,0,0,6.118,5.2,5.469,5.469,0,0,0,5.448-5.637A5.768,5.768,0,0,0,2334.98,1514.843Z" transform="translate(-2329.503 -1514.839)" fill="#97a6b7" />
                    </g>
                    <g id="Group_243" data-name="Group 243" transform="translate(194.661)">
                      <path id="Path_296" data-name="Path 296" d="M2593.872,1262.007a5.737,5.737,0,0,0-5.952-5.206,5.289,5.289,0,0,0-5.333,5.5,5.737,5.737,0,0,0,5.972,5.205A5.289,5.289,0,0,0,2593.872,1262.007Z" transform="translate(-2582.578 -1256.798)" fill="#97a6b7" />
                    </g>
                    <g id="Group_244" data-name="Group 244" transform="translate(128.784 21.176)">
                      <path id="Path_297" data-name="Path 297" d="M2160.408,1394.3a5.5,5.5,0,0,0-5.559,5.651,5.885,5.885,0,0,0,6.218,5.274,5.5,5.5,0,0,0,5.538-5.65A5.884,5.884,0,0,0,2160.408,1394.3Z" transform="translate(-2154.84 -1394.296)" fill="#97a6b7" />
                    </g>
                  </g>
                </g>
                <path id="Path_298" data-name="Path 298" d="M1371.726,733.293v12.018L1108.706,731.4v-8.773a7.642,7.642,0,0,1,8.159-7.51L1364.949,727.6A7.841,7.841,0,0,1,1371.726,733.293Z" transform="translate(-1108.706 -715.102)" fill="url(#linear-gradient-4)" />
                <g id="Group_247" data-name="Group 247" transform="translate(222.669 15.139)">
                  <circle id="Ellipse_16" data-name="Ellipse 16" cx="3.757" cy="3.757" r="3.757" transform="translate(0 2.875) rotate(-22.5)" fill="#fff" />
                  <circle id="Ellipse_17" data-name="Ellipse 17" cx="3.757" cy="3.757" r="3.757" transform="translate(13.015 1.745)" fill="#fff" />
                  <circle id="Ellipse_18" data-name="Ellipse 18" cx="3.757" cy="3.757" r="3.757" transform="translate(24.285 2.338)" fill="#fff" />
                </g>
              </g>
            </g>
            <g id="Group_256" data-name="Group 256" transform="translate(2367.196 1866.892)">
              <path id="Path_299" data-name="Path 299" d="M1196.265,1902.631c4.018-4.29-7.106-20.407-13.059-27.469-5.2-6.17-10.547-12.511-17.112-11.708-5.764.7-11.372,6.783-11.708,12.609C1153.482,1891.734,1190.553,1908.73,1196.265,1902.631Z" transform="translate(-1093.202 -1841.368)" fill="url(#linear-gradient-5)" />
              <path id="Path_300" data-name="Path 300" d="M1107.507,3192.4c-.756.615-.9,2.15-.986,3.153a2.48,2.48,0,0,0-.011.831c.365,1.155,2.606,1.276,6.118,1.636,5.551.567,7.2,1,7.638.177.407-.774-.578-2.042-.689-2.181a5.087,5.087,0,0,0-2.744-1.49c-2.619-.862-4.389-1.334-4.924-1.477C1108.562,3192.158,1108,3192,1107.507,3192.4Z" transform="translate(-1052.688 -2965.522)" fill="url(#linear-gradient-6)" />
              <path id="Path_301" data-name="Path 301" d="M1110.4,3160.626l.556,6.326a3.436,3.436,0,0,1-3.531.436l-1.427-6.218Z" transform="translate(-1052.275 -2938.817)" fill="url(#linear-gradient-7)" />
              <path id="Path_302" data-name="Path 302" d="M1394.528,3183.168a3.124,3.124,0,0,0-.325,3.752c.775.893,1.94.223,5.244.322,3.54.106,4.464.942,6.869.278.972-.269,2.688-.92,2.655-1.614-.023-.489-.9-.74-3.815-1.718-4.142-1.387-4.124-1.463-5-1.609C1397.944,3182.214,1395.725,3181.846,1394.528,3183.168Z" transform="translate(-1295.685 -2957.101)" fill="url(#linear-gradient-8)" />
              <path id="Path_303" data-name="Path 303" d="M1389.831,3150.791l1.775,5.906a3.437,3.437,0,0,1-3.488.7l-2.637-5.732Z" transform="translate(-1288.72 -2930.497)" fill="url(#linear-gradient-9)" />
              <path id="Path_304" data-name="Path 304" d="M1138.422,2311.008a553.2,553.2,0,0,0,17.48,131.056l-6.8,1.828c-5.747-5.359-13-13.793-16.494-25.713-2.171-7.4-1.447-11.2-2.824-20.3-2.193-14.489-6.634-22.08-11.224-33.763a192.253,192.253,0,0,1-11.615-46.5Z" transform="translate(-1053.085 -2220.052)" fill="url(#linear-gradient-10)" />
              <path id="Path_305" data-name="Path 305" d="M988.632,2298.213q-2.079,37.863-3.391,77.12-.973,29.454-1.441,58.153l-6.941.857a80.834,80.834,0,0,1-7.239-18.683c-2.471-9.907-1.9-15.79-2.982-26.057-1.216-11.516-2.981-14.024-6.109-28.551-6.349-29.481-9.524-44.222-2.441-53.392C960.385,2304.685,967.593,2297.218,988.632,2298.213Z" transform="translate(-923.741 -2209.15)" fill="url(#linear-gradient-11)" />
              <path id="Path_306" data-name="Path 306" d="M880.721,1862.646a107.754,107.754,0,0,1,23.085-3.855c13.871-.784,20.807-1.176,25.721,2.127,11.351,7.629,2.563,25.238,7.21,68.887.663,6.234.812,12.511,1.293,18.762.8,10.349.977,10.911.257,11.959-4.515,6.576-21.362-3.343-46.054.578-13.816,2.194-20.082,7.248-23.867,3.6-4.414-4.251-.628-15.686,2.632-25.529,3.741-11.3,6.052-11.444,8.176-19.953,2.22-8.894.877-13.473.531-27.5A248.436,248.436,0,0,1,880.721,1862.646Z" transform="translate(-849.551 -1837.022)" fill="url(#linear-gradient-12)" />
              <g id="Group_250" data-name="Group 250" transform="translate(16.811 41.536)" opacity="0.3" style={{mixBlendMode: 'multiply', isolation: 'isolate'}}>
                <path id="Path_307" data-name="Path 307" d="M914.3,2056.153c-6.454-.5-10.641,3.143-16.212.3-7.639-3.9-10.094-16.031-9.606-24.617.739-13.046,8.189-16.484,6.9-24.917-.694-4.56-3.95-10.615-15.641-16.8-.156,5.206-.126,9.644-.039,13.169.346,14.025,1.688,18.6-.531,27.5-2.123,8.509-4.435,8.654-8.176,19.953-3.259,9.843-7.046,21.278-2.632,25.529,3.785,3.645,10.051-1.409,23.867-3.6,21.276-3.378,36.719,3.51,43.475,1.276C927.544,2060.448,920.139,2056.61,914.3,2056.153Z" transform="translate(-866.362 -1990.118)" fill="url(#linear-gradient-13)" />
              </g>
              <path id="Path_308" data-name="Path 308" d="M797.183,1884.207c-4.609-3.787-13.877.5-16.355,1.646-13.815,6.39-26.22,23.611-23.146,41.81.461,2.729,2.6,15.5,13.408,21.681,9.754,5.582,22.924,4.146,33.477-3.759l4.327-3.839,4.256-4.6a34.164,34.164,0,0,0-11.342-6.249c-7.016-2.264-12.125,1.8-15.38-1.29-2.247-2.132-2.252-5.9-1.7-8.178,1.118-4.6,5.172-5.892,8.556-9.156C801.237,1904.6,802.7,1888.741,797.183,1884.207Z" transform="translate(-757.21 -1857.687)" fill="url(#linear-gradient-14)" />
              <g id="Group_251" data-name="Group 251" transform="translate(42.251 84.94)">
                <path id="Path_309" data-name="Path 309" d="M1107.481,2273.3l-61.781-.923,16.428,7.929,45.51-2.979Z" transform="translate(-1043.52 -2272.315)" fill="url(#linear-gradient-15)" />
                <path id="Path_310" data-name="Path 310" d="M1031.544,2273.653h0a2.75,2.75,0,0,0,1.81,2.584l19.741,7.739.09-5.365-19.46-6.6A1.708,1.708,0,0,0,1031.544,2273.653Z" transform="translate(-1031.544 -2271.944)" fill="url(#linear-gradient-16)" />
              </g>
              <path id="Path_311" data-name="Path 311" d="M1093.078,2237.062c-.379-.085,1.847-4.521,3.6-4.009s10.3,5.466,11.073,7.506l.777,2.04a19.124,19.124,0,0,1-6.041-.486C1100.169,2241.335,1096.161,2237.749,1093.078,2237.062Z" transform="translate(-1041.314 -2154.067)" fill="url(#linear-gradient-17)" />
              <g id="Group_253" data-name="Group 253" transform="translate(61.168 50.085)">
                <g id="Group_252" data-name="Group 252">
                  <path id="Path_312" data-name="Path 312" d="M1158.733,2049.5l-4.355,39.651c-.15,1.368,1.765,3.406,3.14,3.341l63.885-3.922a2.24,2.24,0,0,0,2.1-1.858l8.018-38.3c.239-1.394-2.266-2.833-3.679-2.793l-66.947,1.882A2.24,2.24,0,0,0,1158.733,2049.5Z" transform="translate(-1154.37 -2045.626)" fill="url(#linear-gradient-18)" />
                  <path id="Path_313" data-name="Path 313" d="M1168.184,2057.011l-4.355,39.65a2.24,2.24,0,0,0,2.332,2.482l64.692-3.062a2.24,2.24,0,0,0,2.1-1.858l6.609-38.471a2.24,2.24,0,0,0-2.27-2.618l-66.947,1.882A2.24,2.24,0,0,0,1168.184,2057.011Z" transform="translate(-1162.361 -2051.977)" fill="url(#linear-gradient-19)" />
                </g>
                <path id="Path_314" data-name="Path 314" d="M1206.171,2096.386c-5.649-2.394-3.655-6.96-10.325-12.648-8.8-7.505-17.769-4.25-20.909-10.067-.978-1.812-1.445-4.631.259-9.194l-4.848.136a2.239,2.239,0,0,0-2.163,1.994l-4.355,39.651a2.241,2.241,0,0,0,2.332,2.482l64.693-3.063a2.24,2.24,0,0,0,2.1-1.858l.912-5.308a24.432,24.432,0,0,0-7.045-2.641C1217.331,2093.945,1212.674,2099.143,1206.171,2096.386Z" transform="translate(-1162.361 -2061.574)" opacity="0.3" fill="url(#linear-gradient-20)" style={{mixBlendMode: 'multiply', isolation: 'isolate'}} />
              </g>
              <path id="Path_315" data-name="Path 315" d="M1568.307,2292.17a.5.5,0,0,0-.454-.666c-1.367-.07-4.538-.1-6.289.974-2.274,1.393-5.214,3.935-2.738,5.218l2.312,1.2a.494.494,0,0,0,.338.046c.822-.18,4.28-.948,4.658-1.138C1566.479,2297.628,1567.8,2293.715,1568.307,2292.17Z" transform="translate(-1434.571 -2203.527)" fill="url(#linear-gradient-21)" />
              <g id="Group_255" data-name="Group 255" transform="translate(42.537 0)">
                <path id="Path_316" data-name="Path 316" d="M1046.15,1767.12a45.389,45.389,0,0,1-.811,9.077c-.47,2.418-.808,3.043-1.24,3.55-.65.763-1.636,1.4-7.2,2.784-3.03.751-3.42.731-3.487,1.031-.326,1.467,7.936,6.466,16.471,5.261,5.224-.737,9.977-3.718,9.685-5.283s-5.512-.73-7.067-3.579c-1.082-1.982.131-4.8,1.564-7.127C1052.674,1770.232,1047.539,1769.721,1046.15,1767.12Z" transform="translate(-1033.399 -1759.929)" fill="url(#linear-gradient-22)" />
                <g id="Group_254" data-name="Group 254" transform="translate(7.23)">
                  <path id="Path_317" data-name="Path 317" d="M1094.395,1727.041a5.5,5.5,0,0,0-2.175-5.921,5.987,5.987,0,0,0-4.688-.394c-3.28.731-6.8,3.43-7.178,6.813-.223,2.005,2.793,4.963,3.294,5.509.567.617,1.224.668,1.942,1.034,1,.508,2.561,1.322,5.134,2.7a13.74,13.74,0,0,1-.027-2.389,12.146,12.146,0,0,1,.624-3.035C1092.268,1728.782,1093.8,1728.891,1094.395,1727.041Z" transform="translate(-1080.342 -1720.427)" fill="url(#linear-gradient-23)" />
                  <path id="Path_318" data-name="Path 318" d="M1108.32,1766.181a7.46,7.46,0,0,0,7.289.979c3.612-1.524,1.275-10-1.7-10.939a4.938,4.938,0,0,0-3.811.8c-.684.476-.831.879-1.963,1.634-1.044.7-1.413.682-1.658,1.094-.306.515-.313,1.52,1.252,3.691a2.128,2.128,0,0,0-2.4.042,1.337,1.337,0,0,0-.326.65C1104.823,1765.255,1106.107,1766.164,1108.32,1766.181Z" transform="translate(-1101.196 -1750.606)" fill="url(#linear-gradient-24)" />
                  <path id="Path_319" data-name="Path 319" d="M1102.824,1776.9c.224.071-.089.925.2,1.881a4.789,4.789,0,0,0,5.117,2.936c1.154-.278,1.227-1.056,3-1.891a8.943,8.943,0,0,1,2.743-.779,4.7,4.7,0,0,1,.407,5.382c-1.1,1.5-3.147,1.533-4.005,1.548a5.6,5.6,0,0,1-3.8-1.171c-1.447-1.265-.9-2.522-2.3-3.231a9.087,9.087,0,0,1-2.5-1.164,5.444,5.444,0,0,1-.619-.572C1101.674,1778.5,1102.5,1776.8,1102.824,1776.9Z" transform="translate(-1097.879 -1768.198)" fill="url(#linear-gradient-25)" />
                  <path id="Path_320" data-name="Path 320" d="M1165.19,1798.2a4.76,4.76,0,0,1-2.06,1.1c-.068.02-.135.065-.132.1a1.794,1.794,0,0,0,1.838-.091c.522-.364.782-1.068.656-1.181C1165.439,1798.082,1165.311,1798.135,1165.19,1798.2Z" transform="translate(-1150.268 -1786.147)" fill="url(#linear-gradient-26)" />
                </g>
              </g>
            </g>
            <g id="Group_258" data-name="Group 258" transform="translate(2656.006 1861.466)">
              <path id="Path_321" data-name="Path 321" d="M2689.1,1724.531c0,15.326-11.984,27.383-27.3,26.912-15.94-.49-29.347-14.257-29.347-30.732s13.407-28.434,29.347-26.775C2677.117,1695.532,2689.1,1709.2,2689.1,1724.531Z" transform="translate(-2632.452 -1692.461)" fill="url(#linear-gradient-27)" />
              <path id="Path_322" data-name="Path 322" d="M2715.975,1715.95c0,15.326-11.984,27.383-27.3,26.912-15.941-.49-29.347-14.257-29.347-30.731s13.406-28.434,29.347-26.775C2703.991,1686.951,2715.975,1700.623,2715.975,1715.95Z" transform="translate(-2655.188 -1685.202)" fill="url(#linear-gradient-28)" />
              <path id="Path_323" data-name="Path 323" d="M2722.379,1723.128c0,14.652-11.467,26.157-26.1,25.684-15.2-.492-27.963-13.631-27.963-29.328s12.763-27.115,27.963-25.558C2710.913,1695.425,2722.379,1708.477,2722.379,1723.128Z" transform="translate(-2662.793 -1692.462)" fill="url(#linear-gradient-29)" />
              <path id="Path_324" data-name="Path 324" d="M2726.934,1728.253c0,14.168-11.1,25.281-25.238,24.806-14.673-.493-26.977-13.182-26.977-28.326s12.3-26.175,26.977-24.689C2715.838,1701.476,2726.934,1714.085,2726.934,1728.253Z" transform="translate(-2668.209 -1697.644)" fill="url(#linear-gradient-30)" />
              <g id="Group_257" data-name="Group 257" transform="translate(20.395 7.213)">
                <path id="Path_325" data-name="Path 325" d="M2777.825,1732.043h0a1.542,1.542,0,0,1,1.362,1.513v2.609a38.378,38.378,0,0,1,4.521.784q1.669.392,3.316.934a1.525,1.525,0,0,1,1.039,1.565l-.321,3.271a1.226,1.226,0,0,1-1.75,1.017,18.954,18.954,0,0,0-2.224-.828,20.162,20.162,0,0,0-4.2-.784l-.385-.032v7.471c3.926,1.1,6.809,2.576,8.673,4.435a9.375,9.375,0,0,1,2.778,6.922,9.114,9.114,0,0,1-3.073,7.2q-3.093,2.725-8.691,3.06v2.879a1.309,1.309,0,0,1-1.363,1.33h-.024a1.447,1.447,0,0,1-1.368-1.444v-2.84l-.607-.027a39.858,39.858,0,0,1-5.035-.537,32.751,32.751,0,0,1-3.479-.8,1.5,1.5,0,0,1-1.092-1.55l.377-4.205a1.33,1.33,0,0,1,1.859-1.1,27.229,27.229,0,0,0,3.06,1,26.843,26.843,0,0,0,4.893.818l.024-8.31q-5.652-1.4-8.443-4.143a9.487,9.487,0,0,1-2.8-7.051,8.242,8.242,0,0,1,3.032-6.848q3.013-2.393,8.548-2.387V1733.3A1.231,1.231,0,0,1,2777.825,1732.043Zm-1.366,9.972a4.6,4.6,0,0,0-2.723.96,2.8,2.8,0,0,0-.977,2.242,3.01,3.01,0,0,0,.9,2.229,6.4,6.4,0,0,0,2.8,1.427Zm2.415,15.048v7.621a4.216,4.216,0,0,0,2.915-.906,3.262,3.262,0,0,0,1.015-2.565,3.5,3.5,0,0,0-.943-2.508A6.921,6.921,0,0,0,2778.874,1757.063Z" transform="translate(-2764.879 -1732.037)" fill="url(#linear-gradient-31)" />
              </g>
              <path id="Path_326" data-name="Path 326" d="M2697.129,1732.483c.853-8.422,8.593-11.987,7.583-19.734-.623-4.775-4.241-8.8-8.279-11.941-12.245,1.284-21.714,11.424-21.714,24.685,0,15.144,12.3,27.834,26.977,28.326a25.474,25.474,0,0,0,4.169-.2C2700.038,1747.817,2696.4,1739.718,2697.129,1732.483Z" transform="translate(-2668.209 -1698.404)" opacity="0.3" fill="url(#linear-gradient-32)" style={{mixBlendMode: 'multiply', isolation: 'isolate'}} />
            </g>
            <g id="Group_260" data-name="Group 260" transform="translate(2602.694 1804.377)">
              <path id="Path_327" data-name="Path 327" d="M2347.932,1357.312c0,16.675-13.039,29.792-29.7,29.28-17.343-.533-31.929-15.511-31.929-33.436s14.586-30.936,31.929-29.13C2334.893,1325.762,2347.932,1340.637,2347.932,1357.312Z" transform="translate(-2286.298 -1322.422)" fill="url(#linear-gradient-27)" />
              <path id="Path_328" data-name="Path 328" d="M2377.171,1347.977c0,16.675-13.039,29.792-29.7,29.28-17.343-.532-31.93-15.511-31.93-33.436s14.586-30.936,31.93-29.13C2364.132,1316.427,2377.171,1331.3,2377.171,1347.977Z" transform="translate(-2311.034 -1314.524)" fill="url(#linear-gradient-28)" />
              <path id="Path_329" data-name="Path 329" d="M2384.137,1355.786c0,15.94-12.476,28.459-28.4,27.943-16.538-.536-30.423-14.83-30.423-31.909s13.885-29.5,30.423-27.807C2371.661,1325.645,2384.137,1339.845,2384.137,1355.786Z" transform="translate(-2319.308 -1322.422)" fill="url(#linear-gradient-29)" />
              <path id="Path_330" data-name="Path 330" d="M2389.094,1361.362c0,15.415-12.072,27.506-27.459,26.989-15.963-.536-29.35-14.342-29.35-30.819s13.387-28.478,29.35-26.862C2377.022,1332.229,2389.094,1345.947,2389.094,1361.362Z" transform="translate(-2325.202 -1328.061)" fill="url(#linear-gradient-30)" />
              <g id="Group_259" data-name="Group 259" transform="translate(22.19 7.848)">
                <path id="Path_331" data-name="Path 331" d="M2444.462,1365.485h0a1.678,1.678,0,0,1,1.482,1.647v2.838a41.747,41.747,0,0,1,4.919.853q1.816.427,3.607,1.016a1.66,1.66,0,0,1,1.131,1.7l-.349,3.559a1.334,1.334,0,0,1-1.9,1.107,20.546,20.546,0,0,0-2.42-.9,21.929,21.929,0,0,0-4.565-.853l-.418-.034v8.128c4.271,1.195,7.408,2.8,9.436,4.825a10.2,10.2,0,0,1,3.022,7.532,9.915,9.915,0,0,1-3.343,7.83q-3.365,2.965-9.456,3.329v3.133a1.425,1.425,0,0,1-1.483,1.447h-.026a1.575,1.575,0,0,1-1.488-1.571v-3.09l-.66-.03a43.456,43.456,0,0,1-5.478-.584,35.66,35.66,0,0,1-3.786-.871,1.631,1.631,0,0,1-1.188-1.687l.41-4.575a1.447,1.447,0,0,1,2.022-1.194,29.647,29.647,0,0,0,3.33,1.093,29.153,29.153,0,0,0,5.323.889l.026-9.041q-6.151-1.522-9.187-4.508a10.322,10.322,0,0,1-3.043-7.671,8.966,8.966,0,0,1,3.3-7.45q3.278-2.6,9.3-2.6v-2.9A1.34,1.34,0,0,1,2444.462,1365.485Zm-1.487,10.85a5.006,5.006,0,0,0-2.963,1.044,3.046,3.046,0,0,0-1.063,2.44,3.275,3.275,0,0,0,.983,2.425,6.962,6.962,0,0,0,3.042,1.552Zm2.628,16.372V1401a4.589,4.589,0,0,0,3.171-.986,3.55,3.55,0,0,0,1.1-2.791,3.813,3.813,0,0,0-1.026-2.729A7.527,7.527,0,0,0,2445.6,1392.707Z" transform="translate(-2430.377 -1365.479)" fill="url(#linear-gradient-31)" />
              </g>
              <path id="Path_332" data-name="Path 332" d="M2356.666,1365.965c.928-9.163,9.349-13.042,8.25-21.471-.677-5.195-4.615-9.573-9.007-12.991-13.323,1.4-23.624,12.428-23.624,26.857,0,16.477,13.387,30.283,29.35,30.819a27.72,27.72,0,0,0,4.536-.222C2359.831,1382.648,2355.869,1373.837,2356.666,1365.965Z" transform="translate(-2325.202 -1328.888)" opacity="0.3" fill="url(#linear-gradient-32)" style={{mixBlendMode: 'multiply', isolation: 'isolate'}} />
            </g>
            <g id="Group_262" data-name="Group 262" transform="translate(2651.498 1744.603)">
              <path id="Path_333" data-name="Path 333" d="M2672.375,974.445c0,18.721-14.638,33.447-33.349,32.873-19.471-.6-35.847-17.414-35.847-37.538s16.376-34.732,35.847-32.7C2657.736,939.024,2672.375,955.724,2672.375,974.445Z" transform="translate(-2603.179 -935.273)" fill="url(#linear-gradient-27)" />
              <path id="Path_334" data-name="Path 334" d="M2705.2,963.964c0,18.721-14.638,33.448-33.348,32.873-19.471-.6-35.847-17.414-35.847-37.538s16.376-34.732,35.847-32.7C2690.562,928.543,2705.2,945.243,2705.2,963.964Z" transform="translate(-2630.949 -926.407)" fill="url(#linear-gradient-28)" />
              <path id="Path_335" data-name="Path 335" d="M2713.022,972.732c0,17.9-14.006,31.951-31.879,31.372-18.567-.6-34.156-16.65-34.156-35.824s15.589-33.121,34.156-31.219C2699.016,938.893,2713.022,954.835,2713.022,972.732Z" transform="translate(-2640.24 -935.273)" fill="url(#linear-gradient-29)" />
              <path id="Path_336" data-name="Path 336" d="M2718.587,978.992c0,17.306-13.553,30.88-30.828,30.3-17.922-.6-32.951-16.1-32.951-34.6s15.029-31.972,32.951-30.157C2705.035,946.285,2718.587,961.686,2718.587,978.992Z" transform="translate(-2646.856 -941.605)" fill="url(#linear-gradient-30)" />
              <g id="Group_261" data-name="Group 261" transform="translate(24.912 8.811)">
                <path id="Path_337" data-name="Path 337" d="M2780.749,983.621h0a1.884,1.884,0,0,1,1.663,1.849v3.186a46.922,46.922,0,0,1,5.522.958q2.038.479,4.05,1.141a1.863,1.863,0,0,1,1.269,1.912l-.391,4a1.5,1.5,0,0,1-2.138,1.243,23.052,23.052,0,0,0-2.717-1.012,24.64,24.64,0,0,0-5.125-.958l-.47-.039v9.125q7.193,2.013,10.593,5.417a11.452,11.452,0,0,1,3.393,8.456,11.131,11.131,0,0,1-3.753,8.79q-3.777,3.329-10.616,3.738v3.517a1.6,1.6,0,0,1-1.665,1.625h-.029a1.768,1.768,0,0,1-1.67-1.763v-3.469l-.741-.033a48.7,48.7,0,0,1-6.15-.656,40,40,0,0,1-4.25-.978,1.831,1.831,0,0,1-1.333-1.894l.46-5.136a1.623,1.623,0,0,1,2.27-1.34,33.407,33.407,0,0,0,3.739,1.227,32.741,32.741,0,0,0,5.976,1l.03-10.151q-6.905-1.709-10.314-5.061a11.588,11.588,0,0,1-3.416-8.612,10.067,10.067,0,0,1,3.7-8.364q3.68-2.923,10.441-2.916v-3.258A1.5,1.5,0,0,1,2780.749,983.621ZM2779.08,995.8a5.624,5.624,0,0,0-3.326,1.173,3.419,3.419,0,0,0-1.193,2.739,3.678,3.678,0,0,0,1.1,2.722,7.82,7.82,0,0,0,3.416,1.742Zm2.95,18.38v9.308a5.15,5.15,0,0,0,3.561-1.107,3.985,3.985,0,0,0,1.239-3.133,4.282,4.282,0,0,0-1.152-3.064A8.453,8.453,0,0,0,2782.03,1014.182Z" transform="translate(-2764.935 -983.613)" fill="url(#linear-gradient-31)" />
              </g>
              <path id="Path_338" data-name="Path 338" d="M2682.181,984.158c1.042-10.287,10.5-14.642,9.262-24.1-.761-5.832-5.181-10.747-10.112-14.585-14.957,1.568-26.523,13.953-26.523,30.152,0,18.5,15.029,34,32.951,34.6a31.121,31.121,0,0,0,5.092-.249C2685.734,1002.889,2681.286,993,2682.181,984.158Z" transform="translate(-2646.856 -942.532)" opacity="0.3" fill="url(#linear-gradient-32)" style={{mixBlendMode: 'multiply', isolation: 'isolate'}} />
            </g>
            <g id="Group_279" data-name="Group 279" transform="translate(2596.514 1930.494)">
              <path id="Path_339" data-name="Path 339" d="M2362.329,2145.411l-.386,130.733a12.464,12.464,0,0,1-11.626,12.31l-91.745,4.747a11.576,11.576,0,0,1-12.406-11.48V2146.379a12.32,12.32,0,0,1,11.235-12.091c.4-.04.812-.054,1.224-.056l92.1-.44A11.517,11.517,0,0,1,2362.329,2145.411Z" transform="translate(-2246.167 -2133.731)" fill="url(#linear-gradient-45)" />
              <path id="Path_340" data-name="Path 340" d="M2407.47,2145.007l-.4,130.62a12.2,12.2,0,0,1-11.337,12.284l-91.556,4.733c-6.822.353-12.66-4.828-12.66-11.456l.018-135.214a12.429,12.429,0,0,1,11.352-12.08c.4-.04.95-.054,1.362-.057l91.915-.44A11.274,11.274,0,0,1,2407.47,2145.007Z" transform="translate(-2284.532 -2133.397)" fill="url(#linear-gradient-46)" />
              <g id="Group_263" data-name="Group 263" transform="translate(6.997 0)" opacity="0.3" style={{mixBlendMode: 'multiply', isolation: 'isolate'}}>
                <path id="Path_341" data-name="Path 341" d="M2407.545,2144.821l-.1,32.832-115.84,2.118,0-33.989a12.318,12.318,0,0,1,10.906-11.93,14.841,14.841,0,0,1,1.807-.015l91.914-.44A11.119,11.119,0,0,1,2407.545,2144.821Z" transform="translate(-2291.604 -2133.397)" fill="url(#linear-gradient-47)" />
                <path id="Path_342" data-name="Path 342" d="M2407.472,2329.528l-.042,13.642c-11.639,3.5-32.829,6.1-56.781,6.6-10.457.22-20.5.021-29.512-.528a185.157,185.157,0,0,1-29.537-3.828l0-14.123c2.865-.7,5.5-1.346,8.639-1.952a237.024,237.024,0,0,1,24.218-3.188c8.177-.7,17.1-1.141,26.366-1.266,12.005-.163,23.239.224,32.961,1.041.759.063,1.517.13,2.256.2,2.338.217,4.587.459,6.728.726.758.094,1.506.19,2.237.292,1.683.231,3.132.477,4.667.738C2402.625,2328.378,2405.243,2328.93,2407.472,2329.528Z" transform="translate(-2291.601 -2295.363)" fill="url(#linear-gradient-47)" />
              </g>
              <path id="Path_343" data-name="Path 343" d="M2443.571,2234.753a3.613,3.613,0,0,1-3.537,3.588l-95.148,1.636a3.614,3.614,0,0,1-3.74-3.573l.007-22.766a3.734,3.734,0,0,1,3.746-3.673l95.218-.794a3.482,3.482,0,0,1,3.519,3.5Z" transform="translate(-2326.518 -2197.501)" fill="#fff" />
              <path id="Path_344" data-name="Path 344" d="M2446.56,2239.274a2.283,2.283,0,0,1-2.236,2.267l-94.639,1.576a2.283,2.283,0,0,1-2.362-2.257l.008-22.668a2.358,2.358,0,0,1,2.366-2.32l94.7-.815a2.2,2.2,0,0,1,2.225,2.213Z" transform="translate(-2331.744 -2202.48)" fill="#f4f7fa" />
              <g id="Group_269" data-name="Group 269" transform="translate(99.067 15.32)">
                <g id="Group_266" data-name="Group 266" transform="translate(0 2.648)">
                  <g id="Group_264" data-name="Group 264" transform="translate(0.025)" opacity="0.3">
                    <path id="Path_345" data-name="Path 345" d="M2891.829,2256.279a1.033,1.033,0,0,1-1.107,1.008h-.051a1,1,0,0,1-1.1-.981l.011-4.518a1.086,1.086,0,0,1,1.108-1.072h.051a1.052,1.052,0,0,1,1.1,1.049Z" transform="translate(-2889.568 -2250.615)" fill="url(#linear-gradient-49)" />
                    <path id="Path_346" data-name="Path 346" d="M2950.418,2255.639a1.044,1.044,0,0,1-1.1,1.023h-.05a1.011,1.011,0,0,1-1.1-1l.013-4.519a1.093,1.093,0,0,1,1.1-1.082h.051a1.058,1.058,0,0,1,1.1,1.059Z" transform="translate(-2939.144 -2250.064)" fill="url(#linear-gradient-50)" />
                  </g>
                  <g id="Group_265" data-name="Group 265" transform="translate(0 9.425)">
                    <path id="Path_347" data-name="Path 347" d="M2891.669,2320.536a1.212,1.212,0,0,1-1.107,1.218h-.051a1.173,1.173,0,0,1-1.1-1.185l.011-4.648a1.2,1.2,0,0,1,1.108-1.207h.05a1.164,1.164,0,0,1,1.1,1.177Z" transform="translate(-2889.409 -2314.182)" opacity="0.3" fill="url(#linear-gradient-51)" />
                    <path id="Path_348" data-name="Path 348" d="M2950.244,2317.534c0,.606-.5.794-1.1,1.267h-.05a1.218,1.218,0,0,1-1.1-1.235l.012-4.868c0-.607.5-1.433,1.1-1.437h.051c.607,0,1.1.8,1.1,1.407Z" transform="translate(-2938.973 -2311.262)" opacity="0.3" fill="url(#linear-gradient-52)" />
                  </g>
                </g>
                <g id="Group_268" data-name="Group 268" transform="translate(2.263)">
                  <path id="Path_349" data-name="Path 349" d="M2913.579,2295.337a1.136,1.136,0,0,1-1.118,1.116l-4.333.062c-.61.008-.875-.476-.875-1.085v-.051c0-.608.263-1.107.873-1.115l4.459-.06a1,1,0,0,1,.994,1.081Z" transform="translate(-2906.768 -2284.759)" opacity="0.3" fill="url(#linear-gradient-53)" />
                  <g id="Group_267" data-name="Group 267">
                    <path id="Path_350" data-name="Path 350" d="M2913.579,2234.009a1.12,1.12,0,0,1-1.106,1.113l-4.339.047c-.61.006-.881-.481-.881-1.089v-.051c0-.608.275-1.1.885-1.111l4.453-.046a1,1,0,0,1,.988,1.086Z" transform="translate(-2906.768 -2232.872)" opacity="0.3" fill="url(#linear-gradient-54)" />
                    <path id="Path_351" data-name="Path 351" d="M2910.912,2359.543a1.151,1.151,0,0,1-1.131,1.119l-4.569.071a1.088,1.088,0,0,1-1.111-1.083v-.051a1.118,1.118,0,0,1,1.1-1.114l4.586-.072a1.1,1.1,0,0,1,1.123,1.079Z" transform="translate(-2904.101 -2339.078)" opacity="0.3" fill="url(#linear-gradient-55)" />
                  </g>
                </g>
              </g>
              <path id="Path_352" data-name="Path 352" d="M2357.694,2283.473a25.472,25.472,0,0,1-1.936,6.281c-.332.713-.708,1.456-1.12,2.213l-50.463,2.608c-6.822.353-12.66-4.828-12.66-11.456l.018-135.406a12.42,12.42,0,0,1,10.907-12.033c.148.043.367.09.517.137,6.412,2.01,13.429,5.771,17.634,12.815,2.633,4.406,4.2,10.1,3.849,17.484a51.045,51.045,0,0,1-.657,6.072q-.314,1.867-.631,3.812-.4,2.427-.782,4.955c-.4,2.693-.778,5.456-1.078,8.248-.286,2.676-.5,5.381-.614,8.08-.02.521-.038,1.044-.05,1.565q-.064,2.532.023,5.038.06,1.713.2,3.4a44.433,44.433,0,0,0,4.882,17.694c2.2,4.015,5.507,7.127,8.99,10.021.92.763,1.851,1.512,2.778,2.259a79.231,79.231,0,0,1,8.926,8.188c.067.073.134.147.2.22a46.467,46.467,0,0,1,3.675,4.613,34.757,34.757,0,0,1,3.2,5.7c.342.762.656,1.539.948,2.324.5,1.347.937,2.729,1.315,4.137.17.631.336,1.273.494,1.922a.474.474,0,0,1,.019.076,68.426,68.426,0,0,1,1.532,7.983A37.2,37.2,0,0,1,2357.694,2283.473Z" transform="translate(-2284.532 -2135.33)" fill="#fff" opacity="0.3" style={{mixBlendMode: 'soft-light', isolation: 'isolate'}} />
              <g id="Group_278" data-name="Group 278" transform="translate(14.592 59.627)">
                <g id="Group_273" data-name="Group 273" transform="translate(0 0.02)" style={{mixBlendMode: 'multiply', isolation: 'isolate'}}>
                  <g id="Group_270" data-name="Group 270" transform="translate(0.026)">
                    <path id="Path_353" data-name="Path 353" d="M2362.806,2541.146a2.545,2.545,0,0,1-2.495,2.5l-16.711.438a2.408,2.408,0,0,1-2.521-2.382l0-6.174a2.558,2.558,0,0,1,2.523-2.507l16.716-.383a2.394,2.394,0,0,1,2.491,2.376Z" transform="translate(-2341.079 -2530.794)" fill="url(#linear-gradient-56)" />
                    <path id="Path_354" data-name="Path 354" d="M2543.064,2536.984a2.515,2.515,0,0,1-2.456,2.477l-16.44.43a2.375,2.375,0,0,1-2.477-2.363l.006-6.124a2.528,2.528,0,0,1,2.483-2.485l16.444-.377a2.363,2.363,0,0,1,2.449,2.358Z" transform="translate(-2493.875 -2527.332)" fill="url(#linear-gradient-57)" />
                    <path id="Path_355" data-name="Path 355" d="M2714.427,2533.028a2.487,2.487,0,0,1-2.419,2.456l-16.183.424a2.346,2.346,0,0,1-2.437-2.345l.01-6.076a2.5,2.5,0,0,1,2.446-2.466l16.187-.371a2.333,2.333,0,0,1,2.409,2.339Z" transform="translate(-2639.128 -2524.04)" fill="url(#linear-gradient-58)" />
                    <path id="Path_356" data-name="Path 356" d="M2888.99,2529a2.46,2.46,0,0,1-2.382,2.437l-15.923.417a2.316,2.316,0,0,1-2.4-2.326l.015-6.027a2.472,2.472,0,0,1,2.408-2.446l15.927-.365a2.3,2.3,0,0,1,2.369,2.321Z" transform="translate(-2787.091 -2520.687)" fill="url(#linear-gradient-59)" />
                  </g>
                  <g id="Group_271" data-name="Group 271" transform="translate(0.019 19.25)">
                    <path id="Path_357" data-name="Path 357" d="M2362.752,2669.155a2.561,2.561,0,0,1-2.493,2.509l-16.7.535a2.389,2.389,0,0,1-2.519-2.364l0-6.168a2.574,2.574,0,0,1,2.521-2.519l16.708-.48a2.376,2.376,0,0,1,2.49,2.359Z" transform="translate(-2341.036 -2658.358)" fill="url(#linear-gradient-60)" />
                    <path id="Path_358" data-name="Path 358" d="M2542.921,2663.952a2.532,2.532,0,0,1-2.455,2.488l-16.432.526a2.358,2.358,0,0,1-2.477-2.346l.007-6.117a2.543,2.543,0,0,1,2.481-2.5l16.436-.473a2.344,2.344,0,0,1,2.448,2.341Z" transform="translate(-2493.755 -2654.014)" fill="url(#linear-gradient-61)" />
                    <path id="Path_359" data-name="Path 359" d="M2714.2,2659a2.5,2.5,0,0,1-2.418,2.469l-16.175.518a2.327,2.327,0,0,1-2.436-2.328l.01-6.07a2.516,2.516,0,0,1,2.445-2.478l16.179-.465a2.314,2.314,0,0,1,2.408,2.323Z" transform="translate(-2638.938 -2649.884)" fill="url(#linear-gradient-62)" />
                    <path id="Path_360" data-name="Path 360" d="M2888.68,2653.965a2.476,2.476,0,0,1-2.381,2.448l-15.916.51a2.3,2.3,0,0,1-2.4-2.31l.014-6.021a2.488,2.488,0,0,1,2.407-2.457l15.92-.458a2.284,2.284,0,0,1,2.368,2.3Z" transform="translate(-2786.831 -2645.677)" fill="url(#linear-gradient-63)" />
                  </g>
                  <g id="Group_272" data-name="Group 272" transform="translate(0.013 38.034)">
                    <path id="Path_361" data-name="Path 361" d="M2362.7,2794.062a2.578,2.578,0,0,1-2.492,2.522l-16.7.63a2.372,2.372,0,0,1-2.518-2.348l0-6.162a2.59,2.59,0,0,1,2.52-2.531l16.7-.575a2.358,2.358,0,0,1,2.489,2.343Z" transform="translate(-2340.995 -2782.83)" fill="url(#linear-gradient-64)" />
                    <path id="Path_362" data-name="Path 362" d="M2542.782,2787.844a2.548,2.548,0,0,1-2.454,2.5l-16.424.62a2.34,2.34,0,0,1-2.475-2.329l.006-6.112a2.56,2.56,0,0,1,2.481-2.509l16.428-.566a2.327,2.327,0,0,1,2.447,2.324Z" transform="translate(-2493.641 -2777.627)" fill="url(#linear-gradient-65)" />
                    <path id="Path_363" data-name="Path 363" d="M2713.979,2781.932a2.519,2.519,0,0,1-2.417,2.479l-16.167.61a2.31,2.31,0,0,1-2.435-2.312l.01-6.064a2.532,2.532,0,0,1,2.443-2.489l16.172-.557a2.3,2.3,0,0,1,2.407,2.307Z" transform="translate(-2638.754 -2772.68)" fill="url(#linear-gradient-66)" />
                    <path id="Path_364" data-name="Path 364" d="M2888.377,2775.908a2.492,2.492,0,0,1-2.38,2.46l-15.909.6a2.28,2.28,0,0,1-2.394-2.294l.014-6.015a2.5,2.5,0,0,1,2.406-2.469l15.912-.549a2.268,2.268,0,0,1,2.367,2.289Z" transform="translate(-2786.577 -2767.64)" fill="url(#linear-gradient-67)" />
                  </g>
                  <path id="Path_365" data-name="Path 365" d="M2362.65,2915.877a2.592,2.592,0,0,1-2.491,2.533l-16.687.723a2.354,2.354,0,0,1-2.517-2.332l0-6.156a2.606,2.606,0,0,1,2.519-2.542l16.692-.668a2.34,2.34,0,0,1,2.488,2.326Z" transform="translate(-2340.948 -2847.869)" fill="url(#linear-gradient-68)" />
                  <path id="Path_366" data-name="Path 366" d="M2542.646,2908.669a2.564,2.564,0,0,1-2.452,2.512l-16.416.71a2.323,2.323,0,0,1-2.474-2.314l.006-6.105a2.576,2.576,0,0,1,2.48-2.521l16.42-.657a2.31,2.31,0,0,1,2.445,2.309Z" transform="translate(-2493.522 -2841.828)" fill="url(#linear-gradient-69)" />
                  <path id="Path_367" data-name="Path 367" d="M2713.764,2901.816a2.535,2.535,0,0,1-2.416,2.491l-16.16.7a2.293,2.293,0,0,1-2.433-2.3l.01-6.058a2.547,2.547,0,0,1,2.442-2.5l16.164-.647a2.281,2.281,0,0,1,2.406,2.291Z" transform="translate(-2638.567 -2836.085)" fill="url(#linear-gradient-70)" />
                  <path id="Path_368" data-name="Path 368" d="M2362.6,3046.477a2.61,2.61,0,0,1-2.49,2.545l-16.679.821a2.336,2.336,0,0,1-2.516-2.314l0-6.15a2.624,2.624,0,0,1,2.518-2.555l16.684-.768a2.323,2.323,0,0,1,2.486,2.309Z" transform="translate(-2340.912 -2958.373)" fill="url(#linear-gradient-71)" />
                  <path id="Path_369" data-name="Path 369" d="M2542.5,3038.209a2.581,2.581,0,0,1-2.451,2.523l-16.408.808a2.306,2.306,0,0,1-2.473-2.3l.006-6.1a2.592,2.592,0,0,1,2.478-2.533l16.412-.755a2.291,2.291,0,0,1,2.444,2.292Z" transform="translate(-2493.407 -2951.436)" fill="url(#linear-gradient-72)" />
                  <path id="Path_370" data-name="Path 370" d="M2713.534,3030.348a2.553,2.553,0,0,1-2.415,2.5l-16.152.8a2.276,2.276,0,0,1-2.432-2.28l.01-6.052a2.563,2.563,0,0,1,2.441-2.512l16.156-.743a2.263,2.263,0,0,1,2.4,2.274Z" transform="translate(-2638.381 -2944.84)" fill="url(#linear-gradient-73)" />
                  <path id="Path_371" data-name="Path 371" d="M2885.4,2886.613l-15.906.637a2.8,2.8,0,0,0-2.324,2.839l-.008,3.385-.007,2.826-.031,12.76-.009,3.754-.006,2.452a2.359,2.359,0,0,0,2.31,2.478l15.895-.783a2.8,2.8,0,0,0,2.458-2.7l.007-2.437.011-3.73.037-12.681.008-2.809.01-3.364A2.629,2.629,0,0,0,2885.4,2886.613Z" transform="translate(-2786.066 -2830.255)" fill="url(#linear-gradient-74)" />
                </g>
                <g id="Group_277" data-name="Group 277" transform="translate(0.949)">
                  <g id="Group_274" data-name="Group 274" transform="translate(0.028)">
                    <path id="Path_372" data-name="Path 372" d="M2368.965,2541a2.544,2.544,0,0,1-2.494,2.5l-16.7.437a2.407,2.407,0,0,1-2.519-2.381l0-6.173a2.556,2.556,0,0,1,2.521-2.506l16.707-.383a2.393,2.393,0,0,1,2.49,2.376Z" transform="translate(-2347.25 -2530.655)" fill="url(#linear-gradient-75)" />
                    <path id="Path_373" data-name="Path 373" d="M2543.064,2536.984a2.515,2.515,0,0,1-2.456,2.477l-16.44.43a2.375,2.375,0,0,1-2.477-2.363l.006-6.124a2.528,2.528,0,0,1,2.483-2.485l16.444-.377a2.363,2.363,0,0,1,2.449,2.358Z" transform="translate(-2494.825 -2527.311)" fill="url(#linear-gradient-76)" />
                    <path id="Path_374" data-name="Path 374" d="M2720.39,2532.891a2.487,2.487,0,0,1-2.418,2.456l-16.174.423a2.344,2.344,0,0,1-2.435-2.344l.01-6.074a2.5,2.5,0,0,1,2.445-2.465l16.178-.371a2.331,2.331,0,0,1,2.408,2.338Z" transform="translate(-2645.133 -2523.906)" fill="url(#linear-gradient-77)" />
                    <path id="Path_375" data-name="Path 375" d="M2894.858,2528.862a2.458,2.458,0,0,1-2.381,2.436l-15.915.417a2.314,2.314,0,0,1-2.395-2.326l.014-6.025a2.471,2.471,0,0,1,2.407-2.445l15.919-.364a2.3,2.3,0,0,1,2.368,2.32Z" transform="translate(-2793.016 -2520.554)" fill="url(#linear-gradient-78)" />
                  </g>
                  <g id="Group_275" data-name="Group 275" transform="translate(0.021 19.245)">
                    <path id="Path_376" data-name="Path 376" d="M2368.909,2668.977a2.561,2.561,0,0,1-2.492,2.509l-16.694.534a2.388,2.388,0,0,1-2.517-2.364l0-6.166a2.573,2.573,0,0,1,2.52-2.518l16.7-.48a2.376,2.376,0,0,1,2.489,2.359Z" transform="translate(-2347.205 -2658.183)" fill="url(#linear-gradient-79)" />
                    <path id="Path_377" data-name="Path 377" d="M2542.921,2663.952a2.532,2.532,0,0,1-2.455,2.488l-16.432.526a2.358,2.358,0,0,1-2.477-2.346l.007-6.117a2.543,2.543,0,0,1,2.481-2.5l16.436-.473a2.344,2.344,0,0,1,2.448,2.341Z" transform="translate(-2494.705 -2653.988)" fill="url(#linear-gradient-80)" />
                    <path id="Path_378" data-name="Path 378" d="M2720.162,2658.833a2.5,2.5,0,0,1-2.417,2.468l-16.166.518a2.326,2.326,0,0,1-2.434-2.328l.01-6.068a2.514,2.514,0,0,1,2.443-2.477l16.171-.466a2.314,2.314,0,0,1,2.406,2.322Z" transform="translate(-2644.941 -2649.714)" fill="url(#linear-gradient-81)" />
                    <path id="Path_379" data-name="Path 379" d="M2894.545,2653.8a2.475,2.475,0,0,1-2.38,2.447l-15.907.51a2.3,2.3,0,0,1-2.394-2.309l.014-6.019a2.486,2.486,0,0,1,2.406-2.456l15.911-.458a2.284,2.284,0,0,1,2.367,2.3Z" transform="translate(-2792.752 -2645.509)" fill="url(#linear-gradient-82)" />
                  </g>
                  <g id="Group_276" data-name="Group 276" transform="translate(0.014 38.023)">
                    <path id="Path_380" data-name="Path 380" d="M2368.854,2793.85a2.577,2.577,0,0,1-2.491,2.521l-16.686.629a2.371,2.371,0,0,1-2.516-2.348l0-6.16a2.589,2.589,0,0,1,2.518-2.53l16.691-.575a2.357,2.357,0,0,1,2.488,2.342Z" transform="translate(-2347.161 -2782.622)" fill="url(#linear-gradient-83)" />
                    <path id="Path_381" data-name="Path 381" d="M2542.782,2787.844a2.548,2.548,0,0,1-2.454,2.5l-16.424.62a2.34,2.34,0,0,1-2.475-2.329l.006-6.112a2.56,2.56,0,0,1,2.481-2.509l16.428-.566a2.327,2.327,0,0,1,2.447,2.324Z" transform="translate(-2494.591 -2777.597)" fill="url(#linear-gradient-84)" />
                    <path id="Path_382" data-name="Path 382" d="M2719.938,2781.725a2.519,2.519,0,0,1-2.416,2.479l-16.158.61a2.309,2.309,0,0,1-2.433-2.312l.01-6.062a2.53,2.53,0,0,1,2.442-2.489l16.163-.557a2.3,2.3,0,0,1,2.406,2.306Z" transform="translate(-2644.754 -2772.477)" fill="url(#linear-gradient-85)" />
                    <path id="Path_383" data-name="Path 383" d="M2894.24,2775.706a2.491,2.491,0,0,1-2.379,2.458l-15.9.6a2.279,2.279,0,0,1-2.393-2.294l.014-6.013a2.5,2.5,0,0,1,2.4-2.468l15.9-.548a2.267,2.267,0,0,1,2.365,2.289Z" transform="translate(-2792.496 -2767.44)" fill="url(#linear-gradient-86)" />
                  </g>
                  <path id="Path_384" data-name="Path 384" d="M2368.8,2915.631a2.591,2.591,0,0,1-2.49,2.532l-16.678.722a2.353,2.353,0,0,1-2.515-2.331l0-6.155a2.605,2.605,0,0,1,2.517-2.542l16.683-.668a2.34,2.34,0,0,1,2.486,2.326Z" transform="translate(-2347.111 -2847.641)" fill="url(#linear-gradient-87)" />
                  <path id="Path_385" data-name="Path 385" d="M2542.646,2908.669a2.564,2.564,0,0,1-2.452,2.512l-16.416.71a2.323,2.323,0,0,1-2.474-2.314l.006-6.105a2.576,2.576,0,0,1,2.48-2.521l16.42-.657a2.31,2.31,0,0,1,2.445,2.309Z" transform="translate(-2494.47 -2841.807)" fill="url(#linear-gradient-88)" />
                  <path id="Path_386" data-name="Path 386" d="M2719.72,2901.578a2.533,2.533,0,0,1-2.415,2.49l-16.151.7a2.292,2.292,0,0,1-2.432-2.3l.01-6.056a2.547,2.547,0,0,1,2.441-2.5l16.155-.646a2.28,2.28,0,0,1,2.4,2.291Z" transform="translate(-2644.563 -2835.865)" fill="url(#linear-gradient-89)" />
                  <path id="Path_387" data-name="Path 387" d="M2368.743,3046.193a2.609,2.609,0,0,1-2.489,2.545l-16.669.821a2.335,2.335,0,0,1-2.514-2.313l0-6.148a2.622,2.622,0,0,1,2.516-2.554l16.674-.767a2.321,2.321,0,0,1,2.485,2.309Z" transform="translate(-2347.071 -2958.115)" fill="url(#linear-gradient-90)" />
                  <path id="Path_388" data-name="Path 388" d="M2542.5,3038.209a2.581,2.581,0,0,1-2.451,2.523l-16.408.808a2.306,2.306,0,0,1-2.473-2.3l.006-6.1a2.592,2.592,0,0,1,2.478-2.533l16.412-.755a2.291,2.291,0,0,1,2.444,2.292Z" transform="translate(-2494.356 -2951.415)" fill="url(#linear-gradient-91)" />
                  <path id="Path_389" data-name="Path 389" d="M2719.487,3030.074a2.551,2.551,0,0,1-2.414,2.5l-16.143.8a2.274,2.274,0,0,1-2.431-2.279l.01-6.05a2.563,2.563,0,0,1,2.44-2.512l16.148-.743a2.261,2.261,0,0,1,2.4,2.274Z" transform="translate(-2644.375 -2944.59)" fill="url(#linear-gradient-92)" />
                  <path id="Path_390" data-name="Path 390" d="M2891.288,2886.372l-15.9.636a2.83,2.83,0,0,0-2.356,2.839l-.008,3.384-.007,2.826-.031,12.757-.009,3.753-.006,2.451a2.382,2.382,0,0,0,2.341,2.475l15.885-.782a2.769,2.769,0,0,0,2.425-2.694l.008-2.436.011-3.729.037-12.677.008-2.808.01-3.363A2.6,2.6,0,0,0,2891.288,2886.372Z" transform="translate(-2791.978 -2830.03)" fill="url(#linear-gradient-93)" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="col-md-5 order-1 order-md-2">
        <h3 className="h2 fw-bold"><span className="bktext">Double-entry bookkeeping</span></h3>
        <p>Double-entry bookkeeping is more robust. It follows
          the principle that every transaction affects at least two
          accounts, and they are recorded as debits and credits.For example, if you make a sale for
          $10, your cash
          account will be debited for $10 and your sales account
          will be credited by the same amount. In the double-
          entry system, the total credits must always equal the
          total debits.
        </p>
      </div>
    </div>
  </div>
</div>
{/*------- Bookkeeping Doublr-entry section End --------*/}

    </div>
  )
}

export default Doubleentry
