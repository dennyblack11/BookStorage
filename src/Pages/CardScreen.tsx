import React from "react";
import { styled } from "styled-components";
import v from "../Assets/img.jpg";
import u from "../Assets/threelines.gif";
import w from "../Assets/pix2.png";
import x from "../Assets/pix3.png";
import y from "../Assets/pix10.png";
import z from "../Assets/pix4.jpg";
import a from "../Assets/img1.png";
import b from "../Assets/img7.png";
import c from "../Assets/img5.webp";
import d from "../Assets/img3.jpg";
import e from "../Assets/img9.png";
import f from "../Assets/img2.png";
import g from "../Assets/img6.webp";
import h from "../Assets/img8.png";
import i from "../Assets/img4.png";

import CardProps from "./CardProps";

const CardScreen = () => {

  return (
    <div>
      <Container>
        <Main>
          <CardProps Image={v} avatar="K H" avatarName="Kevin Hart" numb="4" bg="aquamarine" bgr="crimson" te="Comedy" tex="I Can't Make this up"/>
          <CardProps Image={u} avatar="D" avatarName="Daniel Micheal" numb="0" bg="skyblue" bgr="darkorange"  te="Music" tex="My Pride"/>
          <CardProps Image={w} avatar="P" avatarName="Peter" numb="7" bg="blue" bgr="lightgray"  te="Training" tex="Today na fire"/>
          <CardProps Image={x} avatar="B" avatarName=" Bukola" numb="25" bg="lightblue" bgr="gold"  te="Resource" tex="Do hard Things"/>
          <CardProps Image={y} avatar="D" avatarName="Denny Black" numb="10" bg="crimson" bgr="dodgerblue"  te="Science" tex="I Can do this"/>
          <CardProps Image={z} avatar="V D" avatarName="Valerian Dc" numb="6" bg="lightgreen" bgr="darkorange"  te="Technology" tex=" Make this work"/>
          <CardProps Image={b} avatar="G M" avatarName="Grengol Mendel" numb="12" bg="#A71E23" bgr="#2194AF" te="Scientist" tex="Never Give Up"/> 
          <CardProps Image={c} avatar="C" avatarName="Casmir " numb="17" bg="#F5E70C" bgr="#DA70AC"  te="Server" tex="Serve the Lord at all times"/> 
          <CardProps Image={a} avatar="M.F" avatarName="Mr.Fred" numb="30" bg="#301524" bgr="#A0722A"  te="Business" tex="Success is yours"/> 
          <CardProps Image={d} avatar="C V" avatarName="Obidike" numb="50" bg="#F074A3" bgr="#D5C7E2"  te="Priest" tex="Servent of God"/> 
          <CardProps Image={e} avatar="L A" avatarName="Lydia Agafe" numb="3" bg="#F1A9C3" bgr="#A1D2EE"  te="Forex" tex="Make money through internet"/> 
          <CardProps Image={f} avatar="B O" avatarName="Blessing Ogo" numb="21" bg="#095093" bgr="#72CCEA"  te="Singer" tex="He who sings well prays twice"/> 
          <CardProps Image={g} avatar="L A" avatarName="Lambert Kamcy" numb="11" bg="#F074A3" bgr="#74cdf0"  te="Photographer" tex="Make expensive shots"/> 
          <CardProps Image={h} avatar="S" avatarName="Sylvia" numb="7" bg="#6b99c4" bgr="#c2f178"  te="AgbaCoder" tex="Bring your problems for solutions"/> 
          <CardProps Image={i} avatar="J E" avatarName="Joseph Esther" numb="35" bg="#37373c" bgr="#90a4b9"  te="Instructor" tex="Knows most things on NODEJS"/> 
        </Main>
      </Container>
    </div>
  )}

  export default CardScreen;

  const Main = styled.div`
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;


  `
  const Container = styled.div`
  height: 100%;
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `