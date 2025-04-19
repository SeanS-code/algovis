import { useState } from 'react'

import './App.css'

function App() {

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex justify-end gap-10 mr-10 my-5'>
          <h4 className='font-silkscreen'><a href="#">Home</a></h4>
          <h4 className='font-silkscreen'><a href="#">Data Structures</a></h4>
          <h4 className='font-silkscreen'><a href="#">Algorithms</a></h4>
        </div>

        <div className='flex-1'>
          <div className='flex flex-col gap-15 items-center mt-10'>
            <h2 className='flex justify-center max-w-lg text-5xl font-ps2'>Algo<span className='text-pink-500'>/vis</span></h2>
            <h4 className='flex justify-center max-w-lg text-2xl font-silkscreen'>Watch Algorithms at Work</h4>
            <p className='font-mono max-w-4xl mb-10 text-center'><b>Algo/vis</b> is an interactive web-based tool designed to help users understand 
              how algorithms work <b>through dynamic, step-by-step animations</b>. Whether you're a beginner 
              learning sorting algorithms or an advanced developer wanting to <b>analyze graph traversal techniques</b>, 
              this visualizer breaks down each process into easily digestible visuals</p>
          </div>

          <div className='flex flex-col items-center border-y-2 border-gray-300'>
            <h3 className='w-80 text-center text-ms font-mono py-4 mt-6 bg-pink-200'><b>Data Structures</b></h3>
            <div className='min-w-screen flex justify-center gap-10 my-15 text-center  text-xl'>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Array</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Queue</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Stack</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Trees</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Heap</div>
            </div>
            <h3 className='w-80 text-center text-ms font-mono py-4 mt-4 bg-pink-200'><b>Algorithms</b></h3>
            <div className='min-w-screen flex justify-center gap-10 my-15 text-center  text-xl'>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>BFS/DFS</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Graph Traversal</div>
              <div className='w-3xs py-15 bg-gray-600 text-white font-silkscreen'>Backtracking</div>
            </div>
          </div>
        </div>

        <div className='flex justify-center py-2'>
          <h3 className='font-bold'>- <a href='https://github.com/SeanS-code'>SeanS-code@github</a> -</h3>
        </div>
      </div>
    </>
  )
}

export default App
