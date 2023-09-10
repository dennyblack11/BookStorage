import React, { useState } from 'react'
import { MdOutlineVisibility } from 'react-icons/md'
import styled from 'styled-components'

interface iCard {
    Image?: string,
    avatar?: string,
    avatarName?: string,
    numb?: string,
    bg?: string,
    bgr?: string
    te?: string
    tex?: string
}

const CardProps:React.FC<iCard> = ({Image, avatar, avatarName, numb, bg, bgr, te, tex}) => {
    const [show , setShow] = useState(false)

const showUp = ()=>{
  setShow(!show)
}
  return (
    <div>
        <Card>
            <ImgHolder>
            <Img src={Image}></Img>
            <Opacity>
                <div>{tex}</div>
            </Opacity>
            <Text>{te}</Text>
            </ImgHolder>
            <Detail onMouseEnter={showUp}
            onMouseLeave={showUp}>
              <Person>
                <Avatar bg={bg}>{avatar}</Avatar>
                <AvatarName>{avatarName}</AvatarName>
              </Person>
              <IconNum>
                <Icon></Icon>
                <Num>{numb}</Num>
              </IconNum>
            </Detail>
            {
              show ? <Extra>
                <PartA>
                  <PartAvatar bgr={bgr}>{avatar}</PartAvatar>
                  <PartAvatarName>{avatarName}</PartAvatarName>
                  <PartAvatarButton>4 Views</PartAvatarButton>
                </PartA>
                <PartB>
                  <Img1 src={Image}></Img1>
                  <Img2 src={Image}></Img2>
                  <Img3 src={Image}></Img3>
                </PartB>
              </Extra> : null
            }
          </Card>
    </div>
  )
}

export default CardProps


const Img3 = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
margin: 0 5px;
`

const Img2 = styled.img`
width: 100px;
height: 100px;
margin: 0 5px;
border-radius: 5px;
`

const Img1 = styled.img`
width: 100px;
height: 100px;
border-radius: 5px;
margin: 0 5px;
`
const PartB = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 15px;

`
const PartAvatarButton = styled.div`
padding: 15px 20px;
background-color: grey;
color: white;
border-radius: 5px;
font-weight: 600;
/* display: flex; */
`

const PartAvatarName = styled.div`
  font-size: 16px;
font-weight: 500;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`

const PartAvatar = styled.div<{bgr?: string}>`
height: 40px;
width: 40px;
border-radius: 50%;
background-color: ${({bgr})=> bgr};
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 600;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 color: white;
`

const PartA = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 350px;
padding: 5px 0;
margin-left: 25px;
`
const Extra = styled.div`
position: absolute;
top: 0;
left: 0;
height: 200px;
width: 400px;
background-color: whitesmoke;
border-radius: 10px;
z-index: 99;
`
const Num = styled.div``
const Icon = styled(MdOutlineVisibility)`
  margin-right: 10px;
  font-size: 20px;
`
const IconNum = styled.div`
display: flex;
justify-content: center;
align-items: center;

`
const AvatarName = styled.div`
margin-left: 5px;
font-size: 16px;
font-weight: 500;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Avatar = styled.div<{bg?: string}>`
height: 40px;
width: 40px;
border-radius: 50%;
background-color: ${({bg})=> bg};
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 600;
 font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Person = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Detail = styled.div`
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0  25px;
cursor: pointer;
`
const Text = styled.div`
padding: 0 10px;
height: 30px;
position: absolute;
top: 10px;
left: 10px;
background-color: brown;
color: white;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
`
const Opacity = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.4);
opacity: 0;
display: flex;
align-items: flex-end;
div{
    color: white;
    margin-left: 10px;
    margin-bottom: 10px;
}
&:hover{
    opacity: 100;
    cursor: pointer;
    transition: all 300ms;
}
`
const Img = styled.img`
width: 100%;
height: 100%;
`
const ImgHolder = styled.div`
width: 100%;
height: 200px;
background-color: brown;
object-fit: cover;
position: relative;
`
const Card = styled.div`
height: 300px;
width: 320px;
position: relative;
/* border: 1px solid silver; */
margin: 10px;
`