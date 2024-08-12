import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Icon1 from './skill/Java-Dark.svg';
import Icon2 from './skill/Python-Dark.svg';
import Icon3 from './skill/AWS-Dark.svg';
export const HP3 = () => {
  return (
    <div>
    
        <div className='absolute top:[100vh] font-sans font-bold'>
        <VerticalTimeline lineColor="#666666">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#7A7AFF',
          border: '1px solid black',
          color: 'white',
          width: 300,
          height: 200,
          padding: 20,
          borderRadius: '20px',
          left: -210,
          boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
        }}
        
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img src={Icon2} alt="Python" />
        }
      >
        <h3 className="vertical-timeline-element-title ">Python</h3>
        <p className='font-sans font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
    
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: '#7A7AFF',
      border: '1px solid black',
      color: 'white',
      width: 300,
      height: 200,
      padding: 20,
      borderRadius: '20px',
      right: -210,
      boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
    }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={
      <>
        <img src={Icon1} alt="Python" />
      </>
    }
  >
    <h3 className="vertical-timeline-element-title ">JAVA</h3>
        <p className='font-sans font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: '#7A7AFF',
      border: '1px solid black',
      color: 'white',
      width: 300,
      height: 200,
      padding: 20,
      borderRadius: '20px',
      left: -210,
      boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
    }}
  
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={
      <>
        <img src="https://user-images.githubusercontent.com/36547915/97088991-45da5d00-1652-11eb-900f-80d106540f4f.png" alt="Python" />
      </>
    }
  >
    <h3 className="vertical-timeline-element-title ">LEETCODE</h3>
        <p className='font-sans font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{
      background: '#7A7AFF',
      border: '1px solid black',
      color: 'white',
      width: 300,
      height: 200,
      padding: 20,
      borderRadius: '20px',
      right: -210,
      boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
    }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={
      <>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66mReT2if0wNrCGusdbYxKOGtm2X1rmFEUQ&s" alt="Python" />
      </>
    }
  >
    <h3 className="vertical-timeline-element-title ">MERN STACK</h3>
        <p className='font-sans font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{
      background: '#7A7AFF',
      border: '1px solid black',
      color: 'white',
      width: 300,
      height: 200,
      padding: 20,
      borderRadius: '20px',
      left: -210,
      boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
    }}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={
      <>
        <img src={Icon3} alt="Python" />
      </>
    }
  >
   <h3 className="vertical-timeline-element-title ">AWS CLOUD</h3>
        <p className='font-sans font-semibold'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
        </p>
  </VerticalTimelineElement>


  <div className='absolute top-[166vh] left-0'>
  <div className="box mx-auto" style={{
    background: '#7A7AFF',
    border: '1px solid black',
    color: 'white',
    width: 300,
    height: 200,
    padding: 20,
    borderRadius: '20px',
    boxShadow: '0px 0px 19px rgba(0, 0, 0, 0.5)'
  }}>
    <h3 className="box-title text-lg font-bold">Present</h3>
    <h4 className="box-subtitle text-sm">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </div>
</div>
  
  
</VerticalTimeline>
       
    </div>
    </div>
  )

}
