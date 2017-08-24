import Layout from '../components/Layout'

const Post = (props) => (
  <Layout>
    <h2>{ props.url.query.title }</h2>
    <p>This is the blog post content.</p>
  </Layout>
)

export default Post