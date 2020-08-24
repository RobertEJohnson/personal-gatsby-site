import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const BookLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const FilmLink = ({ title, directors, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{directors}</i>
    </li>
  )


  const {
    firstName,
    stageLastName,
    author,
    occupation,
    readingList,
    filmList,
    designations,
    unemployed,
    countryList,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => BookLink(book))
  const filmLinks = filmList.map(film => FilmLink(film))


  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="250"
          style={{borderRadius: '40px'}}
          src={`../../icons/RobertJohnson.jpg`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hey there! My name is <b>{`${author}`}</b> though I also go by <b>{`${firstName} ${stageLastName}`}</b>. I'm a&nbsp;
            <b>{occupation}</b> discovering the ways of the code. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="i-5">
            In my spare time, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:robertejohnson10@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a few of my all time favorite book series:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a some of my all time favorite films to watch:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{filmLinks}</ul>
          <h5 className="watch-list-title pt-4">
            Here are a couple of my favorite countries to visit:
          </h5>
          <ul style={{fontSize: "0.9rem", listStyleType: 'none', color: 'gray', marginBottom: '0px', paddingBottom: '15px'}}>
            { countryList.map(country=><li key={country}>{country}</li>) }
          </ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        firstName
        stageLastName
        unemployed
        occupation
        author
        designations
        readingList {
          title
          author
          link
        }
        filmList {
          title
          directors
          link
        }
        countryList
      }
    }
  }
`
