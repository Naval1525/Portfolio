import React from 'react'

import { Skill } from './Skill'
import {Skill1} from './Skill1'
import {Skill2} from './Skill2'


export const HP2 = () => {
  return (
    <div> 
        <div className="text-black font-extrabold text-6xl pt-6 pl-44 h-screen">
         TECH <span className='text-[#6666FF]'> STACK</span>
        </div>
        
        <div className='right-[140vh] absolute top-[116vh] '>
        <Skill/>
        </div>
        <div className='right-[140vh] absolute top-[116vh] '>
        <Skill1></Skill1>
        </div>
        <div className='right-[140vh] absolute top-[116vh] '>
        <Skill2></Skill2>
        </div>
       
    </div>
  )
}
