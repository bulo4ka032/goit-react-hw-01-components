import styled from '@emotion/styled'

export const ProfileCard = styled.div`
padding: 50px 0 0 0;
 background-color: white;
 border-radius: 5px;
 box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
 min-width: 240px;
 max-width: 350px;
 margin: 20px;
`

export const ProfilePic = styled.img`
width: 120px;
height: 120px;
`

export const ProfileDescr = styled.div`
text-align: center;
`

export const ProfileName = styled.p`
font-size: 20px;
font-weight: 600;
line-height: 1.3;
`

export const ProfileTag = styled.p`
color: grey;
font-size: 16px;
font-weight: 600;
line-height: 0.7;
`
export const ProfileLocation = styled.p`
color: grey;
font-size: 17px;
font-weight: 600;
line-height: 0.7;
`
export const ProfileStatsList = styled.ul`
list-style: none;
display: flex;
padding: 0;
margin-top: 60px;
`
export const ProfileStatsItem = styled.li`
padding: 20px 30px;
max-width: 70px;
min-width: 50px;
display: flex;
flex-direction: column;
border: 1px solid #F0F0F0;
background-color: #f7f8fa;
`