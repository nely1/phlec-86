import React, { useState } from 'react'

function Dashboard() {

  /* using hooks. Might help with backend (?) */
  const [user] = useState(() => {return 'Pat012'});
  const [dashImage] = useState(() => { return 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'});
  const [recentImage] = useState(() => { return 'https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'});

  return (
    <div className='DashboardBase'>
      <div className='DashboardGrid'>
        <div className='DashboardGridItem'>
          <div className='DashboardTitle'>
            <h1>Welcome Back, {user}</h1>
            <p className='text2'>Our top Picks For The Day</p>
          </div>
        </div>
        <div className='DashboardGridItem'>
          <div className='DashboardUpComing'>
            <div className='DashboardUpComingTop'>
              <h2>Upcoming Trips</h2>
            </div>
            <div className='DashboardUpComingBottom'>
              <h2>Joe's exotic tour</h2>
              <div className='DashboardUpComingTimeBox'>
                <h1>7 Days Away!</h1>
              </div>
              <div className='DashboardUpComingGoTo '>
                <span className="material-symbols-outlined">double_arrow</span>
              </div>
            </div>
          </div>
        </div>
        <div className='DashboardGridItem'>
          <div className='DashboardMainPictureContainer'>
            <img className='DashboardMainPicture' src={dashImage} alt='DashboardImage'></img>
          </div>
        </div>
        <div className='DashboardGridItem'>
          <div className='DashboardRecentMemories'>
            <div className='DashboardRecentMemoriesTop'>
              <h2>Recent Memories</h2>
            </div>
            <div className='DashboardRecentMemoriesBottom'>
              <img className='DashboardRecentMemoriesPicture' src={recentImage} alt='DashboardMemoriesImage'></img>
              <div className='DashboardRecentMemoriesBottomOverlay'>
                <p className='text3 DashboardRecentMemoriesBottomOverlayText'>Lake Mir</p>
                <div className='DashboardRecentMemoriesgGoTo'>
                  <span className="material-symbols-outlined">double_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard