import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

class MyDocument extends Document {
  static gitInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <meta content="yes" name="apple-mobile-web-app-capable" />
          <meta content="yes" name="apple-touch-fullscreen" />
          <meta content="telephone=no,email=no" name="format-detection" />
          <meta name="App-Config" content="fullscreen=yes,useHistoryState=yes,transition=yes" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />

          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument