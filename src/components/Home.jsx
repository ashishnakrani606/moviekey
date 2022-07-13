import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Bitmap from '../assets/Images/Bitmap.png';
import BlobShape8 from '../assets/Images/Blob Shape 08.png';
import BlobShape23 from '../assets/Images/Blob Shape 23.png';
import BlobShape12 from '../assets/Images/Blob Shape 12.png';
// import BitmapMan from '../assets/Images/Bitmap-man.png';
import BitmapManVideo from '../assets/videos/roy_video.mp4';
import BlackDiscord from '../assets/Images/BlackDiscord.png';
import twitterIcon from '../assets/Images/013-twitter.png';
import checkmark from '../assets/Images/checkmark.png';
import close from '../assets/Images/close.png';
import Blob from '../assets/Images/Blob.png';
import Right from '../assets/Images/MOVIEKEY.png';
import checkboxgradiant from '../assets/Images/checkbox-gradiant.svg';
import Videosrc from '../assets/videos/moviekey.mp4';

const Home = () => {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    let progressBarHandler = () => {
        
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;

        setScroll(scroll);
    }

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });

  
  var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 7000, 
    // select video element         
    vid = document.getElementById('v0'); 


  // Use requestAnimationFrame for smooth playback
  function scrollPlay(){  
    var frameNumber  = window.pageYOffset/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }

  window.requestAnimationFrame(scrollPlay);

  return (      
    <>
      <div id="progressBarContainer">
          <div id="progressBar" className='progress' style={{transform: `scale(${scroll}, 1)`}} />
      </div>

      <div className='home bg-black text-white'>
        {/* hero section start */}
        <section className='min-h-screen flex items-center justify-between py-[30px]'>
          <div className='container mx-auto'>
            <div className='w-full max-w-[1050px] mx-auto flex items-center justify-between md:flex-row flex-col'>
              <div className='w-full max-w-[280px] md:max-w-[650px]'>
                <video muted autoPlay loop playsInline>
                  <source src={Videosrc} type="video/mp4"></source>
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className='hero-section-content w-full max-w-[309px] text-center md:mt-0 mt-[66px]'>
                  <h2 className='azosans-black text-[42px] md:mb-10'>MOVIEKEY™</h2>
                  <h4 className='md:text-[32px] text-2xl md:mb-[58px] mb-[22px] md:leading-[38px] leading-7'>digital movie format for collectors</h4>
                  <p className='text-[#556E86] azosans-light text-lg md:mb-[42px] mb-[22px]'>COMING THIS SUMMER</p>
                  <Link to='#0' className='w-full block border border-[#979797] text-2xl py-[22px] hover:opacity-60 transition duration-300'>GET UPDATES</Link>
              </div>
            </div>
          </div>
        </section>
        {/* hero section end */}

        {/* average person section start */}
        <section className='persantage-saction bg-animation py-[30px]'>
          <div className='container mx-auto min-h-screen flex items-center  justify-center'>
            <div>
              <h2 className='azosans-black text-[69px] text-center'>5000</h2>
              <p className='md:text-[42px] text-[32px] text-center max-w-[712px]'>is the number of movies the average person watches in a lifetime</p>
            </div>
          </div>
          <div className='persantage-saction-main'>
          <div className='container mx-auto min-h-screen flex items-center justify-center persantage-saction-second'>
            <div>
              <h2 className='azosans-black text-[69px] text-center'>20%</h2>
              <p className='md:text-[42px] text-[32px] text-center max-w-[760px]'>of people watch a new movie everyday</p>
            </div>
          </div>
          </div>
          <div className='container mx-auto min-h-screen flex items-center justify-center'>
            <div>
              <h2 className='azosans-black text-[69px] text-center'>500,000</h2>
              <p className='md:text-[42px] text-[32px] text-center max-w-[712px]'>movies currently exist</p>
            </div>
          </div>

          {/* movie everyday section start */}
          <div className='min-h-screen flex items-center justify-between relative py-[30px]'>
            <div className='container mx-auto'>
              <div className='flex items-center justify-between first-came-section'>
                <div className='w-fit text-left'>
                    <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] md:mb-20 mb-[30px] first-came'>First came VHS, LaserDisc, DVD, HD DVD, and Blu-ray.</h2>
                    <h4 className='azosans-black md:mb-[72px] mb-[30px] md:text-[32px] sm:text-2xl text-xl consumer-text'>Formats consumers love because they are:</h4>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 leading-para collectible-content'>- Collectible</p>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 leading-para collectible-content'>- Display-able</p>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 leading-para collectible-content'>- Gift-able</p>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 collectible-content'>- Trade-able</p>
                    <div className='lg:mt-[80px] mt-10'>
                      <p className='md:text-[32px] text-2xl py-2 azosans-bold'>Collecting movies in the golden era of home video was so fun</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          {/* movie everyday section end */}

          {/* currently setion start */}
          <div className='min-h-screen flex items-center justify-between relative demand-section py-[30px]'>
            <div className='container mx-auto'>
              <div className='flex items-center justify-between first-came-section'>
                <div className='w-fit text-left'>
                    <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] md:mb-20 mb-[30px] first-came'>Then came VOD (Video-On-Demand).</h2>
                    <h4 className='azosans-black md:mb-[72px] mb-[30px] md:text-[32px] sm:text-2xl text-xl consumer-text'>A format consumers love because it’s:</h4>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 leading-para collectible-content'>- Fast to buy online</p>
                    <p className='md:text-[42px] sm:text-xl text-lg py-2 md:mb-[45px] sm:mb-[15px] mb-0 collectible-content'>- Viewable online </p>
                    <div className='lg:mt-[234px] mt-8'>
                      <p className='azosans-bold md:text-[32px] text-2xl py-2'>However, gaining portability and accessibility was a trade off… </p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* table section start */}
          <div className='relative py-[106px] lg:mr-auto xl:ml-[88px] ml-[25px] mr-[25px] overflow-hidden table-section'>
            <img className='absolute 2xl:top-[-18%] lg:top-[-24%] top-[-18%] right-[0] bg-image-shape' src={Blob} alt="" />
            <div className='lg:ml-[216px] mb-3.5'>
              <h2 className='azosans-black md:text-[42px] text-[32px]'>MOVIEKEY™</h2>
              <p className='text-2xl'>combines the best of all formats and even adds new features</p>
            </div>
            <div className='overflow-hidden overflow-x-auto'>
              <table className='border-spacing-px' cellPadding="0" cellSpacing="0">
                <tr>
                  <th></th>
                  <th className='md:min-w-[300px] min-w-[170px] 2xl:p-4 xl:p-3 p-2.5 md:text-[32px] text-xl custom-bg custom-bg-text'>
                    <img src={Right} alt="" className='text-center mx-auto md:max-w-[178px] max-w-[150px]' />
                  </th>
                  <th className='bg-lightgray md:min-w-[300px] min-w-[170px] 2xl:p-4 xl:p-3 p-2.5 md:text-[32px] text-xl azosans-bold'>VOD</th>
                  <th className='bg-lightgray md:min-w-[300px] min-w-[170px] 2xl:p-4 xl:p-3 p-2.5 md:text-[32px] text-xl azosans-bold'>BLU-RAY/DVD</th>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Portable</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10' /></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Collectible</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Display-able</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Gift-able</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Trade-able</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Fast/Online</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className=' right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={checkmark} alt="" className='right-image mx-auto xl:w-auto md:w-[70px] w-10'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                </tr>
                <tr className='bg-gray'>
                  <td className='bg-lightgray md:text-2xl text-lg 2xl:p-4 xl:p-3 p-2.5 text-center'>Metaverse-ready</td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5 custom-bg'><img src={checkboxgradiant} alt="" className='right-image mx-auto md:max-w-[105px] max-w-[40px]'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                  <td className='text-center 2xl:p-4 xl:p-3 p-2.5'><img src={close} alt="" className='wrong-image mx-auto xl:w-auto md:w-10 w-5'/></td>
                </tr>
              </table>
            </div>
          </div>
          {/* table section end */}

          {/* Better for the planet section start */}
          <div className='min-h-screen flex items-center justify-between relative py-[30px]'>
            <img className='absolute top-[36%] z-0 md:opacity-100 opacity-60' src={BlobShape8} alt="" />
            <div className='container mx-auto relative z-10'>
              <div className='flex items-center justify-between first-came-section'>
                <div className='w-fit text-left'>
                    <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] md:mb-[59px] mb-[30px] first-came'>MOVIEKEY™</h2>
                    <h4 className='azosans-black md:mb-[78px] mb-10 md:text-[42px] sm:text-2xl text-xl consumer-text'>Better for the planet</h4>
                    <p className=' md:text-[32px] lg:text-[42px] md:text-[32px] sm:text-xl text-lg md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Benefits of collectible formats and <Link to="#" className='decoration'>no plastic</Link></p>
                    <p className=' md:text-[32px] lg:text-[42px] md:text-[32px] sm:text-xl text-lg md:leading-[50px] lg:leading-[72px] collectible-content'>- Automated royalty payments and <Link to="#" className='decoration'>no paper</Link></p>
                    <h5 className='azosans-bold md:text-[32px] text-2xl mt-10'>We also plant trees and clean the ocean with profits</h5>
                </div>
              </div>
            </div>
          </div>
          {/* Better for the planet section end */}

          {/* More fun for audiences section start */}
          <div className='min-h-screen flex items-center justify-between relative py-[30px]'>
            <img className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]' src={BlobShape23} alt="" />
            <div className='container mx-auto'>
              <div className='flex items-center justify-between first-came-section'>
                <div className='w-fit text-left z-10 relative'>
                    <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] lg:mb-[59px] mb-[30px] first-came'>MOVIEKEY™</h2>
                    <h4 className='azosans-black lg:mb-[78px] mb-10 md:text-[42px] sm:text-2xl text-xl consumer-text'>More fun for audiences</h4>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Makes digital movies social and share-able for collectors</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Build your MOVIEKEY social profile and make new connections</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Can be played in any application that implements the MOVIEKEY API</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Storable in NFT wallets</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Trade-able on NFT marketplaces</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 collectible-content'>- Each MOVIEKEY can be rare/unique as a MOVIEKEY+</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px]'>- Purchasable with <Link to="#" className='decoration'>crypto</Link> or <Link to="#" className='decoration'>card</Link></p>
                </div>
              </div>
            </div>
          </div>
          {/* More fun for audiences section end */}

          {/* Better for IP owners section start */}
          <div className='min-h-screen flex items-center justify-between relative py-[30px]'>
            <img className='absolute top-[10%] right-[30%]' src={BlobShape12} alt="" />
            <div className='container mx-auto'>
              <div className='flex items-center justify-between first-came-section'>
                <div className='w-fit text-left'>
                    <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] lg:mb-[59px] mb-[30px] first-came'>MOVIEKEY™</h2>
                    <h4 className='azosans-black lg:mb-[78px] mb-10 md:text-[42px] sm:text-2xl text-xl consumer-text'>Better for IP owners</h4>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 mb-0 md:leading-[50px] lg:leading-[72px] leading-para collectible-content'>- Automatic royalties on secondary sales</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 mb-0 md:leading-[50px] lg:leading-[72px] leading-para collectible-content'>- Automatic royalty splits on all sales to IP owners crypto wallets</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 mb-0 md:leading-[50px] lg:leading-[72px] leading-para reach-para w-full max-w-[1150px] collectible-content'>- Reach your audiences. Potential for after-sale re-engagement with collectors via airdrops, and gamification of MOVIEKEY</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 mb-0 md:leading-[50px] lg:leading-[72px] leading-para collectible-content'>- Studio-grade DRM</p>
                    <p className=' md:text-[32px] sm:text-xl text-lg py-2 collectible-content md:leading-[50px] lg:leading-[72px]'>- Easy box customization</p>
                </div>
              </div>
            </div>
          </div>
          {/* Better for IP owners section end */}

        </section>
        {/* average person section end */}

        {/* digital movie collectible section start */}
        <section id='video-sec' className='min-h-screen flex items-center justify-between relative overflow-hidden py-[30px]'>
          {/* <img className='absolute z-10 md:top-[9%] bottom-0 right-[0] lg:h-[1370px] md:h-[1200px] men-image' src={BitmapMan} alt="" /> */}
          <video id='v0' className='absolute z-10 bottom-0 right-[-10%] lg:h-screen' muted preload playsInline>
            <source src={BitmapManVideo} type="video/mp4"></source>
            Your browser does not support HTML video.
          </video>
          <div className='container mx-auto relative z-20'>
            <div className='flex items-center justify-between first-came-section'>
              <div className='w-fit text-left'>
                  <h2 className='azosans-black md:text-[42px] sm:text-[32px] text-[24px] lg:mb-[59px] mb-[30px] first-came'>MOVIEKEY+ </h2>
                  <h4 className='azosans-black lg:mb-[78px] mb-10 md:text-[42px] sm:text-2xl text-xl consumer-text md:leading-[50px]'>An ultra-premium digital movie collectible</h4>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Collections of 10,000 NFTs</p>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- All MOVIEKEY+ in a collection are unique </p>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Officially licensed</p>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Stunning 3D action figures of the movie’s characters</p>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- All the features of standard a MOVIEKEY</p> 
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] mb-0 leading-para collectible-content'>- Additional exclusive club access for a movie’s top fans</p>
                  <p className=' md:text-[32px] sm:text-xl text-lg py-2 md:leading-[50px] lg:leading-[72px] collectible-content'>- Purchasable with crypto or card</p>
              </div>
            </div>
          </div>
        </section>
        {/* digital movie collectible section end */}

        {/* JOIN OUR COMMUNITY section start */}
        <section className='min-h-screen flex items-center justify-between py-[30px]'>
          <div className='container mx-auto relative z-20'>
            <div className='flex items-center justify-center'>
              <div className='w-fit text-left'>
                  <h2 className='azosans-black md:text-[32px] text-2xl md:mb-[75px] mb-10'>JOIN OUR COMMUNITY</h2>
                  <div className='flex justify-center'>
                    <Link to="#0" target="_blank" className='w-full max-w-[179px] flex items-center justify-center md:h-[179px] h-[120px] border border-[#979797] mr-[42px] hover:opacity-60 transition duration-300'>
                      <div >
                          <img className='md:w-full w-20' src={BlackDiscord} alt="" />
                      </div>
                    </Link>
                    <Link to="#0" target="_blank" className='w-full max-w-[179px] flex items-center justify-center md:h-[179px] h-[120px] border border-[#979797] hover:opacity-60 transition duration-300'>
                      <div>
                          <img className='md:w-full w-20' src={twitterIcon} alt="" />
                      </div>
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </section>
        {/* JOIN OUR COMMUNITY section end */}

        {/* beutiful blue section start */}
        <section className='min-h-screen relative overflow-hidden flex items-center justify-center w-full py-[30px]'>
          <div className='w-full text-center'>
            <div className='container mx-auto '>
              <div className='flex items-center justify-center'>
                <div className='w-full'>
                  <Link to="#0" className='md:p-[60px] p-5 max-w-[714px] w-full text-center text-[32px] border border-[#979797] inline-block hover:opacity-60 transition duration-300'>Enquire</Link>
                </div>
              </div>
              <div className='lg:flex w-full items-center justify-between bg-[#101010] left-0 absolute bottom-0'>
                <div className='lg:w-[50%] text-center bg-[#101010]'>
                  <Link to="#0" className='py-[25px] px-[15px]'>
                    <p className='md:text-2xl text-base md:mb-0 mb-2.5 azosans-black px-[15px]'>DISCOVER BEAUTIFUL BLUE EYES MOVIEKEY</p>
                  </Link>
                </div>
                <div className='lg:w-[50%] text-center bg-[#0A0A0A]'>
                  <Link to="#0" className='py-[25px] px-[15px]'>
                    <p className='md:text-2xl text-base md:mb-0 mb-2.5 azosans-black px-[15px]'>DISCOVER BEAUTIFUL BLUE EYES MOVIEKEY+</p>
                    <p className='md:text-[16px] text-[14px] azosans-black'>BECOME A MOVIEFARMER</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* beutiful blue section end */}
      </div>
    </>
  )
}

export default Home