import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './components/Loading'
import Section from './components/Section'
import { initalLoading, after1Second } from './redux/Video.jsx'

function App() {

  const dispatch = useDispatch();
  const videoState = useSelector(state => state.videoReducer);

  useEffect(() => {
    dispatch(initalLoading());
    setTimeout(() => {
      dispatch(after1Second());
    }, 1000)
  }, [])

  return (
    <>
      <div className='app'>
        {
          videoState.Loading ?
            <Loading />
            :
            <Section videoState={videoState} />

        }
      </div>
    </>
  )
}

export default App
