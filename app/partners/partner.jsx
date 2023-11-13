"use client"
import React, { useRef, useEffect } from "react";
import './partner.css';
import Image from 'next/image';


const Partner = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      const slides = slider.querySelectorAll('.sub_companies');
      const slideWidth = slides[0].clientWidth;
      const totalSlides = slides.length;
  
      let slideIndex = 0;
      let translateX = 0;
      let slideTimer = null;
  
      // Clone the slides and append them to the end
      const clonedSlides = [...slides].map((slide) => slide.cloneNode(true));
      clonedSlides.forEach((clonedSlide) => slider.appendChild(clonedSlide));
  
      const startSlideShow = () => {
        slideTimer = setInterval(() => {
          slideIndex++;
  
          if (slideIndex >= totalSlides) {
            slideIndex = 0;
            translateX = 0;
            slider.style.transition = 'none';
          } else {
            translateX = -slideIndex * slideWidth;
            slider.style.transition = 'transform 0.5s ease-in-out';
          }
  
          slider.style.transform = `translateX(${translateX}px)`;
        }, 1500);
      };
  
      const stopSlideShow = () => {
        clearInterval(slideTimer);
      };
  
      // Attach event listeners for pausing and resuming slideshow
      slider.addEventListener('mouseover', stopSlideShow);
      slider.addEventListener('mouseout', startSlideShow);
  
      // Start the slideshow
      startSlideShow();
  
      // Clean up by stopping the slideshow on component unmount
      return () => {
        clearInterval(slideTimer);
      };
    }, []);
    return(
        <main>
            <div className="main">
                <div className="companies" ref={sliderRef}>
                    <div>
                        <Image  className="sub_companies" src="/eliteweb3.png" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_companies" src="/microsoft.png" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_companies" src="/stackos.png" width={100} height={100} />
                    </div>
                </div>
                {/* <div className="backers">
                    <div>
                        <Image  className="sub_backers" src="/advisor1.jpg" width={100} height={100} />
                    </div>
                    <div>
                        <Image  className="sub_backers" src="/advisor2.png" width={100} height={100} />
                    </div>
                </div> */}

            </div>
        </main>
    )
}
export default Partner;
//<div class="logo-list-b-l logo-list-b-l-2" style="will-change: transform; transform: translate3d(-32.218%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"><div class="logo-list-move-left-2 homepage-2-2 close-gap"><div id="w-node-bf404958-3256-2873-c8b0-40eb79912ef4-79912ef3" class="logo_wrapper-2 is--royal"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05e227e6ae419c1870a4_Frame%2013509.svg" loading="lazy" alt="Enjin logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912ef8-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05df58ad15943f0ba100_Frame%2013503.svg" loading="lazy" alt="Shopify logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912efa-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6329d92154003074a2910214_stripe-logo.svg" loading="lazy" alt="Stripe logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912efc-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05df08977745b95b8746_Frame%2013502.svg" loading="lazy" alt="Adobe logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912efe-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05e0d05b79822e016c24_Frame%2013500.svg" loading="lazy" alt="Open Sea logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f00-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/63bf03952bd8ae87fc536cb3_chainlink-logo-1-2x.webp" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f02-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05dfd05b79de8d016c23_Frame%2013504.svg" loading="lazy" alt="0x logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f04-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05dec33cc7a762c4b351_Frame%2013498.svg" loading="lazy" alt="DYDX logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f06-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05e20db716ab6e3c834b_Frame%2013585.svg" loading="lazy" alt="Rarity Sniper" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f08-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/62ef05e1b7b092287f7d1cc4_GameStop%202-1.svg" loading="lazy" alt="Collab Land logo" class="logo_logo"></div><div id="w-node-bf404958-3256-2873-c8b0-40eb79912f0a-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6398e06b2fc1016a5c4b413f_lido_black.svg" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-_6660f1a2-ac35-5135-000c-c3b3ecf44378-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6436b1e6eda9194e9e6c3d00_origin.svg" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-_40d082e8-6d61-cbe5-8085-67e0502f1b9c-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6436b1e6b9e7341a2d2142eb_fractal.svg" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-_15ceb908-3dad-5bcb-8e1e-a2d8f596413b-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6436b1e6459338e61a354fda_synapse.svg" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-_09480d8e-c31d-f0b2-7071-025c9122a44f-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6436b1e61a925ed2270f75ef_argent.svg" loading="lazy" alt="" class="logo_logo"></div><div id="w-node-c7faf1df-3b5e-63f5-623d-fa3bc1babfaf-79912ef3" class="logo_wrapper-2"><img src="https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6436b1e6b81f0d4c312c1d50_bancor.svg" loading="lazy" alt="" class="logo_logo"></div></div></div>