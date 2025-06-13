import React from 'react'
import './substanceActions.scss'
import actionCardIMG1 from '../../assets/images/sustainabilityActions1.jpg'
import actionCardIMG2 from '../../assets/images/sustainabilityActions2.jpg'
import actionCardIMG3 from '../../assets/images/sustainabilityActions3.jpg'

const SubstanceActions = () => {
  return (
    <div className="substanceActions">
        <div className="substanceActionsContainer">
            <h1 className="substanceActionsTitle" id="substanceActionsTitle">Our sustainability actions</h1>
            <p className="substanceActionsDesc">We owe everything to nature, so we’re going all in on preserving and protecting it with our pioneering spirit that drives us to find revolutionary and sustainable ways to limit packaging waste and promote recycling.</p>
            <div className="actions">
                <article className="actionCard">
                    <img src={actionCardIMG1} alt="Packaging and recycling Image" />
                    <p className="actionCardTitle">Packaging and recycling</p>
                    <p className="actionCardDesc">We believe that packaging should not come at the expense of the environment, as our water could not exist without a healthy environment.</p>
                </article>
                <article className="actionCard">
                    <img src={actionCardIMG2} alt="Source protection Image" />
                    <p className="actionCardTitle">Source protection</p>
                    <p className="actionCardDesc">Our commitment to spring preservation runs deep. We never want to take more than nature can provide so the source can continuously replenish.</p>
                </article>
                <article className="actionCard">
                    <img src={actionCardIMG3} alt="Climate impact Image" />
                    <p className="actionCardTitle">Climate impact</p>
                    <p className="actionCardDesc">We strive to operate sustainably by working to reduce our carbon footprint at every stage of our bottle life cycle from the materials we use, to production and recycling.</p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default SubstanceActions