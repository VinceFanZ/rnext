import Link from 'next/link'

import Layout from '../components/Layout'

import { getSearch } from '../api'


const PostLink = (props) => (
  <li>
    <Link
      href={ `/post?title=${props.title}` }
      as= { `/p/${props.id}` }
    >
      <a>{ props.title }</a>
    </Link>
  </li>
)

const Index = (props) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" 
        title="Hello Next.js"/>
      <PostLink id="learn-nextjs" 
        title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" 
        title="Deploy apps with Zeit"/>
    </ul>
    <div>
      {
        props.shows.map(({ show }) => (
          <p key={show.id}>
            <Link
              href={ `/post?id=${show.id}` }
              as={ `/p/${show.id}` }
            >
              <a>{ show.name }</a>
            </Link>
          </p>
        ))
      }
    </div>

    <style jsx global>
      {`
        h1, a {
          font-family: "Arial";
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: blue;
        }
        a:hover {
          opacity: 0.6;
        }
    `}
    </style>
  </Layout>
)

Index.getInitialProps = getSearch

export default Index