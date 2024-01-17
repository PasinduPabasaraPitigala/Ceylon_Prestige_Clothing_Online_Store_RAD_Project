import './App.css'

 function App() {

  return (
   <div>
       <header className={''}>
           <nav className={'flex items-center justify-between pb-0.5 bg-white-300 text-white-950 border-0'}>
               <img src='src/assets/images/WhatsApp Image 2024-01-15 at 01.29.49_cd67a079.jpg' title ='logo' alt='logo' className='w-[250px] h-[120px]'/>
               <ul className='flex items-baseline gap-6'>
                   <li className={'navtext text-amber-400 hover:text-gray-600 font-bold'}>HOME</li>
                   <li className={'navtext text-amber-400 hover:text-gray-600 font-bold'}>MEN</li>
                   <li className={'navtext text-amber-400 hover:text-gray-600 font-bold'}>WOMEN</li>
                   <li className={'navtext text-amber-400 hover:text-gray-600 font-bold'}>KIDS</li>
                   <li className={'navtext text-amber-400 hover:text-gray-600 font-bold'}>GIFT CARDS</li>
               </ul>
               <div className={'flex gap-6'}>
                   <img src="src/assets/images/search.png" title="searchIcon" alt="searchIcon" className="w-7 h-7" />
                   <img src="src/assets/images/shopping-cart.png" title="shopping-cartIcon" alt="shopping-cartIcon" className="w-7 h-7" />
                   <img src="src/assets/images/user (2).png" title="LoginIcon" alt="LoginIcon" className="w-7 h-7" />
                   <ul>
                       <li className={'navtext2 text-amber-100 hover:text-gray-1000 font-bold bg-blend-color bg-red-600'}>Track My Order</li>
                   </ul>
               </div>
           </nav>
       </header>

       <section>
           <div className={'flex item-center absolute top-[110px]'}>
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-right w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-center w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-left w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-[450px] h-[550px]'}/>
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-[450px] h-[550px]'}/>
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-[450px] h-[550px]'}/>
           </div>
               <img src={'src/assets/images/WhatsApp Image 2024-01-15 at 01.29.49_cd67a079.jpg'} alt={'bgPic'} className={'relative left-[360px]  top-[40px] w-[700px] h-[450px] '}/>
       </section>





       <section className={'magicCard'}>

           <div className={'flex item-center absolute top-[660px]'} >
               <img src={'src/assets/images/pngtree-geometric-mandala-pattern-with-retro-style-image_1072224.jpg'} className={'w-[675px]  h-[660px]'}/>
               <img src={'src/assets/images/pngtree-geometric-mandala-pattern-with-retro-style-image_1072224.jpg'} className={'w-[675px]  h-[660px]'}/>
           </div>
      
           <div className="container mx-auto my-16 flex flex-wrap justify-center  relative top-[120px] ">
               <div className="box m-4 p-4 relative overflow-hidden transition-all duration-1000 ease-out hover:shadow-md hover:transform hover:scale-105 w-[250px] h-[450px]">
                   <img src='src/assets/images/dress15.jpeg' className="w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-out opacity-100 hover:opacity-30" alt="Image 1"/>
                       <div className=" ">
                           {/*text-2xl font-bold text-white opacity-0 transition-all duration-1000 ease-out*/}
                           <h1 className="text-2xl font-bold text-black transition-all duration-1000 ease-out">Title 1</h1>
                           {/*<h2 className="move text-lg text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a side title.</h2>*/}
                           {/*<p className="move text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a description.</p>*/}
                       </div>
               </div>

               <div className="box m-4 p-4 relative overflow-hidden transition-all duration-1000 ease-out hover:shadow-md hover:transform hover:scale-105 w-[250px] h-[450px]">
                   <img src='src/assets/images/dress15.jpeg' className="w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-out opacity-100 hover:opacity-30" alt="Image 1"/>
                   <div className=" ">
                       {/*text-2xl font-bold text-white opacity-0 transition-all duration-1000 ease-out*/}
                       <h1 className="text-2xl font-bold text-black transition-all duration-1000 ease-out">Title 1</h1>
                       {/*<h2 className="move text-lg text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a side title.</h2>*/}
                       {/*<p className="move text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a description.</p>*/}
                   </div>
               </div>

               <div className="box m-4 p-4 relative overflow-hidden transition-all duration-1000 ease-out hover:shadow-md hover:transform hover:scale-105 w-[250px] h-[450px]">
                   <img src='src/assets/images/dress15.jpeg' className="w-full h-full absolute top-0 left-0 transition-all duration-1000 ease-out opacity-100 hover:opacity-30" alt="Image 1"/>
                   <div className=" ">
                       {/*text-2xl font-bold text-white opacity-0 transition-all duration-1000 ease-out*/}
                       <h1 className="text-2xl font-bold text-black transition-all duration-1000 ease-out">Title 1</h1>
                       {/*<h2 className="move text-lg text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a side title.</h2>*/}
                       {/*<p className="move text-white opacity-0 transition-all duration-1000 ease-in-out mt-4">Type anything you like as a description.</p>*/}
                   </div>
               </div>
           </div>
       </section>

       <section className={'fashionBoxes'}>

       </section>
   </div>
  )
}

export default App
