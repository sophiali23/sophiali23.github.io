import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 120px 80px 60px;

    @media (max-width: 450px) {
        padding: 120px 48px 60px;
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: #048a24;

    &:hover {
        color: lightgreen;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    gap: 60px;
    align-self: center;
    padding: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const PagerDutyHackDays = () => {
    return (
        <Container>
            <h2 className="display-4 pb-5 text-center">Hack Day Features</h2>
            <p className="lead text-center">Software Engineer Intern at PagerDuty, Fall 2019</p>
            <h4>How do Hack Days work at PagerDuty?</h4>
            <p><Link href="https://www.pagerduty.com/" target="_blank">PagerDuty</Link>, a leader in the incident management space, does company-wide hack days every month. I enjoyed actively participating in these! It gave me the chance to work on whatever I personally found interesting. I spent my hack days building fun features on Android. It was a great experience getting to demo my hacks during hack day presentations as well. I am very excited to have shipped all of the following features! In particular, my Share Incident feature won for Best Product Enhancement and Best Vibe at the December 2019 Hack Day.</p>
            <br></br>
            <h4>Edit Schedule Colour</h4>
            <p>Each user has a colour associated with their profile which is used in the on-call schedule to quickly recognize the user. Users can now change this on Android! There is a plethora of colours to choose from! Fun fact: Viridian is our most popular colour :)</p>
            <ImageContainer>
                <img src={require('../assets/img/edit-schedule-colour.gif')} width="270"/>
                <img src={require('../assets/img/colours1.png')} width="270"/>
                <img src={require('../assets/img/colours2.png')} width="270"/>
            </ImageContainer>
            <br/><br/>
            <h4>Edit Incident Name</h4>
            <p>This feature allows users, given that they have the permission, to edit the name of an incident.</p>
            <ImageContainer>
                <img src={require('../assets/img/edit-incident-name.gif')} width="270"/>
                <img src={require('../assets/img/edit-incident-name.png')} width="270"/>
            </ImageContainer>
            <br/><br/>
            <h4>Share Incident</h4>
            <p>Ever wanted to mention an incident to others in your organization? This feature allows users to share incidents to Slack, email, SMS, etc! This hack won for Best Product Enhancement and Best Vibe at the December 2019 Hack Day.</p>
            <ImageContainer>
                <img src={require('../assets/img/share-incident.gif')} width="270"/>
            </ImageContainer>
        </Container>
    )
}

export default PagerDutyHackDays;
