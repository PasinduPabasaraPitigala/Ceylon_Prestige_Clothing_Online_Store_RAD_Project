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
           <div className={'flex item-center'}>
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-right w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-center w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               {/*<img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'absolute-left w-[450px] h-[550px] px-2 bglogo bg-opacity-0 rounded-2xl rounded-2xl'}/>*/}
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-full'}/>
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-full'}/>
               <img src={'src/assets/images/4a96adb3d7e51140c179e812baf185be.jpg'} alt={'bgPic'} className={'w-full'}/>
           </div>

               <img src={'src/assets/images/WhatsApp Image 2024-01-15 at 01.29.49_cd67a079.jpg'} alt={'bgPic'} className={''}/>

       </section>

   </div>
  )
}

export default App
