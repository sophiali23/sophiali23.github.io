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
    color: #ff6122;

    &:hover {
        color: orange;
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

const StyledH2 = styled.div`
    padding-bottom: 36px;
`;

const WattpadWork = () => {
    return (
        <Container>
            <StyledH2 className="display-4 text-center">Interactive Onboarding Carousel</StyledH2>
            <p className="lead text-center">Software Engineer Intern at Wattpad, Winter 2019</p>
            <br/>
            <h4>Purpose</h4>
            <p><Link href="https://www.wattpad.com/" target="_blank">Wattpad</Link> is an Internet community for readers and writers to publish new user-generated stories in different genres. In 2018, Wattpad launched their paid content program, <Link href="https://www.wattpad.com/paidstories/" target="_blank">Wattpad Paid Stories</Link>. It is designed to enable readers to monetarily support writers directly on Wattpad. A problem that the Monetization team identified was that over 90% of Wattpad users were not aware of this program. Ultimately, the onboarding carousel is intended to raise awareness of Wattpad Paid Stories.</p>
            <br/>
            <h4>Role and Ownership</h4>
            <p>I was responsible for building the entire onboarding carousel from scratch for the Android platform. I used Android Studio, Java, Kotlin, XML and third-party libraries like RxJava to complete this. I implemented a ViewPager to allow users to swipe left and right through pages of data. Then, I implemented a PagerAdapter to generate the pages that the view shows. After I built the carousel, I implemented the logic to display it on the app. I worked closely with the product manager to understand the onboarding flow and consider edge cases. I also regularly attended design reviews to provide targeted feedback on the Invision prototypes that were provided to me. It was important to build a great onboarding experience for our users. Continually meeting with my team was vital in the success of this project; it ensured that all relevant factors were considered in the solution. After I completed the feature, I was responsible for testing it.</p>
            <ImageContainer>
                <img src={require('../assets/img/paid-stories-onboarding.png')} width="270"/>
                <img src={require('../assets/img/paid-stories-onboarding2.png')} width="270"/>
                <img src={require('../assets/img/paid-stories-onboarding3.png')} width="270"/>
            </ImageContainer>
            <br/>
            <h4>Impact</h4>
            <p>In addition to building the carousel, I was tasked with adding a 'Paid Story' badge to the story profile of all Paid Stories. After both features were live in the production environment, we remeasured awareness of Wattpad Paid Stories. The onboarding carousel, along with the badges, successfully improved awareness by over 70%. As a result, we hit one of our team OKRs for the quarter.</p>
        </Container>
    )
}

export default WattpadWork;
