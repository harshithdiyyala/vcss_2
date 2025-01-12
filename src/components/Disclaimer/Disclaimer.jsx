import React, { useContext } from "react"
import { RegionContext } from "../../context/RegionContext"
import { emails } from "../../content"
import "./Disclaimer.css"

export function Disclaimer() {
  const { region } = useContext(RegionContext)
  return (
    <div className="disclaimer-container container mx-auto">
      <h1 className="disclaimer-heading">Disclaimer for VCSS - V Connect Security Services</h1>

      <p className="disclaimer-paragraph">
        If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at{" "}
        <a
          href={`mailto:${emails[`${region}`]}`}
          className="disclaimer-link">
          {emails[`${region}`]}
        </a>
      </p>

      {/* <h2 className="disclaimer-subheading">Disclaimers for VCSS - V Connect Security Services</h2> */}

      <p className="disclaimer-paragraph">
        All the information on this website - <span className="disclaimer-highlight">{window.location.host}</span> is published in good faith and for general information purposes only. VCSS - V Connect Security Services does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the
        information you find on this website (VCSS - V Connect Security Services) is strictly at your own risk. VCSS - V Connect Security Services will not be liable for any losses and/or damages in connection with the use of our website.
      </p>

      <p className="disclaimer-paragraph">
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site
        owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone "bad".
      </p>

      <p className="disclaimer-paragraph">Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their "Terms of Service" before engaging in any business or uploading any information.</p>

      <h2 className="disclaimer-subheading">Consent</h2>

      <p className="disclaimer-paragraph">By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

      <h2 className="disclaimer-subheading">Update</h2>

      <p className="disclaimer-paragraph">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</p>
      <br />
    </div>
  )
}

export default Disclaimer
