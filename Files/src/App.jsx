import pfp from './Images/pfp.jpg';

import './App.css'

function App() {

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='w-80 bg-white rounded-lg shadow-md overflow-hidden relative'>
        <div className="h-32 bg-green-400"></div>
        
        <ProfilePic/>
        <Name/>
        <Info/>
        
      </div>
    </div>
  )
}

function ProfilePic(){
  return (
    <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white '>
      <img src={pfp} alt="Profile" className="object-cover w-full h-full"></img>
    </div>
  )     
}

function Info() {
  return (
    <div className="grid grid-cols-3 text-center mt-5 border-t border-gray-200">
      <div className="py-4">
        <div className="text-lg font-medium">80K</div>
        <div className="text-gray-500 text-xs">Followers</div>
      </div>
      <div className="py-4">
        <div className="text-lg font-medium">803K</div>
        <div className="text-gray-500 text-xs">Likes</div>
      </div>
      <div className="py-4">
        <div className="text-lg font-medium">1.4K</div>
        <div className="text-gray-500 text-xs">Photos</div>
      </div>
    </div>
  );
}


function Name() {
  return (
    <div className="mt-20 text-center">
      <div className="text-lg font-serif font-medium">Arataka Reigen</div>
      <div className="text-gray-500 text-sm">29</div>
      <div className="text-gray-500 text-sm">Seasoning City</div>
    </div>
  );
}


export default App
