import React, { useState, useEffect, useCallback } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";
import axios from "axios";

const WorkCard = ({ value }) => {
  const {
    title,
    subtitle,
    description,
    buttonText,
    projectUrl,
    url,
  } = value;
  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title || <Skeleton />} </Card.Title>
          <Card.Text>{(!subtitle) ? "" : subtitle || <Skeleton count={3} />} </Card.Text>
          <hr />
          <Card.Text>{(!description) ? "" : description || <Skeleton count={3} />} </Card.Text>
          <CardButtons buttonText={buttonText} projectUrl={projectUrl} url={url} />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ projectUrl, url }) => {
  return (
    <div className="d-grid gap-2 d-md-block">
      {projectUrl && 
        <a
          href={projectUrl ? projectUrl : ''}
          className="btn btn-outline-secondary mx-2"
        >
          View Project
        </a>
      }
      <a
        href={url ? url : ''}
        className="btn btn-outline-secondary mx-2"
      >
        Read More
      </a>
    </div>
  );
};

export default WorkCard;
