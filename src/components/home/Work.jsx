import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import WorkCard from "./WorkCard";
import axios from "axios";

const workArray = [
  {
    title: "Community Champions",
    subtitle: "MongoDB",
    description: "I supported the expansion of MongoDB's Community Champions program globally by building a landing page, Champion profile pages and an application form.",
    projectUrl: "https://www.mongodb.com/community/forums/champions/",
    url: "https://www.mongodb.com/blog/post/intern-series-making-remote-work-meaningful-meet-sophia-li",
  },
  {
    title: "Technical Service Details",
    subtitle: "PagerDuty",
    description: "I contributed to building PagerDuty's service directory on Android by building the UI for service details.",
    path: "/pagerduty",
  },
  {
    title: "Hack Day",
    subtitle: "PagerDuty",
    description: "I participated in Hack Days at PagerDuty where I got to build features like editing schedule colours and sharing incidents on different platforms. My hack for incident sharing won Best Product Enhancement.",
    path: "/pagerduty-hacks",
  },
  {
    title: "Paid Stories Onboarding",
    subtitle: "Wattpad",
    description: "I supported the launch of Wattpad's Paid Stories program, a program that allows writers to monetize their work, by building an onboarding carousel to introduce it to users.",
    path: "/wattpad",
  }
]

const Work = ({ heading }) => {
  return (
    <Jumbotron fluid id="work" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {workArray.length
            ? workArray.map((work, index) => (
              <WorkCard
                key={`project-card-${index}`}
                id={`project-card-${index}`}
                value={work}
              />
            ))
            : null}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Work;
