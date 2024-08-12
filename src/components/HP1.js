import React from 'react'
// bg-gradient-to-br from-black via-gray-900 to-gray-700
import naval from './Images/naval.jpg';
import Typer from './Typer';
import BoxWithPara from './BoxWithPara';
import { HeroSectionRight } from './HeroSectionRight';
export const HP1 = () => {
  return (
    <div class="">
    <div>
    
    <div className='mr-[130vh] mt-[15vh]'>
    <Typer></Typer>
    </div>
    <div className='mr-[73vh] mt-[25vh]'>
    <BoxWithPara/>
    </div>
    <div className='w-[40vh] ml-[110vh] mt-[-53vh]' >
    <HeroSectionRight/>
    </div>
    </div>


    </div>
   

  )
}
