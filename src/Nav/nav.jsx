import React,{useContext,useEffect} from 'react';
// import {useThemesContext} from '../providers/ThemesProvider';
import Question from '../components/question/question';
import ChatGPTLogo from '../assets/chatgpt-icon.svg';
import { MdHome } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { GiUpgrade } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import './nav.scss';
import { ThemesContext } from '../providers/ThemesProvider';

const nav = () => {
  // const {themes,setThemes} = useContext(useThemesContext);
  // console.log(useThemesContext)
  const {themes,darkTheme,lightTheme} = useContext(ThemesContext);
useEffect(()=>{
  if(themes === 'light'){
    document.body.classList.add('bg_light-mode');
  }else{
    document.body.classList.remove('bg_light-mode');
  }
},[themes]);
  return <div className="nav__container">
    <div className="nav__top-side">
      <div className="logo">
      <img src={ChatGPTLogo}/> 
      <h2 className="logo__heading">ChatGPT</h2>
      </div>
      <div className={`new__chat-nav ${themes === 'light'? 'white-text adjust-bg1':''}`}><FaPlus/>New Chat</div>
      <Question themes={themes} question="What is Programming?"/>
      <Question themes={themes} question="How to use Api?"/>
    </div>

    <div className="nav__ul__section">
    <ul>
      <li className={`${themes === 'light'?'text__lightMode':''}`}><MdHome className="listIcon"/>Home</li>
      <li className={`${themes === 'light'?'text__lightMode':''}`}><CiBookmark className="listIcon"/>Saved</li>
      <li className={`${themes === 'light'?'text__lightMode':''}`}><GiUpgrade className="listIcon"/>Upgrade to Pro</li>
    </ul>
    <div className='modes'>
      <div className="white-mode" onClick={()=>lightTheme()} ></div>
      <div className="dark-mode" onClick={()=>darkTheme()}></div>
    </div>
    </div>
  </div>;
};

export default nav;
