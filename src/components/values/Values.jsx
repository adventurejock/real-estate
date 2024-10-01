import React,{useState} from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "./Values.css";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion'
const Values = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart vright">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. <br/> We
            beleive a good blace to live can make your life better
          </span>

          <Accordion allowMultipleExpanded={false} preExpanded={[0]} className="accordion">
            {

                data.map((item,i)=>{
                    const [className,setClassName]=useState(null)
                    return (
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className="accordion-button ">
                                    <AccordionItemState>
                                        {
                                            ({expanded})=>{
                                                expanded? setClassName('expanded'):setClassName('collapsed')
                                            }
                                        }
                                    </AccordionItemState>
                                    <div className="flexCenter icon">{item.icon}</div>
                                    <span className="primarytext">
                                        {item.heading}
                                    </span>
                                    <div className="flexCenter icon">
                                        <MdOutlineArrowDropDown size={20}/>
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    {item.detail}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    )
                })
            }

          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Values;
