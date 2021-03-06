import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostListing from "../components/postListing"

export default ({ data }) => (
  <Layout>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    <PostListing posts={data.allMarkdownRemark.edges} />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            visible
          }
          excerpt
        }
      }
    }
  }
`
