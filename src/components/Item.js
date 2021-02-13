import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '../components/Button'
import './item.css'
const Item = ({title,desc,backgroundImg,leftBtnTxt,rightBtnTxt,leftBtnLink,rightBtnLink,twoButtons,first}) => {
    return (
        <div className='item' style={{backgroundImage:`url(${backgroundImg})`}} >
            <div className="item__container">
                <div className='item_text'>
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
                <div className="item__lowerThird">
                    <div className="item_buttons">
                        <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />
                        {twoButtons && (<Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />)}
                    </div>
                    {first && (
                        <div className='item__expand'>
                        <ExpandMoreIcon />
                        </div>
                    )}
                </div>

            </div>
            
        </div>
    )
}

export default Item
