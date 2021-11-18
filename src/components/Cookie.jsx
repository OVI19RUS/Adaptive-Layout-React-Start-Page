import React from 'react';
import CookieConsent from "react-cookie-consent";

function Cookie() {
    return (
        <CookieConsent
            debug={true}
            enableDeclineButton
            declineButtonText="REJECT"
            buttonText='ACCEPT'
            containerClasses='cookie--container'
            style={{ textAlign: 'left', alignItems: 'center', lineHeight: '1', maxWidth: '82.5%', left: '9%', marginBottom: '20px', borderRadius: '10px', backgroundColor: 'white', color: '#0E0C20', boxShadow: '4px 4px 24px 0px rgba(34, 60, 80, 0.2)', oveerflowWrap:'break-word'}}
            buttonStyle={{ fontFamily: "'Jost', sans-serif", backgroundImage: 'linear-gradient(180deg, #7C45F8 0%, #746FFA 79.33%, #6D90FB 100%)', width:'7em', height:'3em', borderRadius:'8px',fontWeight:'600', color:'white'}}
            declineButtonStyle={{fontFamily: "'Jost', sans-serif", backgroundColor:'#F8F8F9', color:'black', width:'7em', height:'3em', borderRadius:'8px',fontWeight:'600'}}
          >
            <h2 className='cookie--label'>Cookie consent</h2>
            <p style={{ fontSize: "14px" }}>
              This website uses cookies. By continuing to browse, you are accepting
              its use. If you want to know more, see our{" "}
              <a href="/privacy">Privacy Policy</a>
            </p>
          </CookieConsent>
    )
}

export default Cookie
