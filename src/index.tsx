import { Hono } from 'hono'
import { find } from './apis/find'

const app = new Hono()

export const Home = () => {
  return (
    <html>
      <head>
        <title>ZipcodeJP (日本郵便番号検索API)</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.min.css" />
      </head>

      <body>
        <h1>ZipcodeJP</h1>
        <p>A RESTful API for searching Japan Address by Zipcode</p>
        <p>日本郵便番号検索API</p>

        <h2>1. Try</h2>
        <form action="/api/find" method="get">
          <label>
            <p>Zipcode</p>
            <input type="text" name="zipcode" value="" placeholder="000-0000" />
          </label>
          <p>
            <button type="submit">Search</button>
          </p>
        </form>

        <h2>2. Usage</h2>

        <pre>
          <code id="curl-example">
            {`curl -X GET "/api/find?zipcode=1080022"`}
          </code>
        </pre>

        <h2>3. API Documents</h2>

        <p>Success</p>
        <pre>
          <code>
            {
              JSON.stringify({
                "zipCode": "1080022",
                "_province": "ﾄｳｷｮｳﾄ",
                "_city": "ﾐﾅﾄｸ",
                "_town": "ｶｲｶﾞﾝ(3ﾁｮｳﾒ)",
                "province": "東京都",
                "city": "港区",
                "town": "海岸（３丁目）"
              }, null, 2)
            }
          </code>
        </pre>
        <p>400 Bad Request</p>
        <pre>
          <code>
            {
              JSON.stringify({
                "error": "Zipcode is required"
              }, null, 2)
            }
          </code>
        </pre>
        <p>404 Not Found</p>
        <pre>
          <code>
            {
              JSON.stringify({
                "error": "Address not found"
              }, null, 2)
            }
          </code>
        </pre>


        <footer>
          made with ❤️ by <a href="https://x.com/ThaddeusJiang" target="_blank"
            rel="noopener noreferrer">@ThaddeusJiang</a> | <a href="https://github.com/ThaddeusJiang/ZipcodeJP"
              target="_blank" rel="noopener noreferrer">open source on GitHub</a>
        </footer>
      </body>

      <script>
        const url = window.location.origin + `/api/find?zipcode=1080022`;
        document.getElementById(`curl-example`).textContent = `curl -X GET ` + url;
      </script>
    </html>
  )
}

app.get('/', (c) => {
  return c.html(<Home />)
})

/**
 * 郵便番号から住所を検索する
 * @param zipcode 郵便番号
 * @returns 住所
 *
 * @example
 * curl -X GET "/api/find?zipcode=2440817"
 */
app.get('/api/find', (c) => {
  const zipcode = c.req.query('zipcode')
  if (!zipcode) {
    return c.json({
      message: 'Zipcode is required',
    }, 400)
  }
  const data = find(zipcode)
  if (!data) {
    return c.json({
      message: 'Address not found',
    }, 404)
  }
  return c.json(data)
})

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
}
