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

const ImageWithCaption = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BoldText = styled.p`
    font-weight: bold;
    text-align: center;
`;

const StyledH2 = styled.div`
    padding-bottom: 36px;
`;

const PagerDutyWork = () => {
    return (
        <Container>
            <StyledH2 className="display-4 text-center">Technical Service Details</StyledH2>
            <p className="lead text-center">Software Engineer Intern at PagerDuty, Fall 2019</p>
            <br/>
            <h4>Purpose</h4>
            <p><Link href="https://www.pagerduty.com/" target="_blank">PagerDuty</Link> is an incident management platform that provides reliable notifications, automatic escalations, on-call scheduling, and other functionality to help teams detect and fix infrastructure problems quickly. PagerDuty has a <Link href="https://support.pagerduty.com/docs/service-directory" target="_blank">Service Directory</Link> that allows users to search for the services they go on call for and learn more about the other services in their organization. During my time at PagerDuty, I worked on the Mobile team and was one of the project leads for the Technical Service Details project. This project continues development of the Service Directory. It mainly entails building a new screen for when a user taps on a service from the Service Directory. This screen will display details of that particular service including status, incident count, who is on call, which team it is owned by, its description and escalation policy. Ultimately, this is intended to make technical service information accessible to our mobile users. It allows users to learn more about each technical service in their organization.</p>
            <br/>
            <h4>Role and Ownership</h4>
            <p>As a project lead, I led meetings to plan and scope the work. I made tickets and worked closely with the product manager and designer. I was responsible for building the entire Service Details screen from scratch for the Android platform. I leveraged the MVVM architecture pattern and used Android Studio, Java, Kotlin, XML and third-party libraries like Retrofit, RxJava and Firebase to complete this. I wrote UI, unit and integration tests using Espresso, JUnit and Mockito. I utilized Retrofit with OkHttp for API calls and the Picasso library for image caching. Tapping on an on-call user should take the user to the respective user's profile. Similarly, tapping on the escalation policy should take the user to the respective escalation policy screen. I also implemented a "pull-to-refresh" feature, made the description expandable, and ensured both dark and light mode compatibility. Moreover, I added tracking metrics. I have set up dashboards and created charts in Periscope using SQL to monitor the effects of this feature. Lastly, I scheduled a feature review meeting with my team to demo the feature, get their feedback and make changes accordingly.</p>
            <ImageContainer>
                <img src={require('../assets/img/service-directory.gif')} width="270"/>
                <img src={require('../assets/img/service-details.gif')} width="270"/>
            </ImageContainer>
            <ImageContainer>
                <ImageWithCaption>
                    <BoldText>Dark Mode</BoldText>
                    <img src={require('../assets/img/service-details-dark.png')} width="270"/>
                </ImageWithCaption>
                <ImageWithCaption>
                    <BoldText>Light Mode</BoldText>
                    <img src={require('../assets/img/service-details-light.png')} width="270"/>
                </ImageWithCaption>
            </ImageContainer>
            <br/><br/>
            <ImageWithCaption>
                <BoldText>Tapping on an on-call user takes user to the respective user's profile</BoldText>
                <img src={require('../assets/img/on-call-user.gif')} width="270"/>
            </ImageWithCaption>
            <br/><br/>
            <ImageWithCaption>
                <BoldText>Tapping on the escalation policy takes user to the respective escalation policy screen</BoldText>
                <img src={require('../assets/img/escalation-policy.gif')} width="270"/>
            </ImageWithCaption>
            <br/><br/>
            <h4>Impact</h4>
            <p>This feature was released at the end of my internship. Many users have been requesting this feature, so I am very excited to be making technical service information accessible to users on mobile!</p>
        </Container>
    )
}

export default PagerDutyWork;