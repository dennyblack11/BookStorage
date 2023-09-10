import React from 'react'
import { MdOutlineVisibility } from 'react-icons/md';
import styled from 'styled-components';

const CardPage = () => {
  return (
    <div>
        <Container>
            <Main>
                <Card>
                    <PartA></PartA>
                    <PartB>
                        <Avater>
                        <AvaterNameAbb>K H</AvaterNameAbb>   
                        <AvaterName>Kevin Hart</AvaterName>
                        </Avater>
                        <IconDiv>
                            <Icon><MdOutlineVisibility/></Icon>
                            <Num>4</Num>
                        </IconDiv>
                    </PartB>
                </Card>

            </Main>
        </Container>
    </div>
  )
}

export default CardPage;



// const Icon = styled.div``

const Num = styled.div``

const Icon = styled.div``

const IconDiv = styled.div``

const AvaterName = styled.div``

const AvaterNameAbb = styled.div`

`

const Avater = styled.div``

const PartB = styled.div``

const PartA = styled.div`
width: 320px;
height: 100px;
background-color: #a8dce2;
`

const Card = styled.div`
width: 320px;
height: 300px;
background-color: blanchedalmond;
`

const Main = styled.div`
width: 74%;
height: 450px;
background-color: blueviolet;
`

const Container = styled.div`
height: 500px;
width: 100%;
background-color: violet;
display: flex;
justify-content: center;
align-items: center;
`