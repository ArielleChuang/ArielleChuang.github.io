import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function About() {

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>Education $</span></p>
            <p>
                <p style={{color: info.baseColor}}>University of Michigan - Ann Arbor, MI, 2024</p>
                <p>Master of Science in Industrial and Operations Engineering</p>
                <p style={{color: info.baseColor}}>National Cheng Kung University, Taiwan, 2022</p>
                <p>Bachleor of Management Science in <br></br>
                Industrial and Information Management (major) <br></br>
                Psychology (minor)</p>
            </p>
        </>;
        // return <>
        //     <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cat
        //         about{firstName} </p>
        //     <p><span style={{color: info.baseColor}}>about{firstName} <span
        //         className={Style.green}>(main)</span> $ </span>
        //         {info.bio}
        //     </p>
        // </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>Skills $</span></p>
            <p style={{color: info.baseColor}}> Programming</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> Software</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            {/* <p style={{color: info.baseColor}}> Language</p>
            <ul className={Style.skills}>
                {info.skills.language.map((language, index) => <li key={index}>{language}</li>)}
            </ul> */}
        </>;
        // return <>
        //     <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
        //     </p>
        //     <p><span style={{color: info.baseColor}}>skills/tools <span
        //         className={Style.green}>(main)</span> $</span> ls</p>
        //     <p style={{color: info.baseColor}}> Proficient With</p>
        //     <ul className={Style.skills}>
        //         {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
        //     </ul>
        //     <p style={{color: info.baseColor}}> Exposed To</p>
        //     <ul className={Style.skills}>
        //         {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
        //     </ul>
        // </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>Work Experience $</span></p>
            <p>
                <p style={{color: info.baseColor}}>University of Michigan Transportation Research Institute</p>
                <p>Human Factors Group - Research Assistant</p>
            </p>
            <p>
                <p style={{color: info.baseColor}}>MediaTek Inc.</p>
                <p>Web Development Engineer – Intern</p>
            </p>
        </>;
        // return <>
        //     <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
        //         hobbies/interests</p>
        //     <p><span style={{color: info.baseColor}}>hobbies/interests <span
        //         className={Style.green}>(main)</span> $</span> ls</p>
        //     <ul>
        //         {info.hobbies.map((hobby, index) => (
        //             <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
        //         ))}
        //     </ul>
        // </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={miscText()}/>
            <Terminal text={skillsText()}/>
            {/* <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/> */}
        </Box>
    )
}