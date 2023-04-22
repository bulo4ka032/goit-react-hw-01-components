import styled from '@emotion/styled'

export const StatSection = styled.section`
padding: 40px 0 3px;
 background-color: white;
 border-radius: 5px;
 box-shadow: 0px 0px 10px -1px rgba(0,0,0,0.2);
 min-width: 240px;
 max-width: 530px;
 margin: 20px;
` 

export const StatList = styled.ul`
display: flex;
list-style: none;
padding: 0;
`

export const StatCard = styled.li`
display: flex;
flex-direction: column;
gap: 8px;
padding: 20px 30px;
background-color: ${props =>{
    switch (props.prop) {
        case ".pdf":
            return `#FFABAB`
        case ".docx":
            return `#F7D060`
            case ".mp3":
                return `#F3E99F`
                case ".psd":
                return `#98D8AA`;
        default: 
        return `#FFEBEB`
    }
}
}
`

export const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`

export const StatPerc = styled.span`
font-size: 24px;
 font-weight: 600;
`
