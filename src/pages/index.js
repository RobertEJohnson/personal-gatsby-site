import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default ({ data }) => {
  const { unemployed, firstName, lastName, stageLastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title={dark?"Robert Wolfe":"Robert Johnson"}/>
      <Container className="text-center" fluid>
        <Image
          fluid
          src={dark ? `../../icons/seymour.png` : `../../icons/cat-walk.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
          style={{borderRadius: '40px', maxHeight: '400px'}}
        />
        <Container className="py-0 my-0">
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">
              { dark ? stageLastName : lastName}
            </span>
          </h1>
          <p>
            <i>
              A {occupation} who's a&nbsp;
              {dark ? <><span style={{color: '#fd1212', fontWeight: 'bold'}}>Community actor </span>by night</> : <><span style={{color: 'orange', fontWeight: 'bold'}}>Cat enthusiast</span> by day</>}
            </i>
          </p>
        </Container>

        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/RobertEJohnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/robert-johnson-323bb2aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="mailto:robertejohnson10@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="../../R_Johnson_Resume.pdf" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
        <br/>
        <br/>
        {unemployed && (
          <p className="mt-2">
            <b> I'm looking for new opportunities! :)</b>
          </p>
        )}
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        stageLastName
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
